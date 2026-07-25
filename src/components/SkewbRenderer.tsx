import {
    CubeOrientation,
    polygons,
    type RendererOptions,
    type SkewbRendererState,
} from "#/utils/renderer/skewbRenderer";

const dFaces = new Set([10, 11, 12, 13, 14]);

function SkewbRenderer({
    state,
    options,
}: {
    state: SkewbRendererState;
    options: RendererOptions | null;
}) {
    return (
        <div className="skewb-box">
            <svg
                version="1.1"
                viewBox={`0 0 160 ${options?.hideDFace ? 90 : 142}`}
                xmlns="http://www.w3.org/2000/svg"
            >
                {polygons[
                    options?.cubeOrientation || CubeOrientation.UpDown
                ].map((polygon, i) => {
                    if (options?.hideDFace && dFaces.has(i)) {
                        return null;
                    }
                    return (
                        <polygon
                            key={polygon.toSVGPointsString()}
                            points={polygon.toSVGPointsString()}
                            style={{
                                fill: `${state[i]}`,
                                stroke: "black",
                                strokeWidth: 0.5,
                            }}
                        />
                    );
                })}
            </svg>
        </div>
    );
}

export default SkewbRenderer;
