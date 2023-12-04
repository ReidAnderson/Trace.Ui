import { SpanCriteria } from "./Interfaces";

export function mapToJaegerTrace(spanCriteria: SpanCriteria[]) {
    const result: any = {
        traceID: spanCriteria.length > 0 ? spanCriteria[0].traceId : '',
        spans: []
    };
    const timestamp: number = 1700528092274543;

    spanCriteria.forEach(span => {
        const jaeger_span:any = {};
        
        jaeger_span["traceID"] = span.traceId;
        jaeger_span["spanID"] = span.spanId;
        jaeger_span["operationName"] = span.spanName;
        jaeger_span["startTime"] = timestamp;
        jaeger_span["duration"] = Number(span.minDuration);

        jaeger_span["references"] = [];
        if (span.parentSpanId != null) {
            jaeger_span["references"].push({
                "refType": "CHILD_OF",
                "traceID": span.traceId,
                "spanID": span.parentSpanId
            });
        }

        jaeger_span["process"] = {
            "serviceName": span.serviceName,
            "tags": []
        };

        result.spans.push(jaeger_span);
    });

    return result;
  }