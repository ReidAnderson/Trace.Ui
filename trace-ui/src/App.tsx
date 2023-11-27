import React from 'react';
import logo from './logo.svg';
import './App.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Button, Checkbox, Divider, FormControlLabel, Grid, Stack, TextField } from '@mui/material';
import { FlamegraphRenderer } from '@pyroscope/flamegraph';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Span() {
  return (
    <Grid container spacing={2}>

      <Grid item xs={12}>
        <TextField id="outlined-basic" label="Span Name" variant="outlined" />
        <TextField id="outlined-basic" label="Service Name" variant="outlined" />
      </Grid>
      <Grid item xs={12}>
        <TextField id="outlined-basic" label="Parent Service Name" variant="outlined" />
        <FormControlLabel control={<Checkbox defaultChecked />} label="Use Regex" />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="duration-min"
          label="Minimum Duration (ms)"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="duration-max"
          label="Maximum Duration (ms)"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
    </Grid>
  );
}

function SpanList() {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      divider={<Divider orientation="horizontal" flexItem />}
      spacing={2}>
      <Span />
      <Span />
      <Button variant='contained'>Add Span</Button>
    </Stack>
  );
}

function FlameGraph() {
  const SimpleTree = {
    version: 1,
    flamebearer: {
      names: [
        'total',
        'runtime.mcall',
        'runtime.park_m',
        'runtime.schedule',
        'runtime.resetspinning',
        'runtime.wakep',
        'runtime.startm',
        'runtime.notewakeup',
        'runtime.semawakeup',
        'runtime.pthread_cond_signal',
        'runtime.findrunnable',
        'runtime.netpoll',
        'runtime.kevent',
        'runtime.main',
        'main.main',
        'github.com/pyroscope-io/client/pyroscope.TagWrapper',
        'runtime/pprof.Do',
        'github.com/pyroscope-io/client/pyroscope.TagWrapper.func1',
        'main.main.func1',
        'main.slowFunction',
        'main.slowFunction.func1',
        'main.work',
        'runtime.asyncPreempt',
        'main.fastFunction',
        'main.fastFunction.func1',
      ],
      levels: [
        [0, 609, 0, 0],
        [0, 606, 0, 13, 0, 3, 0, 1],
        [0, 606, 0, 14, 0, 3, 0, 2],
        [0, 606, 0, 15, 0, 3, 0, 3],
        [0, 606, 0, 16, 0, 1, 0, 10, 0, 2, 0, 4],
        [0, 606, 0, 17, 0, 1, 0, 11, 0, 2, 0, 5],
        [0, 606, 0, 18, 0, 1, 1, 12, 0, 2, 0, 6],
        [0, 100, 0, 23, 0, 506, 0, 19, 1, 2, 0, 7],
        [0, 100, 0, 15, 0, 506, 0, 16, 1, 2, 0, 8],
        [0, 100, 0, 16, 0, 506, 0, 20, 1, 2, 2, 9],
        [0, 100, 0, 17, 0, 506, 493, 21],
        [0, 100, 0, 24, 493, 13, 13, 22],
        [0, 100, 97, 21],
        [97, 3, 3, 22],
      ],
      numTicks: 609,
      maxSelf: 493,
    },
    metadata: {
      appName: 'simple.golang.app.cpu',
      name: 'simple.golang.app.cpu 2022-09-06T12:16:31Z',
      startTime: 1662466591,
      endTime: 1662470191,
      query: 'simple.golang.app.cpu{}',
      maxNodes: 1024,
      format: 'single' as const,
      sampleRate: 100,
      spyName: 'gospy' as const,
      units: 'samples' as const,
    },
    timeline: {
      startTime: 1662466590,
      samples: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 610, 0,
      ],
      durationDelta: 10,
    },
  };

  // https://github.com/jaegertracing/jaeger-ui/blob/main/packages/jaeger-ui/src/components/TracePage/TraceFlamegraph/index.tsx
  // https://github.com/grafana/pyroscope/blob/9e55dd1235a700bfe8f471090ad7c6429a83db18/public/app/legacy/flamegraph/FlameGraph/FlameGraphComponent/Flamegraph.ts

  return (
    <Box className="Flamegraph-wrapper">
      <FlamegraphRenderer
        profile={SimpleTree}
        onlyDisplay="flamegraph"
        showToolbar={false}
      />
    </Box>
  );
}

function ServiceGraph() {
  return (
    <p>Dependency Graph</p>
  )
}

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Item>Span Filter: Any trace containing a span that matches the following criteria will be evaluated
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="flex-start"
              spacing={2}
            >
              <TextField id="outlined-basic" label="Span Name" variant="outlined" />
              <TextField id="outlined-basic" label="Service Name" variant="outlined" />
              <FormControlLabel control={<Checkbox defaultChecked />} label="Use Regex" />
            </Stack>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Required Spans: The trace must contain a match for all of the following spans
            <SpanList />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Disallowed Spans: The trace cannot contain a match for any of the following spans
            <SpanList />
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>Required Spans Visualization
            <FlameGraph />
            <ServiceGraph />
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
      </Grid>
    </Box>
  );
}

export default App;
