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
      "parentSpanId": "c6649177b8a24737",
      "name": "sql_server.query",
      "kind": "Server",
      "startTime": "1700549692380",
      "endTime": "1700549692391",
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