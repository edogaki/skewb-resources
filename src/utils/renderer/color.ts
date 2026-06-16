import { multiply } from "mathjs";
import type { CubeRotation } from "#/utils/renderer/math";

const Color = {
    Gray: "rgb(127,127,127)",
    Orange: "rgb(255,166,0)",
    Green: "rgb(0,255,0)",
    Yellow: "rgb(255,255,0)",
    White: "rgb(255,255,255)",
    Red: "rgb(255,0,0)",
    Blue: "rgb(0,0,255)",
} as const;

type Color = (typeof Color)[keyof typeof Color];

const tailwindColors = {
    [Color.Gray]: "bg-[rgb(127,127,127)]",
    [Color.Orange]: "bg-[rgb(255,166,0)]",
    [Color.Green]: "bg-[rgb(0,255,0)]",
    [Color.Yellow]: "bg-[rgb(255,255,0)]",
    [Color.White]: "bg-[rgb(255,255,255)]",
    [Color.Red]: "bg-[rgb(255,0,0)]",
    [Color.Blue]: "bg-[rgb(0,0,255)]",
} as const;
const tailwindHoverColors = {
    [Color.Gray]: "hover:bg-[rgb(83,83,83)]",
    [Color.Orange]: "hover:bg-[rgb(210,144,0)]",
    [Color.Green]: "hover:bg-[rgb(0,210,0)]",
    [Color.Yellow]: "hover:bg-[rgb(210,210,0)]",
    [Color.White]: "hover:bg-[rgb(210,210,210)]",
    [Color.Red]: "hover:bg-[rgb(210,0,0)]",
    [Color.Blue]: "hover:bg-[rgb(0,0,210)]",
} as const;

const validColors: Color[] = [
    Color.Orange,
    Color.Green,
    Color.Yellow,
    Color.White,
    Color.Red,
    Color.Blue,
];

const nonWhiteColors: Color[] = [
    Color.Red,
    Color.Green,
    Color.Orange,
    Color.Blue,
    Color.Yellow,
];

const colorAxes = {
    [Color.White]: [0, -1, 0],
    [Color.Red]: [-1, 0, 0],
    [Color.Green]: [0, 0, 1],
    [Color.Orange]: [1, 0, 0],
    [Color.Blue]: [0, 0, -1],
    [Color.Yellow]: [0, 1, 0],
    [Color.Gray]: [0, 0, 0],
};

const axisToColor = Object.fromEntries(
    Object.entries(colorAxes).map(([k, v]) => [v.join(","), k]),
) as Record<string, Color>;

function rotateColor(color: Color, rotation: CubeRotation) {
    return axisToColor[
        multiply(rotation, colorAxes[color]).toArray().join(",")
    ];
}

export {
    Color,
    tailwindColors,
    tailwindHoverColors,
    validColors,
    nonWhiteColors,
    rotateColor,
};
