import { ComparisonResult, Span } from "./Interfaces";

export function tempFunction(): string {
  return "";
}

function evaluateAttributeEquality(observedAttributes: { [key: string]: string }, requiredAttributes: { [key: string]: string }): boolean {
  for (let requiredAttributeKey in requiredAttributes) {
    if (requiredAttributeKey.includes("criteria.") || requiredAttributeKey.includes("design.")) {
      // TODO: Restrict this to starting with criteria.
      continue;
    }

    if (!observedAttributes.hasOwnProperty(requiredAttributeKey) || observedAttributes[requiredAttributeKey] !== requiredAttributes[requiredAttributeKey]) {
      return false;
    }
  }

  return true;
}

function evaluateSpanEquality(observedSpan: Span | null, requiredSpan: Span | null, skipDuration = false): boolean {
  if (observedSpan === null && requiredSpan === null) {
    return true;
  } else if (observedSpan === null || requiredSpan === null) {
    return false;
  }

  if (observedSpan.name !== requiredSpan.name) {
    return false;
  }

  if (observedSpan.kind !== requiredSpan.kind) {
    return false;
  }

  // TODO: Remove the skipDuration check at some point. It doesn't make sense to compare parent spans with the required duration.
  // And maybe other attributes?
  if (!skipDuration && requiredSpan.attributes.hasOwnProperty("criteria.maxDuration")) {
    let maxDuration = parseFloat(requiredSpan.attributes["criteria.maxDuration"]);

    if ((observedSpan.endTime - observedSpan.startTime) > maxDuration) {
      return false;
    }
  }

  if (!evaluateAttributeEquality(observedSpan.attributes, requiredSpan.attributes)) {
    return false;
  }

  return true;
}

function evaluateParentSpanCompliance(span: Span, requiredSpan: Span, observedTrace: Span[], requiredSpans: Span[]): boolean {
  let observedSpan: Span | null = span;
  let observedParentSpan: Span | null = observedTrace.find(s => s.spanId === span.parentSpanId) || null;
  let requiredParentSpan: Span | null = requiredSpans.find(s => s.spanId === requiredSpan.parentSpanId) || null;
  let parentEquality: boolean = evaluateSpanEquality(observedParentSpan, requiredParentSpan, true);

  if (!requiredSpan.attributes.hasOwnProperty("criteria.allowNonImmediateParent") || requiredSpan.attributes["criteria.allowNonImmediateParent"] === "false") {
    return parentEquality;
  }

  let hasParent: boolean = observedParentSpan !== null;
  let depth: number = 0;
  while (hasParent && depth <= 100) {
    observedParentSpan = observedTrace.find(s => s.spanId === observedSpan!.parentSpanId) || null; // TODO figure out nullability here
    parentEquality = evaluateSpanEquality(observedParentSpan, requiredParentSpan, true);

    if (parentEquality) {
      return true;
    }

    depth++;
    observedSpan = observedParentSpan;
    hasParent = observedParentSpan !== null;
  }

  return false;
}

export function compare(observedTrace: Span[], requiredSpans: Span[], disallowedSpans: Span[]): ComparisonResult {
  let result: ComparisonResult = {
    resultSummary: "",
    missingSpans: [],
    disallowedSpans: {}
  };

  // TODO: we can do better than multiple foreach loops
  for (let requiredSpan of requiredSpans) {
    let isMissing = true;

    for (let span of observedTrace) {
      if (span.name === requiredSpan.name) {
        if (evaluateSpanEquality(span, requiredSpan) && evaluateParentSpanCompliance(span, requiredSpan, observedTrace, requiredSpans)) {
          isMissing = false;
          break;
        }

        let test = 1;
      }
    }

    if (isMissing) {
      result.missingSpans.push(requiredSpan);
    }
  }

  for (let span of observedTrace) {
    for (let disallowedSpan of disallowedSpans) {
      if (span.name === disallowedSpan.name) {
        if (evaluateSpanEquality(span, disallowedSpan) && evaluateParentSpanCompliance(span, disallowedSpan, observedTrace, disallowedSpans)) {
          if (!result.disallowedSpans.hasOwnProperty(disallowedSpan.spanId)) {
            result.disallowedSpans[disallowedSpan.spanId] = [];
          }

          result.disallowedSpans[disallowedSpan.spanId].push(span);
        }
      }
    }
  }

  return result;
}