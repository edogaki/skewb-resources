import { Color } from "#/utils/renderer/color";
import { CubeOrientation, polygons } from "#/utils/renderer/skewbRenderer";
import { SkewbState } from "#/utils/solver/skewbState";

const state = new SkewbState(undefined, undefined, {
    0: [Color.Gray, Color.Gray, Color.Gray],
    1: [Color.Gray, Color.Gray, Color.Gray],
    2: [Color.Gray, Color.Gray, Color.Gray],
    3: [Color.Gray, Color.Gray, Color.Gray],
    4: [Color.Gray, Color.Gray, Color.Gray],
    5: [Color.Gray, Color.Gray, Color.Gray],
    6: [Color.Gray, Color.Gray, Color.Gray],
    7: [Color.Gray, Color.Gray, Color.Gray],
    8: [Color.White],
    9: [Color.Gray],
    10: [Color.Gray],
    11: [Color.Gray],
    12: [Color.Gray],
    13: [Color.Gray],
})
    .turnWCA("x2")
    .turnWCA("y")
    .toSkewbRendererState();

const polygonCenters = polygons[CubeOrientation.UpDown].map((p) => {
    const sum = p.points.reduce(
        (p1, p2) => ({ x: p1.x + p2.x, y: p1.y + p2.y }),
        { x: 0, y: 0 },
    );
    return { x: sum.x / p.points.length, y: sum.y / p.points.length };
});

const indexToLetter: { [key: number]: string | undefined } = {
    13: "a",
    10: "b",
    11: "c",
    12: "d",
    27: "e",
    3: "f",
    2: "g",
    8: "h",
    7: "i",
    23: "j",
    22: "k",
    28: "l",
    26: "m",
    0: "n",
    15: "o",
    1: "p",
    5: "q",
    18: "r",
    6: "s",
    20: "t",
    17: "u",
    21: "v",
    25: "w",
    16: "x",
};

export default function LayerCaseFilterByCornersGuide() {
    return (
        <div className="skewb-box">
            <svg
                version="1.1"
                viewBox="0 0 160 140"
                xmlns="http://www.w3.org/2000/svg"
            >
                {polygons[CubeOrientation.UpDown].map((polygon, i) => (
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
                {polygonCenters.map(({ x, y }, i) => (
                    <text
                        key={`${x},${y}`}
                        x={x}
                        y={y}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill="black"
                        className="text-[0.5rem]"
                    >
                        {indexToLetter[i]}
                    </text>
                ))}
            </svg>
        </div>
    );
}
