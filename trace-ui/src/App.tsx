import React from 'react';
import logo from './logo.svg';
import './App.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Button, Checkbox, Divider, FormControlLabel, Grid, Stack, TextField } from '@mui/material';

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
          <Item>Required Spans Visualization</Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
