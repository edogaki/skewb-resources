import {
    CubeOrientation,
    polygons,
    type RendererOptions,
    type SkewbRendererState,
} from "#/utils/renderer/skewbRenderer";

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
                viewBox="0 0 160 140"
                xmlns="http://www.w3.org/2000/svg"
            >
                <title>Skewb Renderer</title>
                {polygons[
                    options?.cubeOrientation || CubeOrientation.UpDown
                ].map((polygon, i) => (
                    <polygon
                        key={polygon.toSVGPointsString()}
                        points={polygon.toSVGPointsString()}
                        style={{
                            fill: `${state[i]}`,
                            stroke: "black",
                            strokeWidth: 0.5,
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export default SkewbRenderer;
