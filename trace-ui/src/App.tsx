import './App.css';
import { styled } from '@mui/material/styles';
import { Box, Paper, Button, Checkbox, Divider, FormControlLabel, Grid, Stack, TextField } from '@mui/material';
import { TraceRequirement, Span, ComparisonResult } from './Interfaces';
import { v4 as uuidv4 } from "uuid";
import { FlameGraph, ServiceGraph, SpanTree } from './MermaidDefinitions';
import { useEffect, useState } from 'react';
import mermaid from "mermaid";
import { parse } from 'path';
import { compare } from './traceCompare';
import { Presets } from './Presets';
import { TraceEditor } from './TraceEditor';
import { isValidJson } from './helper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export interface SpanProps {
  span: Span;
  name: string;
  index: number;
}

function FormContent() {
  const [traces, setTraces] = useState<string[]>([]);
  const [selectedTrace, setSelectedTrace] = useState<string>('');
  const [spans, setSpans] = useState<Span[]>([]);
  const [requiredSpanText, setRequiredSpanText] = useState('');
  
  const [observedSpanText, setObservedSpanText] = useState('');
  const [observedSpans, setObservedSpans] = useState<Span[]>([]);

  // compare(observedSpans, spans.filter(span => span.attributes["criteria.isDisallowed"] !== "true"), spans.filter(span => span.attributes["criteria.isDisallowed"] === "true")))
  const [comparisonResult, setComparisonResult] = useState<ComparisonResult | null>(null);

  useEffect(() => {
    console.log("Spans: ", JSON.stringify(spans, null, 2));
    setComparisonResult(compare(observedSpans, spans.filter(span => span.attributes["criteria.isDisallowed"] !== "true"), spans.filter(span => span.attributes["criteria.isDisallowed"] === "true")));

    // remove the data-processed html attribute from all elements with an id of mermaid
    if (document.querySelectorAll('pre.mermaid').length > 0) {
      document.querySelectorAll('pre.mermaid').forEach((element) => {
        const test = 1;
        if (!element.innerHTML.includes("svg") && element.hasAttribute('data-processed')) {
          element.removeAttribute('data-processed');
        }
      });
    }

    mermaid.initialize({ startOnLoad: true });
    mermaid.run();

    // retrieve all unique trace ids and set them in the traces state
    const traceIds = new Set<string>();
    spans.forEach((span) => traceIds.add(span.traceId));
    setTraces(Array.from(traceIds));
  }, [spans, selectedTrace, observedSpans])

  useEffect(() => {
    if (requiredSpanText === JSON.stringify(spans, null, 2)) {
      return;
    }

    let parsedJson = [] as Span[];

    try {
      parsedJson = JSON.parse(requiredSpanText);
      setSpans(parsedJson);
    } catch (e) {
      console.error("Invalid JSON");
    }
  }, [requiredSpanText])

  useEffect(() => {
    if (observedSpanText === JSON.stringify(observedSpans, null, 2)) {
      return;
    }

    let parsedJson = [] as Span[];

    try {
      parsedJson = JSON.parse(observedSpanText);
      setObservedSpans(parsedJson);
    } catch (e) {
      console.error("Invalid JSON");
    }
  }, [observedSpanText])

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Presets setRequiredSpanText={setRequiredSpanText} />
      </Grid>
      <Grid item xs={6}>
        <Item>All spans:
          <TextField
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows={6}
            disabled
            value={JSON.stringify(spans, null, 2)}
            // onChange={(e) => setRequiredSpanText(e.target.value)}
            error={!isValidJson(JSON.stringify(spans, null, 2))}
            helperText={!isValidJson(JSON.stringify(spans, null, 2)) ? "Invalid JSON" : ""}
            fullWidth
          />
        </Item>
      </Grid>
      <Grid item xs={12}>
        <TraceEditor selectedTrace={selectedTrace} setSelectedTrace={setSelectedTrace} traces={traces} inputSpans={spans} setSpans={setSpans} />
      </Grid>
      <Grid item xs={12}>
        <Item>Required Spans Visualization
          <FlameGraph trace={spans.filter(span => span.traceId === selectedTrace)} />
          <hr />
          <SpanTree trace={spans.filter(span => span.traceId === selectedTrace)} />
          <hr />
          <ServiceGraph trace={spans.filter(span => span.traceId === selectedTrace)} />
        </Item>
      </Grid>
      <Grid item xs={12}>
        <Item>Evaluated Trace:
          <TextField
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows={6}
            value={observedSpanText}
            onChange={(e) => setObservedSpanText(e.target.value)}
            error={!isValidJson(observedSpanText)}
            helperText={!isValidJson(observedSpanText) ? "Invalid JSON" : ""}
            fullWidth
          />
        </Item>
      </Grid>
      <Grid item xs={12}>
        {JSON.stringify(comparisonResult)}
        <SpanTree trace={observedSpans} disallowedSpanIds={[...(comparisonResult?.disallowedSpanIds || []), ...(comparisonResult?.missingSpanIds || [])]} matchedSpanIds={comparisonResult?.matchedSpanIds} />
      </Grid>
    </Grid>
  )
}

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <FormContent />
    </Box>
  );
}

export default App;
