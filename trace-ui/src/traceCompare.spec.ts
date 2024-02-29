import { simpleMicroservice_Compliant, simpleMicroservice_NonCompliantMissingServiceCall, simpleMicroservice_NoncompliantDisallowed, simpleMicroservice_NoncompliantDuration } from './testData';
import { tempFunction, compare } from './traceCompare';
import { ComparisonResult, Span } from "./Interfaces";
import { getSimpleMicroserviceSampleJson } from './presetData';

describe('tempFunction', () => {
  it('should return a string', () => {
    const result = tempFunction();
    expect(typeof result).toBe('string');
  });

  it('should return the expected string', () => {
    const result = tempFunction();
    expect(result).toBe('');
  });
});

describe('compare tests', () => {
  it('should evaluate conformant span', () => {
    const testData: Span[] = JSON.parse(simpleMicroservice_Compliant());
    const designTraces: Span[] = JSON.parse(getSimpleMicroserviceSampleJson());

    const disallowedSpans = designTraces.filter(span => span.attributes["criteria.isDisallowed"] === "true");
    const requiredSpans = designTraces.filter(span => span.attributes["criteria.isDisallowed"] !== "true");
    const result = compare(testData, requiredSpans, disallowedSpans);

    expect(result.missingSpans.length).toBe(0);
    expect(Object.keys(result.disallowedSpans).length).toBe(0);
  });

  it('should fail on presence of disallowed spans', () => {
    const testData: Span[] = JSON.parse(simpleMicroservice_NoncompliantDisallowed());
    const designTraces: Span[] = JSON.parse(getSimpleMicroserviceSampleJson());

    const disallowedSpans = designTraces.filter(span => span.attributes["criteria.isDisallowed"] === "true");
    const requiredSpans = designTraces.filter(span => span.attributes["criteria.isDisallowed"] !== "true");
    const result = compare(testData, requiredSpans, disallowedSpans);

    expect(result.missingSpans.length).toBe(0);
    expect(Object.keys(result.disallowedSpans).length).toBe(1);
  });

  it('should fail on duration violation', () => {
    const testData: Span[] = JSON.parse(simpleMicroservice_NoncompliantDuration());
    const designTraces: Span[] = JSON.parse(getSimpleMicroserviceSampleJson());

    const disallowedSpans = designTraces.filter(span => span.attributes["criteria.isDisallowed"] === "true");
    const requiredSpans = designTraces.filter(span => span.attributes["criteria.isDisallowed"] !== "true");
    const result = compare(testData, requiredSpans, disallowedSpans);

    expect(result.missingSpans.length).toBe(1);
    expect(Object.keys(result.disallowedSpans).length).toBe(0);
  });

  it('should fail on missing spans', () => {
    const testData: Span[] = JSON.parse(simpleMicroservice_NonCompliantMissingServiceCall());
    const designTraces: Span[] = JSON.parse(getSimpleMicroserviceSampleJson());

    const disallowedSpans = designTraces.filter(span => span.attributes["criteria.isDisallowed"] === "true");
    const requiredSpans = designTraces.filter(span => span.attributes["criteria.isDisallowed"] !== "true");
    const result = compare(testData, requiredSpans, disallowedSpans);

    expect(result.missingSpans.length).toBe(2);
    expect(Object.keys(result.disallowedSpans).length).toBe(0);
  });
});
