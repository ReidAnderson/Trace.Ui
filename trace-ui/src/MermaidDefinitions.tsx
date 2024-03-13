import { Box } from '@mui/material';
import { Span } from './Interfaces';

export interface TraceChartProps {
  trace: Span[];
  disallowedSpanIds?: string[];
  matchedSpanIds?: string[];
}

export function FlameGraph(props: TraceChartProps) {

  // if they aren't already, we need to order the spans by startDate so they appear in the correct order in the flamegraph
  props.trace.sort((a, b) => a.startTime - b.startTime);

  // group the traces by the service.name attribute, defaulting to unknown if not provided
  const serviceGroups = props.trace.reduce((acc, span) => {
    const serviceName = span.attributes['service.name'] ?? 'unknown';
    if (!acc[serviceName]) {
      acc[serviceName] = [];
    }
    acc[serviceName].push(span);
    return acc;
  }, {} as { [key: string]: Span[] });

  let flamegraphString = `gantt\n    title Flamegraph\n    dateFormat x\n    axisFormat %H:%M:%S.%LZ\n`;

  // loop over each service group and add a section for each
  Object.keys(serviceGroups).forEach((serviceName) => {
    flamegraphString += `  section ${serviceName}\n`;

    // loop over each span in the service group and add a task for each
    serviceGroups[serviceName].forEach((span) => {
      flamegraphString += `  ${span.name} :${span.spanId}, ${span.startTime}, ${span.endTime}\n`;
    });
  });

  console.log(flamegraphString);
  return (
    <Box className="Flamegraph-wrapper">
      <pre className="mermaid">{flamegraphString}</pre>
    </Box>
  );
}

export function SpanTree(props: TraceChartProps) {

  let spanTreeString = `---\ntitle: Span Graphs\n---\ngraph TD\n`;

  // loop over each span and add a node for each if the parent span id is non null
  props.trace.forEach((span) => {
    if (span.parentSpanId) {
      spanTreeString += `  ${span.parentSpanId} -->${span.spanId}(${span.name})\n`;
    } else {
      spanTreeString += `  ${span.spanId}(${span.name})\n`;
    }
  });

  // loop over each span and add a dotted line if there is a link between the two
  props.trace.forEach((span) => {
    if (span.links) {
      span.links.forEach((link) => {
        spanTreeString += `  ${link.spanId}-.->${span.spanId}(${span.name})\n`; // TODO: This seems backwards. Is it?
      });
    }
  });

  if (props.disallowedSpanIds) {
    props.disallowedSpanIds.forEach((spanId) => {
      spanTreeString += `  style ${spanId} fill:#f00\n`;
    });
  }

  if (props.matchedSpanIds) {
    props.matchedSpanIds.forEach((spanId) => {
      spanTreeString += `  style ${spanId} fill:#0f0\n`;
    });
  }

  console.log(spanTreeString);
  return (
    <Box className="Spantree-wrapper">
      <pre className="mermaid">{spanTreeString}</pre>
    </Box>
  );
}

export function ServiceGraph(props: TraceChartProps) {
  // build a dictionary that maps spanId->service.name value in the attributes dictionary
  const serviceMap = props.trace.reduce((acc, span) => {
    acc[span.spanId] = span.attributes['service.name'] ?? 'unknown';
    return acc;
  }, {} as { [key: string]: string });

  let isInvalid: boolean = false;

  let connectionList: string[] = [];

  let serviceGraphString = `---\ntitle: Service Graph\n---\ngraph TD\n`;

  // loop over each span and if the connection between the parent and child span service names is not already in the connection list, add it
  props.trace.forEach((span) => {
    if ((span.parentSpanId && !serviceMap[span.parentSpanId]) || !serviceMap[span.spanId]) {
      isInvalid = true;
      return;
    }

    if (span.parentSpanId) {
      const parentService = serviceMap[span.parentSpanId].replace(/\s/g, '');
      const childService = serviceMap[span.spanId].replace(/\s/g, '');

      if (parentService === childService) {
        return;
      }

      if (!connectionList.includes(`${parentService} --> ${childService}`)) {
        connectionList.push(`${parentService} --> ${childService}`);
      }
    }
  });

  // loop over each span and if the link is not already in the connection list, add it
  props.trace.forEach((span) => {
    if (!serviceMap[span.spanId]) {
      isInvalid = true;
      return;
    }

    if (span.links) {
      span.links.forEach((link) => {
        const parentService = serviceMap[link.spanId].replace(/\s/g, '');
        const childService = serviceMap[span.spanId].replace(/\s/g, '');

        if (parentService === childService) {
          return;
        }

        if (!connectionList.includes(`${parentService} --> ${childService}`)) {
          connectionList.push(`${parentService} -.-> ${childService}`);
        }
      });
    }
  });

  // loop over each connection in the connection list and add the corresponding mermaid statement to the graph
  connectionList.forEach((connection) => {
    serviceGraphString += `  ${connection}\n`;
  });
  console.log(serviceGraphString);

  if (isInvalid) {
    return (
      <Box className="Servicegraph-wrapper">
        <pre>Invalid trace data</pre>
      </Box>
    );
  }
  return (
    <Box className="Servicegraph-wrapper">
      <pre className="mermaid">{serviceGraphString}</pre>
    </Box>
  );
}