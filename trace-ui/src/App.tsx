import './App.css';
import { styled } from '@mui/material/styles';
import { Box, Paper, Button, Checkbox, Divider, FormControlLabel, Grid, Stack, TextField } from '@mui/material';
import { TraceRequirement, Span } from './Interfaces';
import { Formik, FormikErrors, Form, FieldArray, useFormikContext, Field } from 'formik';
import { v4 as uuidv4 } from "uuid";
import { FlameGraph, ServiceGraph, SpanTree } from './MermaidDefinitions';
import { useEffect } from 'react';
import mermaid from "mermaid";

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

function SpanDisplay(props: SpanProps) {
  const { setFieldValue, values, ...formik } = useFormikContext<FormInputs>();

  return (
    <Grid container spacing={2}>

      <Grid item xs={12}>
        <p>SpanId: {props.span.spanId}</p>
        <p>ParentSpanId: {props.span.parentSpanId ?? "NONE"}</p>
        <TextField
          id="outlined-basic"
          label="Span Name"
          value={props.span.name}
          onChange={(e) => setFieldValue(`${props.name}.${props.index}.spanName`, e.target.value)}
          variant="outlined" />
        <TextField
          id="outlined-basic"
          label="Service Name"
          value={props.span.serviceName}
          onChange={(e) => setFieldValue(`${props.name}.${props.index}.serviceName`, e.target.value)}
          variant="outlined" />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="outlined-basic"
          label="Parent Service Name"
          value={props.span.parentSpanId}
          // TODO this is bad
          variant="outlined" />
        <Field
          name={`${props.name}.${props.index}.useRegex`}
          type="checkbox"
          render={({ field }: any) => (<FormControlLabel
            control={<Checkbox {...field} checked={field.value} />}
            label="Use Regex"
          />)} />

      </Grid>
      {/* <Grid item xs={12}>
        <TextField
          id="duration-min"
          label="Minimum Duration (ms)"
          type="number"
          value={props.span.minDuration}
          onChange={(e) => setFieldValue(`${props.name}.${props.index}.minDuration`, e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="duration-max"
          label="Maximum Duration (ms)"
          type="number"
          value={props.span.maxDuration}
          onChange={(e) => setFieldValue(`${props.name}.${props.index}.maxDuration`, e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid> */}
    </Grid>
  );
}

export interface SpanListProps {
  criteria: Span[];
  name: string;
}

function SpanList(props: SpanListProps) {
  return (
    <FieldArray name={props.name}>
      {(arrayHelpers) => (
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          divider={<Divider orientation="horizontal" flexItem />}
          spacing={2}>
          {props.criteria && props.criteria.length > 0 ? props.criteria.map((criteria, index) => {
            return (
              <>
                <SpanDisplay span={criteria} name={props.name} index={index} />
                <Button variant='contained' onClick={() => arrayHelpers.push(getEmptySpan(criteria.traceId, criteria.spanId))}>Add Child Span</Button>
                <Button variant='contained' onClick={() => arrayHelpers.remove(index)}>Delete</Button>
              </>
            )
          }) : (
            <Button variant='contained' onClick={() => arrayHelpers.push(getEmptySpan())}>Add Span</Button>
          )}
        </Stack>)}
    </FieldArray>
  );
}

function FormContent() {
  const { setFieldValue, values, errors, ...formik } = useFormikContext<FormInputs>();

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
  }, [values.requiredSpans])

  useEffect(() => {
    
  }, [values.requiredSpansText, values.disallowedSpansText])

  function spanSet(field:string, fieldValue: string) {

    let parsedJson = [] as Span[];

    try {
      parsedJson = JSON.parse(fieldValue);
      setFieldValue(field, parsedJson);
    } catch (e) {
      errors.requiredSpans = "Invalid JSON";
    }
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={4} hidden>
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
      {/* <Grid item xs={4} hidden>
        <Item>Required Spans: The trace must contain a match for all of the following spans
          <SpanList criteria={values.requiredSpans} name="requiredSpans" />
        </Item>
      </Grid>
      <Grid item xs={4} hidden>
        <Item>Disallowed Spans: The trace cannot contain a match for any of the following spans
          <SpanList criteria={values.disallowedSpans} name="disallowedSpans" />
        </Item>
      </Grid> */}
      <Grid item xs={6}>
        <Item>Required Spans Trace:
          <TextField
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            value={JSON.stringify(values.requiredSpans)}
            onChange={(e) => spanSet('requiredSpans', e.target.value)}
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
            value={JSON.stringify(values.disallowedSpans)}
            onChange={(e) => setFieldValue('disallowedSpans', JSON.parse(e.target.value))}
          />
        </Item>
      </Grid>
      <Grid item xs={12}>
        <Item>Required Spans Visualization
          <FlameGraph trace={values.requiredSpans} />
          <hr />
          <SpanTree trace={values.requiredSpans} />
          <hr />
          <ServiceGraph trace={values.requiredSpans} />
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
      <Formik<FormInputs>
        initialValues={initialValues}
        onSubmit={submit}
        validate={validate}
      >
        <Form>
          <FormContent />
        </Form>
      </Formik>
    </Box>
  );

  function validate(values: FormInputs) {
    const errors: FormikErrors<FormInputs> = {};

    return {
      ...errors
    };
  }

  async function submit(values: FormInputs) {
    return;
  }
}

export default App;
