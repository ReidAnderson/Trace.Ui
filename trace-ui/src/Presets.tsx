import { styled } from '@mui/material/styles';
import { Box, Paper, Button, Checkbox, Divider, FormControlLabel, Grid, Stack, TextField } from '@mui/material';
import { Span } from './Interfaces';
import { getBackgroundSampleJson, getDaprSampleJson, getEventDrivenSampleJson, getSimpleMicroserviceSampleJson } from './presetData';
import { simpleMicroservice_Compliant, eventDriven_Compliant, simpleMicroservice_NoncompliantDisallowed, simpleMicroservice_NoncompliantDuration } from './testData';

export interface PresetProps {
  setRequiredSpanText: (text: string) => void;
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export function Presets(props: PresetProps) {
  return (
    <Item>
      <Button variant="contained" onClick={() => {
        props.setRequiredSpanText(getBackgroundSampleJson());
      }}>Preset: Background Section</Button>
      <Button variant="contained" onClick={() => {
        props.setRequiredSpanText(getDaprSampleJson());
      }}>Preset: Dapr Sample</Button>
      <Button variant="contained" onClick={() => {
        props.setRequiredSpanText(getSimpleMicroserviceSampleJson());
      }}>Preset: Simple Microservice</Button>
      <Button variant="contained" onClick={() => {
        props.setRequiredSpanText(getEventDrivenSampleJson());
      }}>Preset: Event Driven System</Button>
    </Item>
  );
}

export function ObservedPresets(props: PresetProps) {
  return (
    <Item>
      <Button variant="contained" onClick={() => {
        props.setRequiredSpanText(simpleMicroservice_Compliant());
      }}>Microservice: Conformant</Button>
      {/* <Button variant="contained" onClick={() => {
        props.setRequiredSpanText(simpleMicroservice_NoncompliantDuration());
      }}>Microservice: Duration Non-Conformant</Button>
      <Button variant="contained" onClick={() => {
        props.setRequiredSpanText(simpleMicroservice_NoncompliantDisallowed());
      }}>Microservice: Disallowed Non-Conformant</Button>
      <Button variant="contained" onClick={() => {
        props.setRequiredSpanText(getEventDrivenSampleJson());
      }}>Event-Driven: Conformant</Button> */}
    </Item>
  );
}