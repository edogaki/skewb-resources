import { type Dispatch, type SetStateAction, useState } from "react";
import {
    Color,
    tailwindColors,
    tailwindHoverColors,
    validColors,
} from "#/utils/renderer/color";
import {
    CubeOrientation,
    polygons,
    type SkewbRendererState,
} from "#/utils/renderer/skewbRenderer";

export default function SkewbPainter({
    skewbRendererState,
    setSkewbRendererState,
}: {
    skewbRendererState: SkewbRendererState;
    setSkewbRendererState: Dispatch<SetStateAction<SkewbRendererState>>;
}) {
    const [selectedColor, setSelectedColor] = useState<Color>(Color.Orange);
    return (
        <div className="skewb-editor">
            <div className="flex">
                {validColors.map((c) => (
                    <button
                        type="button"
                        key={c}
                        className={`rounded-full w-10 h-10 m-1 ${tailwindColors[c]} ${tailwindHoverColors[c]} transition-all ${selectedColor === c ? "border-4" : "border"}`}
                        onClick={() => setSelectedColor(c)}
                    ></button>
                ))}
                <button
                    type="button"
                    className={`rounded-full rounded-full border border-[rgba(23,58,64,0.2)] bg-white/50 px-5 py-2.5 text-sm font-semibold text-[var(--sea-ink)] no-underline transition hover:-translate-y-0.5 hover:border-[rgba(23,58,64,0.35)]`}
                    onClick={() =>
                        setSkewbRendererState(
                            Array.from({ length: 30 }).fill(
                                Color.White,
                            ) as SkewbRendererState,
                        )
                    }
                >
                    Reset Colors
                </button>
            </div>
            <div>
                <svg
                    version="1.1"
                    viewBox="0 0 200 150"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <title>Skewb Renderer</title>
                    {polygons[CubeOrientation.UpDown].map((polygon, pIndex) => (
                        // biome-ignore lint/a11y/useSemanticElements: should be polygon element not button
                        <polygon
                            role="button"
                            key={polygon.toSVGPointsString()}
                            points={polygon.toSVGPointsString()}
                            style={{
                                fill: `${skewbRendererState[pIndex]}`,
                                stroke: "black",
                                strokeWidth: 0.5,
                            }}
                            onClick={() =>
                                setSkewbRendererState(
                                    (s: SkewbRendererState) =>
                                        s.map((v, i) =>
                                            i === pIndex ? selectedColor : v,
                                        ) as SkewbRendererState,
                                )
                            }
                        />
                    ))}
                </svg>
            </div>
        </div>
    );
}
