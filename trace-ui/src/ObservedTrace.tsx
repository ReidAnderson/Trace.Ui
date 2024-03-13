import { Grid, TextField } from "@mui/material";
import { Item, isValidJson } from "./helper";
import { ComparisonResult, Span } from "./Interfaces";
import { useEffect, useState } from "react";
import { SpanTree } from "./MermaidDefinitions";
import { compare } from "./traceCompare";
import mermaid from "mermaid";

export interface ObservedTraceProps {
  criteriaSpans: Span[];
}

export function ObservedTrace(observedTraceProps: ObservedTraceProps) {
  console.log(JSON.stringify(observedTraceProps.criteriaSpans, null, 2));
  const [observedSpanText, setObservedSpanText] = useState('');
  const [observedSpans, setObservedSpans] = useState<Span[]>([]);
  const [comparisonResult, setComparisonResult] = useState<ComparisonResult | null>(compare(observedSpans, observedTraceProps.criteriaSpans.filter(span => span && span.attributes["criteria.isDisallowed"] !== "true"), observedTraceProps.criteriaSpans.filter(span => span && span.attributes["criteria.isDisallowed"] === "true")));

  useEffect(() => {
    console.log("Spans: ", JSON.stringify(observedTraceProps.criteriaSpans, null, 2));
    setComparisonResult(compare(observedSpans, observedTraceProps.criteriaSpans.filter(span => span.attributes["criteria.isDisallowed"] !== "true"), observedTraceProps.criteriaSpans.filter(span => span.attributes["criteria.isDisallowed"] === "true")));

      // remove the data-processed html attribute from all elements with an id of mermaid
      if (document.querySelectorAll('pre.mermaid').length > 0) {
        document.querySelectorAll('pre.mermaid').forEach((element) => {
          if (element && !element.innerHTML.includes("svg") && element.hasAttribute('data-processed')) {
            element.removeAttribute('data-processed');
          }
        });
      }
  
      mermaid.initialize({ startOnLoad: true });
      mermaid.run();  
  }, [observedSpans]);

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
  }, [observedSpanText]);

  return <>
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
        <SpanTree trace={observedSpans} disallowedSpanIds={[...(comparisonResult?.disallowedSpanIds || []), ...(comparisonResult?.missingSpanIds || [])]} matchedSpanIds={comparisonResult?.matchedSpanIds} />
      </Grid>
  </>
}