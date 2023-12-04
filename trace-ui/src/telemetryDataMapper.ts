import { SpanCriteria } from "./Interfaces";

export function mapToJaegerTrace(spanCriteria: SpanCriteria[]) {
    const result: any[] = [];
    const timestamp: number = 1700528092274543;

    spanCriteria.forEach(span => {
        const jaeger_span:any = {};
        
        jaeger_span["traceId"] = span.traceId;
        jaeger_span["spanId"] = span.spanId;
        jaeger_span["operationName"] = span.spanName;
        jaeger_span["startTime"] = timestamp;
        jaeger_span["duration"] = span.minDuration;
        jaeger_span["parentSpanId"] = span.parentSpanId;

        jaeger_span["references"] = [];
        if (span.parentSpanId != null) {
            jaeger_span["references"].push({
                "refType": "CHILD_OF",
                "traceId": span.traceId,
                "spanId": span.parentSpanId
            });
        }

        jaeger_span["process"] = {
            "serviceName": span.serviceName,
            "tags": []
        };

        result.push(jaeger_span);
    });

    return result;
  }