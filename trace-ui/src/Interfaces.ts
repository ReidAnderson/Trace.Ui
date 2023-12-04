export interface Span {
    id: string;
    name: string;
    duration: number;
    parentSpanId?: string;
    serviceName: string;
    kind: string;
    timestamp: number;
    traceId: string;
}

export interface SpanCriteria {
    traceId: string;
    spanId: string;
    parentSpanId?: string;
    serviceName?: string;
    spanName?: string;
    parentServiceName?: string;
    minDuration?: number;
    maxDuration?: number;
    useRegex: boolean;
}

export interface TraceRequirement {
    spanFilter: SpanCriteria[];
    requiredSpans: SpanCriteria[];
    disallowedSpans: SpanCriteria[];
}