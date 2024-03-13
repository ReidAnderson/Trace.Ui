import { styled } from '@mui/material/styles';
import { Box, Paper, Button, Checkbox, Divider, FormControlLabel, Grid, Stack, TextField } from '@mui/material';
import { Span } from './Interfaces';
import { getBackgroundSampleJson, getDaprSampleJson, getEventDrivenSampleJson, getSimpleMicroserviceSampleJson } from './presetData';

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
