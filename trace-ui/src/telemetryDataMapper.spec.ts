import { SpanCriteria } from './Interfaces';
import { mapToJaegerTrace } from './telemetryDataMapper';

describe('mapToJaegerTrace', () => {

  const testData: SpanCriteria[] = [
    {
      traceId: 'traceId',
      spanId: 'spanId',
      parentSpanId: undefined,
      serviceName: 'serviceName',
      spanName: 'spanName',
      parentServiceName: 'parentServiceName',
      minDuration: 3,
      maxDuration: 4,
      useRegex: true
    },
    {
      traceId: 'traceId',
      spanId: 'spanId2',
      parentSpanId: 'parentSpanId',
      serviceName: 'serviceName2',
      spanName: 'spanName2',
      parentServiceName: 'parentServiceName2',
      minDuration: 1,
      maxDuration: 2,
      useRegex: true
    }
  ];

  it('should return an empty object when no spans are provided', () => {
    const result = mapToJaegerTrace([]);
    expect(result.spans.length).toEqual(0);
  });

  it('should map object to result', () => {
    const result = mapToJaegerTrace(testData);
    expect(result.spans.length).toEqual(2);
    expect(result.spans[0].traceID).toEqual(testData[0].traceId);
    expect(result.spans[0].spanID).toBe(testData[0].spanId);
    expect(result.spans[1]['references'][0].spanID).toBe(testData[1].parentSpanId);
    expect(result.spans[1]['references'][0].traceID).toBe(testData[1].traceId);
    expect(result.spans[1]['references'][0].refType).toBe('CHILD_OF');
  });
});
