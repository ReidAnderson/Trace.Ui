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
import { Item, isValidJson } from './helper';
import { ObservedTrace } from './ObservedTrace';

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

  useEffect(() => {
      // remove the data-processed html attribute from all elements with an id of mermaid
      if (document.querySelectorAll('pre.mermaid').length > 0) {
        document.querySelectorAll('pre.mermaid').forEach((element) => {
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
  }, [spans, selectedTrace]);

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
  }, [requiredSpanText]);

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
      <ObservedTrace criteriaSpans={spans}/>
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
