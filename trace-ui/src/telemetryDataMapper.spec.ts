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
    const result = mapToJaegerTrace(testData);
    expect(result.length).toEqual(2);
    result[0].traceId = testData[0].traceId;
    result[0].spanId = testData[0].spanId;
    result[0]['references'][0] = {
      "refType": "CHILD_OF",
      "traceId": testData[0].traceId,
      "spanId": testData[0].parentSpanId
    }
  });
});
