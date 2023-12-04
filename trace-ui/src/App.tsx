import './App.css';
import { styled } from '@mui/material/styles';
import { Box, Paper, Button, Checkbox, Divider, FormControlLabel, Grid, Stack, TextField } from '@mui/material';
import { SpanCriteria, TraceRequirement } from './Interfaces';
import { Formik, FormikErrors, Form, FieldArray, useFormikContext, Field } from 'formik';
import { FlameGraph, ServiceGraph } from './FlameGraph';
import { v4 as uuidv4 } from "uuid";
import { mapToJaegerTrace } from './telemetryDataMapper';

type FormInputs = TraceRequirement;

const initialValues: FormInputs = {
  spanFilter: [],
  requiredSpans: [],
  disallowedSpans: []
}

function getEmptySpanCriteria(traceId?: string, parentSpanId?: string): SpanCriteria {
  return {
    traceId: traceId ?? uuidv4(),
    spanId: uuidv4(),
    parentSpanId: parentSpanId,
    useRegex: false,
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
  span: SpanCriteria;
  name: string;
  index: number;
}

function Span(props: SpanProps) {
  const { setFieldValue, values, ...formik } = useFormikContext<FormInputs>();

  return (
    <Grid container spacing={2}>

      <Grid item xs={12}>
        <p>SpanId: {props.span.spanId}</p>
        <p>ParentSpanId: {props.span.parentSpanId ?? "NONE"}</p>
        <TextField
          id="outlined-basic"
          label="Span Name"
          value={props.span.spanName}
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
          value={props.span.parentServiceName}
          variant="outlined" />
        <Field
          name={`${props.name}.${props.index}.useRegex`}
          type="checkbox"
          render={({ field }: any) => (<FormControlLabel
            control={<Checkbox {...field} checked={field.value} />}
            label="Use Regex"
          />)} />

      </Grid>
      <Grid item xs={12}>
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
      </Grid>
    </Grid>
  );
}

export interface SpanListProps {
  criteria: SpanCriteria[];
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
                <Span span={criteria} name={props.name} index={index} />
                <Button variant='contained' onClick={() => arrayHelpers.push(getEmptySpanCriteria(criteria.traceId, criteria.spanId))}>Add Child Span</Button>
                <Button variant='contained' onClick={() => arrayHelpers.remove(index)}>Delete</Button>
              </>
            )
          }) : (
            <Button variant='contained' onClick={() => arrayHelpers.push(getEmptySpanCriteria())}>Add Span</Button>
          )}
        </Stack>)}
    </FieldArray>
  );
}

function FormContent() {
  const { setFieldValue, values, ...formik } = useFormikContext<FormInputs>();

  console.log(JSON.stringify(values));

  return (
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
          <SpanList criteria={values.requiredSpans} name="requiredSpans" />
        </Item>
      </Grid>
      <Grid item xs={4}>
        <Item>Disallowed Spans: The trace cannot contain a match for any of the following spans
          <SpanList criteria={values.disallowedSpans} name="disallowedSpans" />
        </Item>
      </Grid>
      <Grid item xs={12}>
        <Item>Required Spans Visualization
          <FlameGraph jaegerTrace={mapToJaegerTrace(values.requiredSpans)}/>
          {/* <FlameGraph jaegerTrace={sampleJaegerTrace}/> */}
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
