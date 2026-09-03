import { multiply, rotate } from "mathjs";
import type { Tuple } from "../solver/helperTypes";

/**
 * Computes sin(90 degrees * n) avoiding weirdness of floats.
 * @param n integer or float. If n is float, defaults to Math.sin
 */
const sin90 = (n: number) => {
    switch (mod(n, 4)) {
        case 0:
        case 2:
            return 0;
        case 1:
            return 1;
        case 3:
            return -1;
        default:
            return Math.sin((n * Math.PI) / 2);
    }
};

/**
 * Computes cos(90 degrees * n) avoiding weirdness of floats.
 * @param n integer or float. If n is float, defaults to Math.cos
 */
const cos90 = (n: number) => {
    switch (mod(n, 4)) {
        case 0:
            return 1;
        case 1:
        case 3:
            return 0;
        case 2:
            return -1;
        default:
            return Math.cos((n * Math.PI) / 2);
    }
};

const mod = (a: number, b: number) => ((a % b) + b) % b;

export const mask1 = 0b110000;
export const mask2 = 0b001100;
export const mask3 = 0b000011;
export const shift1 = 4;
export const shift2 = 2;
export const shift3 = 0;

// opposite axes in both Axis and DiagonalAxis must be in adjacent pairs otherwise some functions may not work (invertAxis)
export const Axis = [
    0b000001, //  [0, 0, 1],
    0b000011, //  [0, 0, -1],
    0b000100, //  [0, 1, 0],
    0b001100, //  [0, -1, 0],
    0b010000, //  [1, 0, 0],
    0b110000, //  [-1, 0, 0],
] as const;
export type Axis = (typeof Axis)[number];

export const DiagonalAxis = [
    0b010101, //  [1, 1, 1],
    0b111111, //  [-1, -1, -1],
    0b010111, //  [1, 1, -1],
    0b111101, //  [-1, -1, 1],
    0b011101, //  [1, -1, 1],
    0b110111, //  [-1, 1, -1],
    0b011111, //  [1, -1, -1],
    0b110101, //  [-1, 1, 1],
] as const;
export type DiagonalAxis = (typeof DiagonalAxis)[number];

export function invertAxis(a: Axis) {
    const index = Axis.indexOf(a);
    const base = index - (index % 2);
    return Axis[base + ((index + 1) % 2)];
}

export function invertDiagonalAxis(da: DiagonalAxis) {
    const index = DiagonalAxis.indexOf(da);
    const base = index - (index % 2);
    return DiagonalAxis[base + ((index + 1) % 2)];
}

export const mask11 = 0b110000000000000000;
export const mask12 = 0b001100000000000000;
export const mask13 = 0b000011000000000000;
export const mask21 = 0b000000110000000000;
export const mask22 = 0b000000001100000000;
export const mask23 = 0b000000000011000000;
export const mask31 = 0b000000000000110000;
export const mask32 = 0b000000000000001100;
export const mask33 = 0b000000000000000011;

export const shift11 = 16;
export const shift12 = 14;
export const shift13 = 12;
export const shift21 = 10;
export const shift22 = 8;
export const shift23 = 6;
export const shift31 = 4;
export const shift32 = 2;
export const shift33 = 0;

export const CubeRotation = [
    0b110000001100000001, 0b110000000100000011, 0b010000001100000011,
    0b010000000100000001,

    0b110000000011001100, 0b110000000001000100, 0b010000000011000100,
    0b010000000001001100,

    0b001100110000000011, 0b001100010000000001, 0b000100110000000001,
    0b000100010000000011,

    0b001100000011010000, 0b001100000001110000, 0b000100000011110000,
    0b000100000001010000,

    0b000011110000000100, 0b000011010000001100, 0b000001110000001100,
    0b000001010000000100,

    0b000011001100110000, 0b000011000100010000, 0b000001001100010000,
    0b000001000100110000,
] as const;
export type CubeRotation = (typeof CubeRotation)[number];

export function multiplyRotations(
    r1: CubeRotation,
    r2: CubeRotation,
): CubeRotation {
    // biome-ignore format: matrix
    return (
        (((r1 & mask11) * ((r2 & mask11) >> shift11) + ((r1 & mask12) * ((r2 & mask21) >> shift21) << 2) + ((r1 & mask13) * ((r2 & mask31) >> shift31) << 4)) & mask11) |
        (((r1 & mask11) * ((r2 & mask12) >> shift12) + ((r1 & mask12) * ((r2 & mask22) >> shift22) << 2) + ((r1 & mask13) * ((r2 & mask32) >> shift32) << 4)) >> 2 & mask12) |
        (((r1 & mask11) * ((r2 & mask13) >> shift13) + ((r1 & mask12) * ((r2 & mask23) >> shift23) << 2) + ((r1 & mask13) * ((r2 & mask33) >> shift33) << 4)) >> 4 & mask13) |
        (((r1 & mask21) * ((r2 & mask11) >> shift11) + ((r1 & mask22) * ((r2 & mask21) >> shift21) << 2) + ((r1 & mask23) * ((r2 & mask31) >> shift31) << 4)) & mask21) |
        (((r1 & mask21) * ((r2 & mask12) >> shift12) + ((r1 & mask22) * ((r2 & mask22) >> shift22) << 2) + ((r1 & mask23) * ((r2 & mask32) >> shift32) << 4)) >> 2 & mask22) |
        (((r1 & mask21) * ((r2 & mask13) >> shift13) + ((r1 & mask22) * ((r2 & mask23) >> shift23) << 2) + ((r1 & mask23) * ((r2 & mask33) >> shift33) << 4)) >> 4 & mask23) |
        (((r1 & mask31) * ((r2 & mask11) >> shift11) + ((r1 & mask32) * ((r2 & mask21) >> shift21) << 2) + ((r1 & mask33) * ((r2 & mask31) >> shift31) << 4)) & mask31) |
        (((r1 & mask31) * ((r2 & mask12) >> shift12) + ((r1 & mask32) * ((r2 & mask22) >> shift22) << 2) + ((r1 & mask33) * ((r2 & mask32) >> shift32) << 4)) >> 2 & mask32) |
        (((r1 & mask31) * ((r2 & mask13) >> shift13) + ((r1 & mask32) * ((r2 & mask23) >> shift23) << 2) + ((r1 & mask33) * ((r2 & mask33) >> shift33) << 4)) >> 4 & mask33)
    ) as CubeRotation;
}

export function invertRotation(r: CubeRotation): CubeRotation {
    return ((r & mask11) |
        ((r & mask21) << 4) |
        ((r & mask31) << 8) |
        ((r & mask12) >> 4) |
        (r & mask22) |
        ((r & mask32) << 4) |
        ((r & mask13) >> 8) |
        ((r & mask23) >> 4) |
        (r & mask33)) as CubeRotation;
}

export function multiplyRotationByAxis<A extends Axis | DiagonalAxis>(
    r1: CubeRotation,
    a: A,
): A {
    // biome-ignore format: matrix
    return (
        ((((r1 & mask11) >> shift11) * (a & mask1) + (((r1 & mask12) >> shift12) * (a & mask2) << 2) + (((r1 & mask13) >> shift13) * (a & mask3) << 4)) & mask1) |
        ((((r1 & mask21) >> shift21) * (a & mask1) + (((r1 & mask22) >> shift22) * (a & mask2) << 2) + (((r1 & mask23) >> shift23) * (a & mask3) << 4)) >> 2 & mask2) |
        ((((r1 & mask31) >> shift31) * (a & mask1) + (((r1 & mask32) >> shift32) * (a & mask2) << 2) + (((r1 & mask33) >> shift33) * (a & mask3) << 4)) >> 4 & mask3)
    ) as A;
}

const rotateAround100: Tuple<CubeRotation, 4> = [
    0b010000000100000001, 0b010000000011000100, 0b010000001100000011,
    0b010000000001001100,
];

export const rotateAroundAxisLookup = {} as Record<
    Axis,
    Tuple<CubeRotation, 4>
>;
for (const ax of Axis) {
    const axTo100 = CubeRotation.find(
        (r) => multiplyRotationByAxis(r, ax) === 0b010000,
    );
    if (axTo100 === undefined) {
        // impossible, only for typescript
        throw new Error("impossible error! please contact site owner");
    }
    rotateAroundAxisLookup[ax] = rotateAround100.map((r) =>
        multiplyRotations(
            invertRotation(axTo100),
            multiplyRotations(r, axTo100),
        ),
    ) as Tuple<CubeRotation, 4>;
}

export function rotateAroundAxis(ax: Axis, th: number) {
    return rotateAroundAxisLookup[ax][mod(th, 4)];
}

const rotateAround111: Tuple<CubeRotation, 3> = [
    0b010000000100000001, 0b000001010000000100, 0b000100000001010000,
];

export const rotateAroundDiagonalAxisLookup = {} as Record<
    DiagonalAxis,
    Tuple<CubeRotation, 3>
>;
for (const dax of DiagonalAxis) {
    const daxTo111 = CubeRotation.find(
        (r) => multiplyRotationByAxis(r, dax) === 0b010101,
    );
    if (daxTo111 === undefined) {
        // impossible, only for typescript
        throw new Error("impossible error! please contact site owner");
    }
    rotateAroundDiagonalAxisLookup[dax] = rotateAround111.map((r) =>
        multiplyRotations(
            invertRotation(daxTo111),
            multiplyRotations(r, daxTo111),
        ),
    ) as Tuple<CubeRotation, 3>;
}

export function rotateAroundDiagonalAxis(dax: DiagonalAxis, th: number) {
    return rotateAroundDiagonalAxisLookup[dax][mod(th, 3)];
}

export function prettyPrint(r: CubeRotation | Axis | DiagonalAxis) {
    const bitsLookup = {
        3: "-1",
        1: " 1",
        0: " 0",
    } as const;

    if (r >> 6 === 0) {
        // Axis or DiagonalAxis
        return [
            bitsLookup[((r & mask1) >> shift1) as 3 | 1 | 0],
            bitsLookup[((r & mask2) >> shift2) as 3 | 1 | 0],
            bitsLookup[((r & mask3) >> shift3) as 3 | 1 | 0],
        ].toString();
    }
    // CubeRotation
    return [
        [
            bitsLookup[((r & mask11) >> shift11) as 3 | 1 | 0],
            bitsLookup[((r & mask12) >> shift12) as 3 | 1 | 0],
            bitsLookup[((r & mask13) >> shift13) as 3 | 1 | 0],
        ].toString(),
        [
            bitsLookup[((r & mask21) >> shift21) as 3 | 1 | 0],
            bitsLookup[((r & mask22) >> shift22) as 3 | 1 | 0],
            bitsLookup[((r & mask23) >> shift23) as 3 | 1 | 0],
        ].toString(),
        [
            bitsLookup[((r & mask31) >> shift31) as 3 | 1 | 0],
            bitsLookup[((r & mask32) >> shift32) as 3 | 1 | 0],
            bitsLookup[((r & mask33) >> shift33) as 3 | 1 | 0],
        ].toString(),
    ];
}

export const mask112131 = 0b110000110000110000;

export function rotationToDiagAxis(r: CubeRotation) {
    const cornerDiag =
        (r & mask112131) |
        ((r & (mask112131 >> 2)) << 2) |
        ((r & (mask112131 >> 4)) << 4);
    const cornerDiagAxis = (((cornerDiag & mask11) >> 12) |
        ((cornerDiag & mask21) >> 8) |
        ((cornerDiag & mask31) >> 4)) as DiagonalAxis;
    return cornerDiagAxis;
}

export function rotationToAxis(r: CubeRotation) {
    return (((r & mask11) >> 12) |
        ((r & mask21) >> 8) |
        ((r & mask31) >> 4)) as Axis;
}
