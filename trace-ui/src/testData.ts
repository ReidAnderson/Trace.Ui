export function simpleMicroservice_Compliant() {
  const data = [
    {
      "traceId": "79e3e41dd196473d8df418f3937d0ae4",
      "spanId": "0821f0282bc14758",
      "traceState": "",
      "parentSpanId": "df1ea4f4a4fc429a",
      "name": "aspnet_core.request",
      "kind": "Server",
      "startTime": "1700549692232",
      "endTime": "1700549692419",
      "attributes": {
        "service.name": "gateway.api"
      },
      "events": [

      ],
      "links": [

      ],
      "status": "Unspecified"
    }
    ,
    {
      "traceId": "79e3e41dd196473d8df418f3937d0ae4",
      "spanId": "9d9d8d9b1a894a7d",
      "traceState": "",
      "parentSpanId": "0821f0282bc14758",
      "name": "aspnet_core_mvc.request",
      "kind": "Server",
      "startTime": "1700549692232",
      "endTime": "1700549692418",
      "attributes": {
        "service.name": "gateway.api"
      },
      "events": [

      ],
      "links": [

      ],
      "status": "Unspecified"
    }
    ,
    {
      "traceId": "79e3e41dd196473d8df418f3937d0ae4",
      "spanId": "76f1256db70c45b1",
      "traceState": "",
      "parentSpanId": "9d9d8d9b1a894a7d",
      "name": "http.request",
      "kind": "Server",
      "startTime": "1700549692240",
      "endTime": "1700549692409",
      "attributes": {
        "service.name": "gateway.api-http-client"
      },
      "events": [

      ],
      "links": [

      ],
      "status": "Unspecified"
    }
    ,
    {
      "traceId": "79e3e41dd196473d8df418f3937d0ae4",
      "spanId": "2b521dd731d8442e",
      "traceState": "",
      "parentSpanId": "76f1256db70c45b1",
      "name": "aspnet_core.request",
      "kind": "Server",
      "startTime": "1700549692274",
      "endTime": "1700549692404",
      "attributes": {
        "service.name": "domain.api"
      },
      "events": [

      ],
      "links": [

      ],
      "status": "Unspecified"
    }
    ,
    {
      "traceId": "79e3e41dd196473d8df418f3937d0ae4",
      "spanId": "c6649177b8a24737",
      "traceState": "",
      "parentSpanId": "2b521dd731d8442e",
      "name": "aspnet_core_mvc.request",
      "kind": "Server",
      "startTime": "1700549692274",
      "endTime": "1700549692404",
      "attributes": {
        "service.name": "domain.api"
      },
      "events": [

      ],
      "links": [

      ],
      "status": "Unspecified"
    }
    ,
    {
      "traceId": "79e3e41dd196473d8df418f3937d0ae4",
      "spanId": "200437e4d2154afc",
      "traceState": "",
      "parentSpanId": "c6649177b8a24737",
      "name": "sql_server.query",
      "kind": "Server",
      "startTime": "1700549692286",
      "endTime": "1700549692298",
      "attributes": {
        "service.name": "domain.api-sql-server"
      },
      "events": [

      ],
      "links": [

      ],
      "status": "Unspecified"
    }
    ,
    {
      "traceId": "79e3e41dd196473d8df418f3937d0ae4",
      "spanId": "0d502f6e53384679",
      "traceState": "",
      "parentSpanId": "c6649177b8a24737",
      "name": "sql_server.query",
      "kind": "Server",
      "startTime": "1700549692299",
      "endTime": "1700549692310",
      "attributes": {
        "service.name": "domain.api-sql-server"
      },
      "events": [

      ],
      "links": [

      ],
      "status": "Unspecified"
    }
    ,
    {
      "traceId": "79e3e41dd196473d8df418f3937d0ae4",
      "spanId": "47939ccaf68541ce",
      "traceState": "",
      "parentSpanId": "c6649177b8a24737",
      "name": "sql_server.query",
      "kind": "Server",
      "startTime": "1700549692310",
      "endTime": "1700549692321",
      "attributes": {
        "service.name": "domain.api-sql-server"
      },
      "events": [

      ],
      "links": [

      ],
      "status": "Unspecified"
    }
    ,
    {
      "traceId": "79e3e41dd196473d8df418f3937d0ae4",
      "spanId": "628c7610e6544606",
      "traceState": "",
      "parentSpanId": "c6649177b8a24737",
      "name": "sql_server.query",
      "kind": "Server",
      "startTime": "1700549692322",
      "endTime": "1700549692333",
      "attributes": {
        "service.name": "domain.api-sql-server"
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

export function simpleMicroservice_NoncompliantDuration() {
  const data = [
    {
      "traceId": "79e3e41dd196473d8df418f3937d0ae4",
      "spanId": "0821f0282bc14758",
      "traceState": "",
      "parentSpanId": "df1ea4f4a4fc429a",
      "name": "aspnet_core.request",
      "kind": "Server",
      "startTime": "1700549692232",
      "endTime": "1700549879583",
      "attributes": {
        "service.name": "gateway.api"
      },
      "events": [

      ],
      "links": [

      ],
      "status": "Unspecified"
    }
    ,
    {
      "traceId": "79e3e41dd196473d8df418f3937d0ae4",
      "spanId": "9d9d8d9b1a894a7d",
      "traceState": "",
      "parentSpanId": "0821f0282bc14758",
      "name": "aspnet_core_mvc.request",
      "kind": "Server",
      "startTime": "1700549692232",
      "endTime": "1700549692418",
      "attributes": {
        "service.name": "gateway.api"
      },
      "events": [

      ],
      "links": [

      ],
      "status": "Unspecified"
    }
    ,
    {
      "traceId": "79e3e41dd196473d8df418f3937d0ae4",
      "spanId": "76f1256db70c45b1",
      "traceState": "",
      "parentSpanId": "9d9d8d9b1a894a7d",
      "name": "http.request",
      "kind": "Server",
      "startTime": "1700549692240",
      "endTime": "1700549692409",
      "attributes": {
        "service.name": "gateway.api-http-client"
      },
      "events": [

      ],
      "links": [

      ],
      "status": "Unspecified"
    }
    ,
    {
      "traceId": "79e3e41dd196473d8df418f3937d0ae4",
      "spanId": "2b521dd731d8442e",
      "traceState": "",
      "parentSpanId": "76f1256db70c45b1",
      "name": "aspnet_core.request",
      "kind": "Server",
      "startTime": "1700549692274",
      "endTime": "1700549692404",
      "attributes": {
        "service.name": "domain.api"
      },
      "events": [

      ],
      "links": [

      ],
      "status": "Unspecified"
    }
    ,
    {
      "traceId": "79e3e41dd196473d8df418f3937d0ae4",
      "spanId": "c6649177b8a24737",
      "traceState": "",
      "parentSpanId": "2b521dd731d8442e",
      "name": "aspnet_core_mvc.request",
      "kind": "Server",
      "startTime": "1700549692274",
      "endTime": "1700549692404",
      "attributes": {
        "service.name": "domain.api"
      },
      "events": [

      ],
      "links": [

      ],
      "status": "Unspecified"
    }
    ,
    {
      "traceId": "79e3e41dd196473d8df418f3937d0ae4",
      "spanId": "200437e4d2154afc",
      "traceState": "",
      "parentSpanId": "c6649177b8a24737",
      "name": "sql_server.query",
      "kind": "Server",
      "startTime": "1700549692286",
      "endTime": "1700549692298",
      "attributes": {
        "service.name": "domain.api-sql-server"
      },
      "events": [

      ],
      "links": [

      ],
      "status": "Unspecified"
    }
    ,
    {
      "traceId": "79e3e41dd196473d8df418f3937d0ae4",
      "spanId": "0d502f6e53384679",
      "traceState": "",
      "parentSpanId": "c6649177b8a24737",
      "name": "sql_server.query",
      "kind": "Server",
      "startTime": "1700549692299",
      "endTime": "1700549692310",
      "attributes": {
        "service.name": "domain.api-sql-server"
      },
      "events": [

      ],
      "links": [

      ],
      "status": "Unspecified"
    }
    ,
    {
      "traceId": "79e3e41dd196473d8df418f3937d0ae4",
      "spanId": "47939ccaf68541ce",
      "traceState": "",
      "parentSpanId": "c6649177b8a24737",
      "name": "sql_server.query",
      "kind": "Server",
      "startTime": "1700549692310",
      "endTime": "1700549692321",
      "attributes": {
        "service.name": "domain.api-sql-server"
      },
      "events": [

      ],
      "links": [

      ],
      "status": "Unspecified"
    }
    ,
    {
      "traceId": "79e3e41dd196473d8df418f3937d0ae4",
      "spanId": "628c7610e6544606",
      "traceState": "",
      "parentSpanId": "c6649177b8a24737",
      "name": "sql_server.query",
      "kind": "Server",
      "startTime": "1700549692322",
      "endTime": "1700549692333",
      "attributes": {
        "service.name": "domain.api-sql-server"
      },
      "events": [

      ],
      "links": [

      ],
      "status": "Unspecified"
    }
    ,
    {
      "traceId": "79e3e41dd196473d8df418f3937d0ae4",
      "spanId": "59539d22f31a4d1d",
      "traceState": "",
      "parentSpanId": "c6649177b8a24737",
      "name": "sql_server.query",
      "kind": "Server",
      "startTime": "1700549692334",
      "endTime": "1700549692345",
      "attributes": {
        "service.name": "domain.api-sql-server"
      },
      "events": [

      ],
      "links": [

      ],
      "status": "Unspecified"
    }
    ,
    {
      "traceId": "79e3e41dd196473d8df418f3937d0ae4",
      "spanId": "dd949cd8a37349f2",
      "traceState": "",
      "parentSpanId": "c6649177b8a24737",
      "name": "sql_server.query",
      "kind": "Server",
      "startTime": "1700549692346",
      "endTime": "1700549692357",
      "attributes": {
        "service.name": "domain.api-sql-server"
      },
      "events": [

      ],
      "links": [

      ],
      "status": "Unspecified"
    }
    ,
    {
      "traceId": "79e3e41dd196473d8df418f3937d0ae4",
      "spanId": "164274e21cbb47fc",
      "traceState": "",
      "parentSpanId": "c6649177b8a24737",
      "name": "sql_server.query",
      "kind": "Server",
      "startTime": "1700549692357",
      "endTime": "1700549692368",
      "attributes": {
        "service.name": "domain.api-sql-server"
      },
      "events": [

      ],
      "links": [

      ],
      "status": "Unspecified"
    }
    ,
    {
      "traceId": "79e3e41dd196473d8df418f3937d0ae4",
      "spanId": "f8818530b8a044f1",
      "traceState": "",
      "parentSpanId": "c6649177b8a24737",
      "name": "sql_server.query",
      "kind": "Server",
      "startTime": "1700549692369",
      "endTime": "1700549692379",
      "attributes": {
        "service.name": "domain.api-sql-server"
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

export function simpleMicroservice_NonCompliantMissingServiceCall() {
  const data = [
    {
      "traceId": "79e3e41dd196473d8df417f3937d0ae4",
      "spanId": "0821f0282bc14758",
      "traceState": "",
      "parentSpanId": "df1ea4f4a4fc429a",
      "name": "aspnet_core.request",
      "kind": "Server",
      "startTime": "1700549692232",
      "endTime": "1700549692419",
      "attributes": {
        "service.name": "gateway.api"
      },
      "events": [

      ],
      "links": [

      ],
      "status": "Unspecified"
    }
    ,
    {
      "traceId": "79e3e41dd196473d8df417f3937d0ae4",
      "spanId": "9d9d8d9b1a894a7d",
      "traceState": "",
      "parentSpanId": "0821f0282bc14758",
      "name": "aspnet_core_mvc.request",
      "kind": "Server",
      "startTime": "1700549692232",
      "endTime": "1700549692418",
      "attributes": {
        "service.name": "gateway.api"
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

export function simpleMicroservice_NoncompliantDisallowed() {
  const data = [
    {
      "traceId": "79e3e41dd196473d8df418f3937d0ae4",
      "spanId": "0821f0282bc14758",
      "traceState": "",
      "parentSpanId": "df1ea4f4a4fc429a",
      "name": "aspnet_core.request",
      "kind": "Server",
      "startTime": "1700549692232",
      "endTime": "1700549692419",
      "attributes": {
        "service.name": "gateway.api"
      },
      "events": [

      ],
      "links": [

      ],
      "status": "Unspecified"
    }
    ,
    {
      "traceId": "79e3e41dd196473d8df418f3937d0ae4",
      "spanId": "9d9d8d9b1a894a7d",
      "traceState": "",
      "parentSpanId": "0821f0282bc14758",
      "name": "aspnet_core_mvc.request",
      "kind": "Server",
      "startTime": "1700549692232",
      "endTime": "1700549692418",
      "attributes": {
        "service.name": "gateway.api"
      },
      "events": [

      ],
      "links": [

      ],
      "status": "Unspecified"
    }
    ,
    {
      "traceId": "79e3e41dd196473d8df418f3937d0ae4",
      "spanId": "76f1256db70c45b1",
      "traceState": "",
      "parentSpanId": "9d9d8d9b1a894a7d",
      "name": "http.request",
      "kind": "Server",
      "startTime": "1700549692240",
      "endTime": "1700549692409",
      "attributes": {
        "service.name": "gateway.api-http-client"
      },
      "events": [

      ],
      "links": [

      ],
      "status": "Unspecified"
    }
    ,
    {
      "traceId": "79e3e41dd196473d8df418f3937d0ae4",
      "spanId": "2b521dd731d8442e",
      "traceState": "",
      "parentSpanId": "76f1256db70c45b1",
      "name": "aspnet_core.request",
      "kind": "Server",
      "startTime": "1700549692274",
      "endTime": "1700549692404",
      "attributes": {
        "service.name": "domain.api"
      },
      "events": [

      ],
      "links": [

      ],
      "status": "Unspecified"
    }
    ,
    {
      "traceId": "79e3e41dd196473d8df418f3937d0ae4",
      "spanId": "c6649177b8a24737",
      "traceState": "",
      "parentSpanId": "2b521dd731d8442e",
      "name": "aspnet_core_mvc.request",
      "kind": "Server",
      "startTime": "1700549692274",
      "endTime": "1700549692404",
      "attributes": {
        "service.name": "domain.api"
      },
      "events": [

      ],
      "links": [

      ],
      "status": "Unspecified"
    }
    ,
    {
      "traceId": "79e3e41dd196473d8df418f3937d0ae4",
      "spanId": "200437e4d2154afc",
      "traceState": "",
      "parentSpanId": "c6649177b8a24737",
      "name": "sql_server.query",
      "kind": "Server",
      "startTime": "1700549692286",
      "endTime": "1700549692298",
      "attributes": {
        "service.name": "domain.api-sql-server"
      },
      "events": [

      ],
      "links": [

      ],
      "status": "Unspecified"
    }
    ,
    {
      "traceId": "79e3e41dd196473d8df418f3937d0ae4",
      "spanId": "0d502f6e53384679",
      "traceState": "",
      "parentSpanId": "c6649177b8a24737",
      "name": "sql_server.query",
      "kind": "Server",
      "startTime": "1700549692299",
      "endTime": "1700549692310",
      "attributes": {
        "service.name": "domain.api-sql-server"
      },
      "events": [

      ],
      "links": [

      ],
      "status": "Unspecified"
    }
    ,
    {
      "traceId": "79e3e41dd196473d8df418f3937d0ae4",
      "spanId": "47939ccaf68541ce",
      "traceState": "",
      "parentSpanId": "c6649177b8a24737",
      "name": "sql_server.query",
      "kind": "Server",
      "startTime": "1700549692310",
      "endTime": "1700549692321",
      "attributes": {
        "service.name": "domain.api-sql-server"
      },
      "events": [

      ],
      "links": [

      ],
      "status": "Unspecified"
    }
    ,
    {
      "traceId": "79e3e41dd196473d8df418f3937d0ae4",
      "spanId": "628c7610e6544606",
      "traceState": "",
      "parentSpanId": "c6649177b8a24737",
      "name": "sql_server.query",
      "kind": "Server",
      "startTime": "1700549692322",
      "endTime": "1700549692333",
      "attributes": {
        "service.name": "domain.api-sql-server"
      },
      "events": [

      ],
      "links": [

      ],
      "status": "Unspecified"
    }
    ,
    {
      "traceId": "79e3e41dd196473d8df418f3937d0ae4",
      "spanId": "59539d22f31a4d1d",
      "traceState": "",
      "parentSpanId": "c6649177b8a24737",
      "name": "sql_server.query",
      "kind": "Server",
      "startTime": "1700549692334",
      "endTime": "1700549692345",
      "attributes": {
        "service.name": "domain.api-sql-server"
      },
      "events": [

      ],
      "links": [

      ],
      "status": "Unspecified"
    }
    ,
    {
      "traceId": "79e3e41dd196473d8df418f3937d0ae4",
      "spanId": "dd949cd8a37349f2",
      "traceState": "",
      "parentSpanId": "c6649177b8a24737",
      "name": "sql_server.query",
      "kind": "Server",
      "startTime": "1700549692346",
      "endTime": "1700549692357",
      "attributes": {
        "service.name": "domain.api-sql-server"
      },
      "events": [

      ],
      "links": [

      ],
      "status": "Unspecified"
    }
    ,
    {
      "traceId": "79e3e41dd196473d8df418f3937d0ae4",
      "spanId": "164274e21cbb47fc",
      "traceState": "",
      "parentSpanId": "c6649177b8a24737",
      "name": "sql_server.query",
      "kind": "Server",
      "startTime": "1700549692357",
      "endTime": "1700549692368",
      "attributes": {
        "service.name": "domain.api-sql-server"
      },
      "events": [

      ],
      "links": [

      ],
      "status": "Unspecified"
    }
    ,
    {
      "traceId": "79e3e41dd196473d8df418f3937d0ae4",
      "spanId": "f8818530b8a044f1",
      "traceState": "",
      "parentSpanId": "c6649177b8a24737",
      "name": "sql_server.query",
      "kind": "Server",
      "startTime": "1700549692369",
      "endTime": "1700549692379",
      "attributes": {
        "service.name": "domain.api-sql-server"
      },
      "events": [

      ],
      "links": [

      ],
      "status": "Unspecified"
    }
    ,
    {
      "traceId": "79e3e41dd196473d8df418f3937d0ae4",
      "spanId": "dcab06a25a1c4fa6",
      "traceState": "",
      "parentSpanId": "9d9d8d9b1a894a7d",
      "name": "sql_server.query",
      "kind": "Server",
      "startTime": "1700549692380",
      "endTime": "1700549692391",
      "attributes": {
        "service.name": "gateway.api-sql-server"
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

export function eventDriven_Compliant() {
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
      "parentSpanId": "52dfe64b7ae6c019",
      "spanId": "a7088b42c8e60821",
      "startTime": 1708928615385,
      "status": "",
      "traceId": "43a5e3f20a9e47d691a26da248b595ee"
    },
    {
      "attributes": {
        "service.name": "Consumer1"
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
        "service.name": "Consumer2"
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
      "spanId": "5fb67135e1ed2651",
      "name": "aspnet_core_mvc.request",
      "kind": "",
      "traceId": "43a5e3f20a9e47d691a26da248b595ee",
      "startTime": 1708928616435,
      "endTime": 1708928616435,
      "status": "",
      "parentSpanId": "a9501a002b9a4913",
      "attributes": {
        "service.name": "Consumer2"
      },
      "links": [],
      "events": {}
    },
    {
      "spanId": "d9a7e2efeca8dcca",
      "parentSpanId": "d8c82636d34ef2d5",
      "name": "aspnet_core_mvc.request",
      "kind": "",
      "traceId": "43a5e3f20a9e47d691a26da248b595ee",
      "startTime": 1708928616435,
      "endTime": 1708928616435,
      "status": "",
      "attributes": {
        "service.name": "Consumer1"
      },
      "links": [],
      "events": {}
    },
    {
      "spanId": "b2de88b8bb242b2b",
      "name": "Span B",
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
      "name": "Span C",
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
      "name": "Span B",
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
      "name": "Span C",
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
      "spanId": "52dfe64b7ae6c019",
      "name": "aspnet_core.request",
      "kind": "",
      "traceId": "43a5e3f20a9e47d691a26da248b595ee",
      "startTime": 0,
      "endTime": 0,
      "status": "",
      "attributes": {
        "service.name": "Gateway"
      },
      "links": [],
      "events": {}
    },
    {
      "spanId": "e54397d9fae9917b",
      "name": "sql_server.query",
      "parentSpanId": "5fb67135e1ed2651",
      "kind": "",
      "traceId": "43a5e3f20a9e47d691a26da248b595ee",
      "startTime": 1708928616435,
      "endTime": 1708928616435,
      "status": "",
      "attributes": {
        "service.name": "Consumer2"
      },
      "links": [],
      "events": {}
    },
    {
      "spanId": "8770d2232c3620ee",
      "name": "sql_server.query",
      "parentSpanId": "d9a7e2efeca8dcca",
      "kind": "",
      "traceId": "43a5e3f20a9e47d691a26da248b595ee",
      "startTime": 1708928616435,
      "endTime": 1708928616435,
      "status": "",
      "attributes": {
        "service.name": "Consumer1"
      },
      "links": [],
      "events": {}
    },
    {
      "spanId": "f183ca4b0c39a274",
      "name": "sql_server.query",
      "parentSpanId": "5fb67135e1ed2651",
      "kind": "",
      "traceId": "43a5e3f20a9e47d691a26da248b595ee",
      "startTime": 1708928616435,
      "endTime": 1708928616435,
      "status": "",
      "attributes": {
        "service.name": "Consumer2"
      },
      "links": [],
      "events": {}
    },
    {
      "spanId": "c0d197116b729027",
      "name": "sql_server.query",
      "parentSpanId": "d9a7e2efeca8dcca",
      "kind": "",
      "traceId": "43a5e3f20a9e47d691a26da248b595ee",
      "startTime": 1708928616435,
      "endTime": 1708928616435,
      "status": "",
      "attributes": {
        "service.name": "Consumer1"
      },
      "links": [],
      "events": {}
    }
  ];

  return JSON.stringify(data);
}