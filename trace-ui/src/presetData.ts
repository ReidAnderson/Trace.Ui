
export function getBackgroundSampleJson(): string {
  const data = [
    {
      "spanId": "d8c82636d34ef2d5",
      "parentSpanId": "a7088b42c8e60821",
      "name": "Span E",
      "kind": "",
      "traceId": "6p551l673e6l7a0j207v3l0o4q6g3p2i",
      "startTime": 1708928615085,
      "endTime": 1708928615085,
      "status": "",
      "attributes": {
        "service.name": "Service 3"
      },
      "links": [],
      "events": {}
    },
    {
      "attributes": {
        "design.sourceDesignSpanId": "4d11d06576e74d20",
        "design.sourceDesignTraceId": "43a5e3f20a9e47d691a26da248b595ee",
        "service.name": "Service 1"
      },
      "endTime": "1708928616085",
      "events": [],
      "kind": "Client",
      "links": [],
      "name": "Span A",
      "parentSpanId": "",
      "spanId": "4d11d06576e74d20",
      "startTime": "1708928615085",
      "status": "Unspecified",
      "traceId": "43a5e3f20a9e47d691a26da248b595ee",
      "traceState": ""
    },
    {
      "attributes": {
        "design.description": "The checkout service performs a submit-order action",
        "design.sourceDesignSpanId": "0e70ab6c066c43c5",
        "design.sourceDesignTraceId": "43a5e3f20a9e47d691a26da248b595ee",
        "service.name": "Service 2"
      },
      "endTime": "1708928616000",
      "events": [],
      "kind": "Server",
      "links": [],
      "name": "Span B",
      "parentSpanId": "4d11d06576e74d20",
      "spanId": "0e70ab6c066c43c5",
      "startTime": "1708928615385",
      "status": "Unspecified",
      "traceId": "43a5e3f20a9e47d691a26da248b595ee",
      "traceState": ""
    },
    {
      "spanId": "abfb39fe5864447c",
      "parentSpanId": "0e70ab6c066c43c5",
      "name": "Span D",
      "kind": "",
      "traceId": "795i055q7s1i7s026q765j181m3a0m2q",
      "startTime": 1708928616085,
      "endTime": 1708928616085,
      "status": "",
      "attributes": {
        "service.name": "Service 2"
      },
      "links": [],
      "events": {}
    },
    {
      "attributes": {
        "design.description": "The order consumer consumes the submitted order",
        "design.sourceDesignSpanId": "a9501a002b9a4913",
        "design.sourceDesignTraceId": "43a5e3f20a9e47d691a26da248b595ee",
        "service.name": "Service 4"
      },
      "endTime": "1708928616835",
      "events": [],
      "kind": "Consumer",
      "links": [
        {
          "attributes": {},
          "spanId": "a7088b42c8e60821",
          "traceId": "43a5e3f20a9e47d691a26da248b595ee",
          "traceState": ""
        }
      ],
      "name": "Span G",
      "parentSpanId": "",
      "spanId": "a9501a002b9a4913",
      "startTime": "1708928616085",
      "status": "Unspecified",
      "traceId": "43a5e3f20a9e47d691a26da248b595ee",
      "traceState": ""
    },
    {
      "attributes": {
        "design.description": "The submitted order is saved to the database",
        "design.sourceDesignSpanId": "ee708d1415074c2b",
        "design.sourceDesignTraceId": "43a5e3f20a9e47d691a26da248b595ee",
        "service.name": "Service 4"
      },
      "endTime": "1708928616585",
      "events": [],
      "kind": "Server",
      "links": [],
      "name": "Span H",
      "parentSpanId": "a9501a002b9a4913",
      "spanId": "ee708d1415074c2b",
      "startTime": "1708928616185",
      "status": "Unspecified",
      "traceId": "43a5e3f20a9e47d691a26da248b595ee",
      "traceState": ""
    },
    {
      "spanId": "5178b5a72a2e3d25",
      "parentSpanId": "a7088b42c8e60821",
      "name": "Span F",
      "kind": "",
      "traceId": "0c4l6d1d7n0g39252j7p3s1k104b5r5s",
      "startTime": 1708928616585,
      "endTime": 1708928616585,
      "status": "",
      "attributes": {
        "service.name": "Service 3"
      },
      "links": [],
      "events": {}
    },
    {
      "spanId": "a7088b42c8e60821",
      "name": "Span C",
      "kind": "",
      "traceId": "1v1m1m483d2h1c177i7t3k300k0c0p6v",
      "parentSpanId": "4d11d06576e74d20",
      "startTime": 1708928616835,
      "endTime": 1708928616835,
      "status": "",
      "attributes": {
        "service.name": "Service 3"
      },
      "links": [],
      "events": {}
    }
  ];

  return JSON.stringify(data);
}

export function getSimpleMicroserviceSampleJson(): string {
  const data = [
    {
      "traceId": "2b18a94361594040a954458ecfb35d14",
      "spanId": "ba775eb50c564120",
      "traceState": "",
      "parentSpanId": "",
      "name": "aspnet_core.request",
      "kind": "Server",
      "startTime": "1709093856067",
      "endTime": "1709093856167",
      "attributes": {
        "service.name": "gateway.api", "criteria.description": "The gateway should receive the request from the client, and be the entry point to the trace.", "criteria.maxDuration": "500", "design.description": "Receive the request from the client"
      },
      "events": [

      ],
      "links": [

      ],
      "status": "Unspecified"
    }
    ,
    {
      "traceId": "2b18a94361594040a954458ecfb35d14",
      "spanId": "cae20131671b48a8",
      "traceState": "",
      "parentSpanId": "ba775eb50c564120",
      "name": "aspnet_core.request",
      "kind": "Server",
      "startTime": "1709093856077",
      "endTime": "1709093856157",
      "attributes": {
        "service.name": "domain.api", "criteria.description": "The domain api should always receive a request from the gateway.", "criteria.allowNonImmediateParent": "true"
      },
      "events": [

      ],
      "links": [

      ],
      "status": "Unspecified"
    }
    ,
    {
      "traceId": "2b18a94361594040a954458ecfb35d14",
      "spanId": "9cf74642607c4a10",
      "traceState": "",
      "parentSpanId": "cae20131671b48a8",
      "name": "sql_server.query",
      "kind": "Server",
      "startTime": "1709093856087",
      "endTime": "1709093856137",
      "attributes": {
        "service.name": "domain.api-sql-server", "criteria.description": "The domain api should always make a call to the sql server.", "criteria.allowNonImmediateParent": "true"
      },
      "events": [

      ],
      "links": [

      ],
      "status": "Unspecified"
    }
  ];

  return JSON.stringify(data);
}

export function getDaprSampleJson(): string {
  const data = [
    {
      "attributes": {
        "design.sourceDesignSpanId": "4d11d06576e74d20",
        "design.sourceDesignTraceId": "43a5e3f20a9e47d691a26da248b595ee",
        "service.name": "frontend"
      },
      "endTime": "1708928616085",
      "events": [
      ],
      "kind": "Client",
      "links": [
      ],
      "name": "checkout",
      "parentSpanId": "",
      "spanId": "4d11d06576e74d20",
      "startTime": "1708928615085",
      "status": "Unspecified",
      "traceId": "43a5e3f20a9e47d691a26da248b595ee",
      "traceState": ""
    },
    {
      "attributes": {
        "design.description": "The checkout service performs a submit-order action",
        "design.sourceDesignSpanId": "0e70ab6c066c43c5",
        "design.sourceDesignTraceId": "43a5e3f20a9e47d691a26da248b595ee",
        "service.name": "checkout"
      },
      "endTime": "1708928616085",
      "events": [
      ],
      "kind": "Server",
      "links": [
      ],
      "name": "submit-order",
      "parentSpanId": "4d11d06576e74d20",
      "spanId": "0e70ab6c066c43c5",
      "startTime": "1708928615585",
      "status": "Unspecified",
      "traceId": "43a5e3f20a9e47d691a26da248b595ee",
      "traceState": ""
    },
    {
      "attributes": {
        "design.description": "The order consumer consumes the submitted order",
        "design.sourceDesignSpanId": "a9501a002b9a4913",
        "design.sourceDesignTraceId": "43a5e3f20a9e47d691a26da248b595ee",
        "service.name": "order-consumer"
      },
      "endTime": "1708928616835",
      "events": [
      ],
      "kind": "Consumer",
      "links": [
        {
          "attributes": {
          },
          "spanId": "0e70ab6c066c43c5",
          "traceId": "43a5e3f20a9e47d691a26da248b595ee",
          "traceState": ""
        }
      ],
      "name": "submit-order",
      "parentSpanId": "",
      "spanId": "a9501a002b9a4913",
      "startTime": "1708928616085",
      "status": "Unspecified",
      "traceId": "43a5e3f20a9e47d691a26da248b595ee",
      "traceState": ""
    },
    {
      "attributes": {
        "design.description": "The submitted order is saved to the database",
        "design.sourceDesignSpanId": "ee708d1415074c2b",
        "design.sourceDesignTraceId": "43a5e3f20a9e47d691a26da248b595ee",
        "service.name": "statestore"
      },
      "endTime": "1708928616585",
      "events": [
      ],
      "kind": "Server",
      "links": [
      ],
      "name": "persist",
      "parentSpanId": "a9501a002b9a4913",
      "spanId": "ee708d1415074c2b",
      "startTime": "1708928616185",
      "status": "Unspecified",
      "traceId": "43a5e3f20a9e47d691a26da248b595ee",
      "traceState": ""
    }
  ];

  return JSON.stringify(data);
}
