import './App.css';
import { styled } from '@mui/material/styles';
import { Box, Paper, Button, Checkbox, Divider, FormControlLabel, Grid, Stack, TextField } from '@mui/material';
import { TraceRequirement, Span } from './Interfaces';
import { v4 as uuidv4 } from "uuid";
import { FlameGraph, ServiceGraph, SpanTree } from './MermaidDefinitions';
import { useEffect, useState } from 'react';
import mermaid from "mermaid";
import { parse } from 'path';

type FormInputs = TraceRequirement & {
  requiredSpansText: string;
  disallowedSpansText: string;
};

const initialValues: FormInputs = {
  spanFilter: [],
  requiredSpans: [],
  disallowedSpans: [],
  requiredSpansText: '',
  disallowedSpansText: ''
}

function getEmptySpan(traceId?: string, parentSpanId?: string): Span {
  return {
    spanId: uuidv4(),
    name: '',
    duration: 0,
    parentSpanId: parentSpanId,
    serviceName: '',
    kind: '',
    timestamp: 0,
    traceId: traceId ?? '',
    startTime: 0,
    endTime: 0,
    status: '',
    attributes: {},
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
  inputSpans: Span[];
  setSpans: (spans: Span[]) => void;
}

function getServiceNameIfPresent(span: Span) {
  return span.attributes['service.name'] ?? 'unknown service';
}

function TraceEditor(traceEditorProps: TraceEditorProps) {
  const [selectedSpan, setSelectedSpan] = useState<Span | null>(null);
  const [selectedSpanText, setSelectedSpanText] = useState('');

  const { inputSpans, setSpans } = traceEditorProps;

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
      </Grid>
      <Grid item xs={12}>
        <Item>
          <Button variant="contained" onClick={() => {
            setSpans([...inputSpans, inputSpans[0]]);
          }}>Add Span</Button>
        </Item>
      </Grid>
      <Grid item xs={4}>
        <Item>
          {inputSpans.map((span, index) => {
            return (
              <Stack key={index} direction="row" spacing={2}>
                <Button variant="contained" onClick={() => { setSelectedSpan(span); setSelectedSpanText(JSON.stringify(span)); }}>{`${span.name} (${span.spanId}, ${getServiceNameIfPresent(span)})`}</Button>
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
            rows={4}
            value={selectedSpanText}
            onChange={(e) => {
              setSelectedSpanText(e.target.value);
            }}
            error={!isValidJson(JSON.stringify(selectedSpan))}
            helperText={!isValidJson(JSON.stringify(selectedSpan)) ? "Invalid JSON" : ""}
          />
        </Item>
      </Grid>
    </Grid>
  )
}

function FormContent() {
  const [spans, setSpans] = useState<Span[]>([]);
  const [requiredSpanText, setRequiredSpanText] = useState('');
  const [disallowedSpanText, setDisallowedSpanText] = useState('');

  useEffect(() => {
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
  }, [spans])

  useEffect(() => {
    let parsedJson = [] as Span[];

    try {
      parsedJson = JSON.parse(requiredSpanText);
      setSpans(parsedJson);
    } catch (e) {
      console.error("Invalid JSON");
    }
  }, [requiredSpanText])

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Item>Required Spans Trace:
          <TextField
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            value={requiredSpanText}
            onChange={(e) => setRequiredSpanText(e.target.value)}
            error={!isValidJson(requiredSpanText)}
            helperText={!isValidJson(requiredSpanText) ? "Invalid JSON" : ""}
          />
        </Item>
      </Grid>
      <Grid item xs={6}>
        <Item>Disallowed Spans Trace:
          <TextField
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            value={disallowedSpanText}
            onChange={(e) => setDisallowedSpanText(e.target.value)}
            error={!isValidJson(disallowedSpanText)}
            helperText={!isValidJson(disallowedSpanText) ? "Invalid JSON" : ""}
          />
        </Item>
      </Grid>
      <Grid item xs={12}>
        <TraceEditor inputSpans={spans} setSpans={setSpans} />
      </Grid>
      <Grid item xs={12}>
        <Item>Required Spans Visualization
          <FlameGraph trace={spans} />
          <hr />
          <SpanTree trace={spans} />
          <hr />
          <ServiceGraph trace={spans} />
        </Item>
      </Grid>
      <Grid item xs={12}>
        <Item>Evaluated Trace:

          <TextField
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            defaultValue="Default Value"
          />
        </Item>
      </Grid>
      <Grid item xs={12}>
        <Item>Result:
        </Item>
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
