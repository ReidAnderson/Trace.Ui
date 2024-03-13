import { useEffect, useState } from "react";
import { Span, SpanRelationship } from "./Interfaces";
import { styled } from '@mui/material/styles';
import { Box, Paper, Button, Checkbox, Divider, FormControlLabel, Grid, Stack, TextField } from '@mui/material';
import { isValidJson } from "./helper";
import { FlameGraph, ServiceGraph, SpanTree } from "./MermaidDefinitions";

export interface TraceEditorProps {
  inputSpans: Span[];
  setSpans: (spans: Span[]) => void;
}

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

function getNewSpanFromSelected(span: Span | null, relation?: SpanRelationship): Span {
  if (!span) {
    return getEmptySpan();
  }

  let newSpan: Span = {
    spanId: generateSpanId(),
    name: 'new span',
    parentSpanId: undefined,
    kind: span.kind,
    traceId: span.traceId,
    startTime: span.startTime,
    endTime: span.endTime,
    status: span.status,
    attributes: {
      'service.name': 'unknown'
    },
    links: [],
    events: {}
  }

  if (relation === SpanRelationship.Link) {
    newSpan.links.push({
      traceId: span.traceId,
      attributes: {},
      spanId: span.spanId
    });
  } else if (relation === SpanRelationship.Parent) {
    newSpan.parentSpanId = span.spanId;
  }

  return newSpan;
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

function getServiceNameIfPresent(span: Span) {
  return span.attributes['service.name'] ?? 'unknown service';
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export function TraceEditor(traceEditorProps: TraceEditorProps) {
  const [selectedSpan, setSelectedSpan] = useState<Span | null>(null);
  const [selectedSpanText, setSelectedSpanText] = useState('');
  const [selectedTrace, setSelectedTrace] = useState<string>('');

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
        <Item>{inputSpans.reduce((acc, span) => { if (acc.includes(span.traceId)) { return acc; } else { return acc.concat(span.traceId) } }, [] as string[]).map((trace, index) => {
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
          }}>Add Trace</Button>
          <Button variant="contained" onClick={() => {
            setSpans([...inputSpans, getEmptySpan(selectedTrace)]);
          }}>Add New Span</Button>
          <Button variant="contained" onClick={() => {
            setSpans([...inputSpans, getNewSpanFromSelected(selectedSpan, SpanRelationship.Parent)]);
          }}>Add Child Span</Button>
          <Button variant="contained" onClick={() => {
            setSpans([...inputSpans, getNewSpanFromSelected(selectedSpan, SpanRelationship.Link)]);
          }}>Add Linked Span</Button>
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

                  // remove the element from newSpans that has the current span id
                  newSpans = newSpans.filter((s) => span.spanId !== s?.spanId);

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
      <Grid item xs={12}>
        <Item>Required Spans Visualization
          <FlameGraph trace={traceEditorProps.inputSpans.filter(span => span.traceId === selectedTrace)} />
          <hr />
          <SpanTree trace={traceEditorProps.inputSpans.filter(span => span.traceId === selectedTrace)} />
          <hr />
          <ServiceGraph trace={traceEditorProps.inputSpans.filter(span => span.traceId === selectedTrace)} />
        </Item>
      </Grid>
    </Grid>
  )
}