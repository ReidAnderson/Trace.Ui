import { Box } from '@mui/material';
import { FlamegraphRenderer, convertJaegerTraceToProfile } from '@pyroscope/flamegraph';

export interface FlameGraphProps {
    jaegerTrace: any;
}

export function FlameGraph(props: FlameGraphProps) {
    let SimpleTree = {
        version: 1,
        flamebearer: {
            names: [
                'total',
                'runtime.mcall',
                'runtime.park_m',
                'runtime.schedule',
                'runtime.resetspinning',
                'runtime.wakep',
                'runtime.startm',
                'runtime.notewakeup',
                'runtime.semawakeup',
                'runtime.pthread_cond_signal',
                'runtime.findrunnable',
                'runtime.netpoll',
                'runtime.kevent',
                'runtime.main',
                'main.main',
                'github.com/pyroscope-io/client/pyroscope.TagWrapper',
                'runtime/pprof.Do',
                'github.com/pyroscope-io/client/pyroscope.TagWrapper.func1',
                'main.main.func1',
                'main.slowFunction',
                'main.slowFunction.func1',
                'main.work',
                'runtime.asyncPreempt',
                'main.fastFunction',
                'main.fastFunction.func1',
            ],
            levels: [
                [0, 609, 0, 0],
                [0, 606, 0, 13, 0, 3, 0, 1],
                [0, 606, 0, 14, 0, 3, 0, 2],
                [0, 606, 0, 15, 0, 3, 0, 3],
                [0, 606, 0, 16, 0, 1, 0, 10, 0, 2, 0, 4],
                [0, 606, 0, 17, 0, 1, 0, 11, 0, 2, 0, 5],
                [0, 606, 0, 18, 0, 1, 1, 12, 0, 2, 0, 6],
                [0, 100, 0, 23, 0, 506, 0, 19, 1, 2, 0, 7],
                [0, 100, 0, 15, 0, 506, 0, 16, 1, 2, 0, 8],
                [0, 100, 0, 16, 0, 506, 0, 20, 1, 2, 2, 9],
                [0, 100, 0, 17, 0, 506, 493, 21],
                [0, 100, 0, 24, 493, 13, 13, 22],
                [0, 100, 97, 21],
                [97, 3, 3, 22],
            ],
            numTicks: 609,
            maxSelf: 493,
        },
        metadata: {
            appName: 'simple.golang.app.cpu',
            name: 'simple.golang.app.cpu 2022-09-06T12:16:31Z',
            startTime: 1662466591,
            endTime: 1662470191,
            query: 'simple.golang.app.cpu{}',
            maxNodes: 1024,
            format: 'single' as const,
            sampleRate: 100,
            spyName: 'gospy' as const,
            units: 'samples' as const,
        },
        timeline: {
            startTime: 1662466590,
            samples: [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 610, 0,
            ],
            durationDelta: 10,
        },
    };

    // https://github.com/jaegertracing/jaeger-ui/blob/main/packages/jaeger-ui/src/components/TracePage/TraceFlamegraph/index.tsx
    // https://github.com/grafana/pyroscope/blob/9e55dd1235a700bfe8f471090ad7c6429a83db18/public/app/legacy/flamegraph/FlameGraph/FlameGraphComponent/Flamegraph.ts

    SimpleTree = convertJaegerTraceToProfile(props.jaegerTrace);
    // 1680971616679312
    // 1700528092380107
    return (
        <Box className="Flamegraph-wrapper">
            <FlamegraphRenderer
                profile={SimpleTree}
                onlyDisplay="flamegraph"
                showToolbar={false}
            />
        </Box>
    );
}

export function ServiceGraph() {
    return (
        <p>Dependency Graph</p>
    )
}

export const sampleJaegerTrace = {
    "traceID": "aeae0732807e4c03b34399d01026eddd",
    "spans": [
        {
            "duration": 187351,
            "operationName": "aspnet_core.request",
            "process": {
                "serviceName": "book.accessorialrequest.tasks.ui.api",
                "tags": [
                ]
            },
            "references": [
                {
                    "refType": "CHILD_OF",
                    "spanID": "897907382057463e",
                    "traceID": "aeae0732807e4c03b34399d01026eddd"
                }
            ],
            "spanID": "8c099b5add514357",
            "startTime": 1700528092232155,
            "traceID": "aeae0732807e4c03b34399d01026eddd"
        },
        {
            "duration": 186770,
            "operationName": "aspnet_core_mvc.request",
            "process": {
                "serviceName": "book.accessorialrequest.tasks.ui.api",
                "tags": [
                ]
            },
            "references": [
                {
                    "refType": "CHILD_OF",
                    "spanID": "8c099b5add514357",
                    "traceID": "aeae0732807e4c03b34399d01026eddd"
                }
            ],
            "spanID": "94c21fa462c24674",
            "startTime": 1700528092232691,
            "traceID": "aeae0732807e4c03b34399d01026eddd"
        },
        {
            "duration": 169184,
            "operationName": "http.request",
            "process": {
                "serviceName": "book.accessorialrequest.tasks.ui.api-http-client",
                "tags": [
                ]
            },
            "references": [
                {
                    "refType": "CHILD_OF",
                    "spanID": "94c21fa462c24674",
                    "traceID": "aeae0732807e4c03b34399d01026eddd"
                }
            ],
            "spanID": "63331824b6414c48",
            "startTime": 1700528092240468,
            "traceID": "aeae0732807e4c03b34399d01026eddd"
        },
        {
            "duration": 130885,
            "operationName": "aspnet_core.request",
            "process": {
                "serviceName": "book.accessorialrequest.api",
                "tags": [
                ]
            },
            "references": [
                {
                    "refType": "CHILD_OF",
                    "spanID": "63331824b6414c48",
                    "traceID": "aeae0732807e4c03b34399d01026eddd"
                }
            ],
            "spanID": "203abed93842451d",
            "startTime": 1700528092274046,
            "traceID": "aeae0732807e4c03b34399d01026eddd"
        },
        {
            "duration": 130353,
            "operationName": "aspnet_core_mvc.request",
            "process": {
                "serviceName": "book.accessorialrequest.api",
                "tags": [
                ]
            },
            "references": [
                {
                    "refType": "CHILD_OF",
                    "spanID": "203abed93842451d",
                    "traceID": "aeae0732807e4c03b34399d01026eddd"
                }
            ],
            "spanID": "a4cdde6cb71242b8",
            "startTime": 1700528092274543,
            "traceID": "aeae0732807e4c03b34399d01026eddd"
        },
        {
            "duration": 12160,
            "operationName": "sql_server.query",
            "process": {
                "serviceName": "book.accessorialrequest.api-sql-server",
                "tags": [
                ]
            },
            "references": [
                {
                    "refType": "CHILD_OF",
                    "spanID": "a4cdde6cb71242b8",
                    "traceID": "aeae0732807e4c03b34399d01026eddd"
                }
            ],
            "spanID": "0e24756dd7ce4196",
            "startTime": 1700528092286839,
            "traceID": "aeae0732807e4c03b34399d01026eddd"
        },
        {
            "duration": 11598,
            "operationName": "sql_server.query",
            "process": {
                "serviceName": "book.accessorialrequest.api-sql-server",
                "tags": [
                ]
            },
            "references": [
                {
                    "refType": "CHILD_OF",
                    "spanID": "a4cdde6cb71242b8",
                    "traceID": "aeae0732807e4c03b34399d01026eddd"
                }
            ],
            "spanID": "5230af7188144a2e",
            "startTime": 1700528092299083,
            "traceID": "aeae0732807e4c03b34399d01026eddd"
        },
        {
            "duration": 11932,
            "operationName": "sql_server.query",
            "process": {
                "serviceName": "book.accessorialrequest.api-sql-server",
                "tags": [
                ]
            },
            "references": [
                {
                    "refType": "CHILD_OF",
                    "spanID": "a4cdde6cb71242b8",
                    "traceID": "aeae0732807e4c03b34399d01026eddd"
                }
            ],
            "spanID": "5ec5f275d63b4373",
            "startTime": 1700528092310782,
            "traceID": "aeae0732807e4c03b34399d01026eddd"
        },
        {
            "duration": 11785,
            "operationName": "sql_server.query",
            "process": {
                "serviceName": "book.accessorialrequest.api-sql-server",
                "tags": [
                ]
            },
            "references": [
                {
                    "refType": "CHILD_OF",
                    "spanID": "a4cdde6cb71242b8",
                    "traceID": "aeae0732807e4c03b34399d01026eddd"
                }
            ],
            "spanID": "84cb6bba2c70495d",
            "startTime": 1700528092322766,
            "traceID": "aeae0732807e4c03b34399d01026eddd"
        },
        {
            "duration": 11327,
            "operationName": "sql_server.query",
            "process": {
                "serviceName": "book.accessorialrequest.api-sql-server",
                "tags": [
                ]
            },
            "references": [
                {
                    "refType": "CHILD_OF",
                    "spanID": "a4cdde6cb71242b8",
                    "traceID": "aeae0732807e4c03b34399d01026eddd"
                }
            ],
            "spanID": "a89d8e8d9b424f5c",
            "startTime": 1700528092334591,
            "traceID": "aeae0732807e4c03b34399d01026eddd"
        },
        {
            "duration": 11563,
            "operationName": "sql_server.query",
            "process": {
                "serviceName": "book.accessorialrequest.api-sql-server",
                "tags": [
                ]
            },
            "references": [
                {
                    "refType": "CHILD_OF",
                    "spanID": "a4cdde6cb71242b8",
                    "traceID": "aeae0732807e4c03b34399d01026eddd"
                }
            ],
            "spanID": "b5e0b0921f574772",
            "startTime": 1700528092346115,
            "traceID": "aeae0732807e4c03b34399d01026eddd"
        },
        {
            "duration": 11028,
            "operationName": "sql_server.query",
            "process": {
                "serviceName": "book.accessorialrequest.api-sql-server",
                "tags": [
                ]
            },
            "references": [
                {
                    "refType": "CHILD_OF",
                    "spanID": "a4cdde6cb71242b8",
                    "traceID": "aeae0732807e4c03b34399d01026eddd"
                }
            ],
            "spanID": "875193d77eb248b7",
            "startTime": 1700528092357812,
            "traceID": "aeae0732807e4c03b34399d01026eddd"
        },
        {
            "duration": 10947,
            "operationName": "sql_server.query",
            "process": {
                "serviceName": "book.accessorialrequest.api-sql-server",
                "tags": [
                ]
            },
            "references": [
                {
                    "refType": "CHILD_OF",
                    "spanID": "a4cdde6cb71242b8",
                    "traceID": "aeae0732807e4c03b34399d01026eddd"
                }
            ],
            "spanID": "87248178b0c1481e",
            "startTime": 1700528092369017,
            "traceID": "aeae0732807e4c03b34399d01026eddd"
        },
        {
            "duration": 11248,
            "operationName": "sql_server.query",
            "process": {
                "serviceName": "book.accessorialrequest.api-sql-server",
                "tags": [
                ]
            },
            "references": [
                {
                    "refType": "CHILD_OF",
                    "spanID": "a4cdde6cb71242b8",
                    "traceID": "aeae0732807e4c03b34399d01026eddd"
                }
            ],
            "spanID": "4ea3741409ea4b8e",
            "startTime": 1700528092380107,
            "traceID": "aeae0732807e4c03b34399d01026eddd"
        }
    ]
};