import { Box } from '@mui/material';
import { FlamegraphRenderer, convertJaegerTraceToProfile } from '@pyroscope/flamegraph';

export interface FlameGraphProps {
    jaegerTrace: any;
}

export function FlameGraph(props: FlameGraphProps) {
    // https://github.com/jaegertracing/jaeger-ui/blob/main/packages/jaeger-ui/src/components/TracePage/TraceFlamegraph/index.tsx
    // https://github.com/grafana/pyroscope/blob/9e55dd1235a700bfe8f471090ad7c6429a83db18/public/app/legacy/flamegraph/FlameGraph/FlameGraphComponent/Flamegraph.ts

    const SimpleTree = convertJaegerTraceToProfile(props.jaegerTrace);
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