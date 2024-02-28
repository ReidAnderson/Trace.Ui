export interface Span {
    spanId: string;
    name: string;
    parentSpanId?: string;
    kind: string;
    traceId: string;
    startTime: number;
    endTime: number;
    status: string;
    attributes: { [key: string]: string };
    links: Link[];
    events: { [key: string]: string };
}

export interface Link {
    traceId: string;
    spanId: string;
    attributes: { [key: string]: string };
}

export interface TraceRequirement {
    spanFilter: Span[];
    requiredSpans: Span[];
    disallowedSpans: Span[];
}