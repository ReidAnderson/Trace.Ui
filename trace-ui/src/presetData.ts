
export function getBackgroundSampleJson(): string {
  const data = [
    {
      "attributes": {
        "design.sourceDesignSpanId": "4d11d06576e74d20",
        "design.sourceDesignTraceId": "43a5e3f20a9e47d691a26da248b595ee",
        "service.name": "Service 1"
      },
      "endTime": "1708928616085",
      "events": [
      ],
      "kind": "Client",
      "links": [
      ],
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
      "events": [
      ],
      "kind": "Server",
      "links": [
      ],
      "name": "Span B",
      "parentSpanId": "4d11d06576e74d20",
      "spanId": "0e70ab6c066c43c5",
      "startTime": "1708928615385",
      "status": "Unspecified",
      "traceId": "43a5e3f20a9e47d691a26da248b595ee",
      "traceState": ""
    },
    {
      "attributes": {
        "service.name": "Service 3"
      },
      "endTime": 1708928615985,
      "events": {
      },
      "kind": "",
      "links": [
      ],
      "name": "Span C",
      "parentSpanId": "4d11d06576e74d20",
      "spanId": "a7088b42c8e60821",
      "startTime": 1708928615385,
      "status": "",
      "traceId": "43a5e3f20a9e47d691a26da248b595ee"
    },
    {
      "attributes": {
        "service.name": "Service 2"
      },
      "endTime": 1708928615799,
      "events": {
      },
      "kind": "",
      "links": [
      ],
      "name": "Span D",
      "parentSpanId": "0e70ab6c066c43c5",
      "spanId": "abfb39fe5864447c",
      "startTime": 1708928615410,
      "status": "",
      "traceId": "43a5e3f20a9e47d691a26da248b595ee"
    },
    {
      "attributes": {
        "service.name": "Service 3"
      },
      "endTime": 1708928615685,
      "events": {
      },
      "kind": "",
      "links": [
      ],
      "name": "Span E",
      "parentSpanId": "a7088b42c8e60821",
      "spanId": "d8c82636d34ef2d5",
      "startTime": 1708928615585,
      "status": "",
      "traceId": "43a5e3f20a9e47d691a26da248b595ee"
    },
    {
      "attributes": {
        "service.name": "Service 3"
      },
      "endTime": 1708928615825,
      "events": {
      },
      "kind": "",
      "links": [
      ],
      "name": "Span F",
      "parentSpanId": "a7088b42c8e60821",
      "spanId": "5178b5a72a2e3d25",
      "startTime": 1708928615730,
      "status": "",
      "traceId": "43a5e3f20a9e47d691a26da248b595ee"
    },
    {
      "attributes": {
        "design.description": "The order consumer consumes the submitted order",
        "design.sourceDesignSpanId": "a9501a002b9a4913",
        "design.sourceDesignTraceId": "43a5e3f20a9e47d691a26da248b595ee",
        "service.name": "Service 4"
      },
      "endTime": "1708928616435",
      "events": [
      ],
      "kind": "Consumer",
      "links": [
        {
          "attributes": {
          },
          "spanId": "a7088b42c8e60821",
          "traceId": "43a5e3f20a9e47d691a26da248b595ee",
          "traceState": ""
        }
      ],
      "name": "Span G",
      "parentSpanId": "",
      "spanId": "a9501a002b9a4913",
      "startTime": "1708928615990",
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
      "endTime": "1708928616325",
      "events": [
      ],
      "kind": "Server",
      "links": [
      ],
      "name": "Span H",
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

export function getEventDrivenSampleJson(): string {
  const data = [
    {
      "attributes": {
        "service.name": "Gateway"
      },
      "endTime": 1708928615985,
      "events": {},
      "kind": "",
      "links": [],
      "name": "aspnet_core.publish",
      "parentSpanId": "",
      "spanId": "a7088b42c8e60821",
      "startTime": 1708928615385,
      "status": "",
      "traceId": "43a5e3f20a9e47d691a26da248b595ee"
    },
    {
      "attributes": {
        "service.name": "Consumer1",
        "criteria.allowNonImmediateParent": "true"
      },
      "endTime": 1708928615685,
      "events": {},
      "kind": "",
      "links": [
        {
          "attributes": {},
          "spanId": "a7088b42c8e60821",
          "traceId": "43a5e3f20a9e47d691a26da248b595ee",
          "traceState": ""
        }
      ],
      "name": "aspnet_core.consume",
      "parentSpanId": "",
      "spanId": "d8c82636d34ef2d5",
      "startTime": 1708928615585,
      "status": "",
      "traceId": "43a5e3f20a9e47d691a26da248b595ee"
    },
    {
      "attributes": {
        "design.description": "The order consumer consumes the submitted order",
        "design.sourceDesignSpanId": "a9501a002b9a4913",
        "design.sourceDesignTraceId": "43a5e3f20a9e47d691a26da248b595ee",
        "service.name": "Consumer2",
        "criteria.allowNonImmediateParent": "true"
      },
      "endTime": "1708928616435",
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
      "name": "aspnet_core.consume",
      "parentSpanId": "",
      "spanId": "a9501a002b9a4913",
      "startTime": "1708928615990",
      "status": "Unspecified",
      "traceId": "43a5e3f20a9e47d691a26da248b595ee",
      "traceState": ""
    },
    {
      "spanId": "b2de88b8bb242b2b",
      "name": "aspnet_core.consume",
      "kind": "",
      "traceId": "7k0t3a1u396m3r0r735u010u766p0g16",
      "startTime": 1708928615685,
      "endTime": 1708928615685,
      "status": "",
      "attributes": {
        "service.name": "Consumer1",
        "criteria.isDisallowed": "true"
      },
      "links": [],
      "events": {}
    },
    {
      "spanId": "d953c73ab34c27f1",
      "parentSpanId": "b2de88b8bb242b2b",
      "name": "aspnet_core.consume",
      "kind": "",
      "traceId": "7k0t3a1u396m3r0r735u010u766p0g16",
      "startTime": 1708928615685,
      "endTime": 1708928615685,
      "status": "",
      "attributes": {
        "service.name": "Consumer2",
        "criteria.isDisallowed": "true"
      },
      "links": [],
      "events": {}
    },
    {
      "spanId": "abea57b424d5147a",
      "parentSpanId": "d953c73eff4c27f1",
      "name": "aspnet_core.consume",
      "kind": "",
      "traceId": "4l154c061g5d5f144t6p6h4r4p1d305v",
      "startTime": 1708928615685,
      "endTime": 1708928615685,
      "status": "",
      "attributes": {
        "service.name": "Consumer1",
        "criteria.isDisallowed": "true"
      },
      "links": [],
      "events": {}
    },
    {
      "spanId": "d953c73eff4c27f1",
      "name": "aspnet_core.consume",
      "kind": "",
      "traceId": "4l154c061g5d5f144t6p6h4r4p1d305v",
      "startTime": 1708928615685,
      "endTime": 1708928615685,
      "status": "",
      "attributes": {
        "service.name": "Consumer2",
        "criteria.isDisallowed": "true"
      },
      "links": [],
      "events": {}
    },
    {
      "spanId": "f183ca4b0c39a274",
      "name": "sql_server.query",
      "parentSpanId": "a9501a002b9a4913",
      "kind": "",
      "traceId": "43a5e3f20a9e47d691a26da248b595ee",
      "startTime": 1708928616435,
      "endTime": 1708928616435,
      "status": "",
      "attributes": {
        "service.name": "Consumer2",
        "criteria.allowNonImmediateParent": "true"
      },
      "links": [],
      "events": {}
    },
    {
      "spanId": "c0d197116b729027",
      "name": "sql_server.query",
      "parentSpanId": "d8c82636d34ef2d5",
      "kind": "",
      "traceId": "43a5e3f20a9e47d691a26da248b595ee",
      "startTime": 1708928616435,
      "endTime": 1708928616435,
      "status": "",
      "attributes": {
        "service.name": "Consumer1",
        "criteria.allowNonImmediateParent": "true"
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
    },
    {
      "traceId": "54ccebe5e436473ab96bb5a745a61498",
      "spanId": "16aa1e3feb12496c",
      "traceState": "",
      "parentSpanId": "",
      "name": "aspnet_core_mvc.request",
      "kind": "Server",
      "startTime": "1709186554186",
      "endTime": "1709186554286",
      "attributes": {
        "service.name": "gateway.api", "criteria.description": "The gateway receives the request from the client.",
        "criteria.isDisallowed": "true"
      },
      "events": [

      ],
      "links": [

      ],
      "status": "Unspecified"
    }
    ,
    {
      "traceId": "54ccebe5e436473ab96bb5a745a61498",
      "spanId": "4f383aed87804a50",
      "traceState": "",
      "parentSpanId": "16aa1e3feb12496c",
      "name": "sql_server.query",
      "kind": "Server",
      "startTime": "1709186554186",
      "endTime": "1709186554196",
      "attributes": {
        "service.name": "gateway.api-sql-server", "criteria.description": "Do not allow a call from the gateway to the database.", "criteria.allowNonImmediateParent": "false",
        "criteria.isDisallowed": "true"
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
