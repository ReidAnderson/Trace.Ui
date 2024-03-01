import './App.css';
import { styled } from '@mui/material/styles';
import { Box, Paper, Button, Checkbox, Divider, FormControlLabel, Grid, Stack, TextField } from '@mui/material';
import { TraceRequirement, Span, ComparisonResult } from './Interfaces';
import { v4 as uuidv4 } from "uuid";
import { FlameGraph, ServiceGraph, SpanTree } from './MermaidDefinitions';
import { useEffect, useState } from 'react';
import mermaid from "mermaid";
import { parse } from 'path';
import { getBackgroundSampleJson, getDaprSampleJson, getSimpleMicroserviceSampleJson } from './presetData';
import { compare } from './traceCompare';

type FormInputs = TraceRequirement & {
  requiredSpansText: string;
};

function generateSpanId(): string {
  const array = new Uint8Array(8);
  window.crypto.getRandomValues(array);
  return Array.from(array).map(b => ('00' + b.toString(16)).slice(-2)).join('');
}

function generateTraceId(): string {
  const array = new Uint8Array(16);
  window.crypto.getRandomValues(array);
  return Array.from(array).map(b => ('00' + b.toString(32)).slice(-2)).join('');
}

const initialValues: FormInputs = {
  spanFilter: [],
  requiredSpans: [],
  requiredSpansText: ''
}

function getEmptySpan(traceId?: string, parentSpanId?: string): Span {
  return {
    spanId: generateSpanId(),
    name: 'new span',
    parentSpanId: parentSpanId,
    kind: '',
    traceId: traceId ?? generateTraceId(),
    startTime: 0,
    endTime: 0,
    status: '',
    attributes: {
      'service.name': 'unknown'
    },
    links: [],
    events: {}
  }
}

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

function isValidJson(json: string): boolean {
  try {
    JSON.parse(json);
    return true;
  } catch (e) {
    return false;
  }
}

export interface TraceEditorProps {
  traces: string[];
  selectedTrace: string;
  setSelectedTrace: (trace: string) => void;
  inputSpans: Span[];
  setSpans: (spans: Span[]) => void;
}

function getServiceNameIfPresent(span: Span) {
  return span.attributes['service.name'] ?? 'unknown service';
}

function TraceEditor(traceEditorProps: TraceEditorProps) {
  const [selectedSpan, setSelectedSpan] = useState<Span | null>(null);
  const [selectedSpanText, setSelectedSpanText] = useState('');

  const { inputSpans, setSpans, traces, selectedTrace, setSelectedTrace } = traceEditorProps;

  useEffect(() => {
    let parsedJson = {} as Span;

    try {
      parsedJson = JSON.parse(selectedSpanText);
      setSelectedSpan(parsedJson);

      let newSpans = [...inputSpans];
      newSpans[inputSpans.indexOf(selectedSpan!)] = parsedJson;
      setSpans(newSpans);
    } catch (e) {
      console.error("Invalid JSON");
    }
  }, [selectedSpanText])

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Item>Trace Editor</Item>
        <Item>{traces.map((trace, index) => {
          return (
            <Button key={index} variant="contained" onClick={() => {
              setSelectedTrace(trace);
            }}>{trace}</Button>
          )
        })}</Item>
      </Grid>

      <Grid item xs={12}>
        <Item>
          <Button variant="contained" onClick={() => {
            setSpans([...inputSpans, getEmptySpan()]);
          }}>Add Span</Button>
        </Item>
      </Grid>
      <Grid item xs={4}>
        <Item>
          {inputSpans.filter(span => span.traceId === selectedTrace).map((span, index) => {
            return (
              <Stack key={index} direction="row" spacing={2}>
                <Button variant="contained" onClick={() => { setSelectedSpan(span); setSelectedSpanText(JSON.stringify(span, null, 2)); }}>{`${span.name} (${span.spanId}, ${getServiceNameIfPresent(span)})`}</Button>
                <Button variant="contained" onClick={() => {
                  let newSpans = [...inputSpans];
                  newSpans.splice(index, 1);
                  setSpans(newSpans);
                }}>Remove</Button>
              </Stack>
            )
          })}
        </Item>
      </Grid>
      <Grid item xs={8}>
        <Item>
          <TextField
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows={8}
            value={selectedSpanText}
            onChange={(e) => {
              setSelectedSpanText(e.target.value);
            }}
            error={!isValidJson(JSON.stringify(selectedSpan))}
            helperText={!isValidJson(JSON.stringify(selectedSpan)) ? "Invalid JSON" : ""}
            fullWidth // Add this line to make the TextField take the entire grid space
          />
        </Item>
      </Grid>
    </Grid>
  )
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
        <Item>
          <Button variant="contained" onClick={() => {
            setRequiredSpanText(getBackgroundSampleJson());
          }}>Preset: Background Section</Button>
          <Button variant="contained" onClick={() => {
            setRequiredSpanText(getDaprSampleJson());
          }}>Preset: Dapr Sample</Button>
          <Button variant="contained" onClick={() => {
            setRequiredSpanText(getSimpleMicroserviceSampleJson());
          }}>Preset: Simple Microservice</Button>
        </Item>
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
        <SpanTree trace={observedSpans} disallowedSpanIds={comparisonResult?.disallowedSpanIds} />
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
