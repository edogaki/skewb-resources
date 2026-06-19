import { type Dispatch, type SetStateAction, useState } from "react";
import { Color, tailwindColors, validColors } from "#/utils/renderer/color";
import {
    CubeOrientation,
    polygons,
    type SkewbRendererState,
} from "#/utils/renderer/skewbRenderer";
import {
    basePieceColors,
    CornerPiece,
    rendererStateIndices,
} from "#/utils/skewbState";

const cornerFaceIndexToPolygon = {
    0: "0,0 20,0 10,5.773502692",
    1: "20,0 10,17.320508076 10,5.773502692",
    2: "0,0 10,17.320508076 10,5.773502692",
} as const;

const cornerFaceIndexToSmallerPolygon = {
    0: "2,0.384900179 18,0.384900179 10,5.003702333",
    1: "18.666666667,1.539600718 10.666666667,15.396007179 10.666666667,6.158402872",
    2: "1.333333333,1.539600718 9.333333333,15.396007179 9.333333333,6.158402872",
} as const;

export default function SkewbPainter({
    skewbRendererState,
    setSkewbRendererState,
}: {
    skewbRendererState: SkewbRendererState;
    setSkewbRendererState: Dispatch<SetStateAction<SkewbRendererState>>;
}) {
    const cornerPieceOrder = [0, 3, 2, 1, 4, 5, 6, 7] as readonly CornerPiece[];
    const [selectedColor, setSelectedColor] = useState<Color | null>(
        Color.Orange,
    );
    const [selectedCorner, setSelectedCorner] = useState<
        [CornerPiece, 0 | 1 | 2] | null
    >(null);

    console.log({ selectedColor, selectedCorner });
    return (
        <div className="skewb-editor">
            <div className="flex">
                {validColors.map((c) => (
                    <button
                        type="button"
                        key={c}
                        className={`rounded-full w-10 h-10 mr-2 ${tailwindColors[c]} ${selectedColor === c ? "border-4" : "border"}`}
                        onClick={() => {
                            setSelectedColor(c);
                            setSelectedCorner(null);
                        }}
                    ></button>
                ))}
                <button
                    type="button"
                    className={`rounded-full border border-[rgba(23,58,64,0.2)] bg-white/30 px-5 py-2.5 text-sm font-semibold text-[var(--sea-ink)] no-underline transition hover:-translate-y-0.5 hover:border-[rgba(23,58,64,0.35)]`}
                    onClick={() =>
                        setSkewbRendererState(
                            Array.from({ length: 30 }).fill(
                                Color.White,
                            ) as SkewbRendererState,
                        )
                    }
                >
                    Reset
                </button>
            </div>
            <div className="flex flex-wrap">
                {cornerPieceOrder.map((cp) => (
                    <div className="w-[21%]" key={cp}>
                        <svg
                            version="1.1"
                            viewBox="-2 -2 22 22"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>{`Skewb Painter Button for corner ${cp}`}</title>
                            <polygon
                                points="0,0 20,0 10,17.320508076"
                                style={{ fill: "black" }}
                            ></polygon>
                            {[0, 1, 2].map((i) => (
                                // biome-ignore lint/a11y/useSemanticElements: should be polygon element not button
                                <polygon
                                    role="button"
                                    key={i}
                                    points={
                                        (selectedCorner?.[0] === cp &&
                                        selectedCorner?.[1] === i
                                            ? cornerFaceIndexToSmallerPolygon
                                            : cornerFaceIndexToPolygon)[
                                            Number(i) as 0 | 1 | 2
                                        ]
                                    }
                                    style={{
                                        fill: `${basePieceColors[cp][Number(i)]}`,
                                        stroke: "black",
                                        strokeWidth:
                                            selectedCorner?.[0] === cp
                                                ? 0.5
                                                : 0.3,
                                        strokeLinejoin: "round",
                                        transform:
                                            selectedCorner?.[0] === cp &&
                                            selectedCorner?.[1] === i
                                                ? "scale(0.95)"
                                                : "",
                                        transformOrigin: "50% 33.33333%",
                                    }}
                                    onClick={() => {
                                        setSelectedColor(null);
                                        setSelectedCorner([
                                            cp,
                                            Number(i) as 0 | 1 | 2,
                                        ]);
                                    }}
                                ></polygon>
                            ))}
                        </svg>
                    </div>
                ))}
            </div>
            <div>
                <svg
                    version="1.1"
                    viewBox="0 0 160 140"
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
                            onClick={() => {
                                if (selectedCorner) {
                                    const clickedPiece = CornerPiece.find(
                                        (cp) =>
                                            rendererStateIndices[cp].includes(
                                                pIndex,
                                            ),
                                    );
                                    console.log({ clickedPiece });
                                    if (typeof clickedPiece !== "number")
                                        return;
                                    const clickedIndices =
                                        rendererStateIndices[clickedPiece];
                                    console.log({ clickedIndices });
                                    if (clickedIndices.length !== 3) return;
                                    const index =
                                        clickedIndices.indexOf(pIndex);
                                    const colorMap = {
                                        [clickedIndices[0]]:
                                            basePieceColors[selectedCorner[0]][
                                                (3 +
                                                    selectedCorner[1] -
                                                    index) %
                                                    3
                                            ],
                                        [clickedIndices[1]]:
                                            basePieceColors[selectedCorner[0]][
                                                (4 +
                                                    selectedCorner[1] -
                                                    index) %
                                                    3
                                            ],
                                        [clickedIndices[2]]:
                                            basePieceColors[selectedCorner[0]][
                                                (5 +
                                                    selectedCorner[1] -
                                                    index) %
                                                    3
                                            ],
                                    };
                                    setSkewbRendererState(
                                        (s: SkewbRendererState) =>
                                            s.map((v, i) =>
                                                clickedIndices.includes(i)
                                                    ? colorMap[i]
                                                    : v,
                                            ) as SkewbRendererState,
                                    );
                                } else if (selectedColor) {
                                    setSkewbRendererState(
                                        (s: SkewbRendererState) =>
                                            s.map((v, i) =>
                                                i === pIndex
                                                    ? selectedColor
                                                    : v,
                                            ) as SkewbRendererState,
                                    );
                                }
                            }}
                        />
                    ))}
                </svg>
            </div>
        </div>
    );
}
