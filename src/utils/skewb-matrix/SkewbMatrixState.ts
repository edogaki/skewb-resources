/** biome-ignore-all lint/complexity/useSimpleNumberKeys: binary representation for keys is simpler */
import { mod } from "../math";
import { Color } from "../renderer/color";
import type { SkewbRendererState } from "../renderer/skewbRenderer";
import type {
    RubikskewbAlg,
    RubikskewbTurn,
    WCAAlg,
    WCATurn,
} from "../solver/alg";
import type { Tuple } from "../solver/helperTypes";
import {
    type Axis,
    CubeRotation,
    type DiagonalAxis,
    invertAxis,
    invertRotation,
    mask1,
    mask2,
    mask3,
    mask11,
    mask21,
    mask22,
    mask31,
    mask112131,
    multiplyRotationByAxis,
    multiplyRotations,
    rotateAroundAxis,
    rotateAroundDiagonalAxis,
    rotateAroundDiagonalAxisLookup,
    rotationToDiagAxis,
} from "./matrixMath";

export const CornerIndex = [0, 1, 2, 3, 4, 5, 6, 7] as const;
export type CornerIndex = (typeof CornerIndex)[number];
export const CenterIndex = [0, 1, 2, 3, 4, 5] as const;
export type CenterIndex = (typeof CenterIndex)[number];

const baseCornerPieceColors = {
    0: [Color.White, Color.Red, Color.Green],
    1: [Color.White, Color.Green, Color.Orange],
    2: [Color.White, Color.Orange, Color.Blue],
    3: [Color.White, Color.Blue, Color.Red],
    4: [Color.Yellow, Color.Green, Color.Red],
    5: [Color.Yellow, Color.Orange, Color.Green],
    6: [Color.Yellow, Color.Blue, Color.Orange],
    7: [Color.Yellow, Color.Red, Color.Blue],
} as const as Record<CornerIndex, Tuple<Color, 3>>;

const baseCenterPieceColors = {
    0: Color.White,
    1: Color.Red,
    2: Color.Green,
    3: Color.Orange,
    4: Color.Blue,
    5: Color.Yellow,
} as const as Record<CenterIndex, Color>;

export const defaultCornerPieces: Tuple<CubeRotation, 8> = [
    rotateAroundAxis(0b000100, 0),
    rotateAroundAxis(0b000100, 3),
    rotateAroundAxis(0b000100, 2),
    rotateAroundAxis(0b000100, 1),
    multiplyRotations(
        rotateAroundAxis(0b000100, 3),
        rotateAroundAxis(0b010000, 2),
    ),
    multiplyRotations(
        rotateAroundAxis(0b000100, 2),
        rotateAroundAxis(0b010000, 2),
    ),
    multiplyRotations(
        rotateAroundAxis(0b000100, 1),
        rotateAroundAxis(0b010000, 2),
    ),
    multiplyRotations(
        rotateAroundAxis(0b000100, 0),
        rotateAroundAxis(0b010000, 2),
    ),
];

export const defaultCenterPieces: Tuple<Axis, 6> = [
    0b000100, 0b010000, 0b000001, 0b110000, 0b000011, 0b001100,
] as const;

const rendererStateCornerIndices = {
    0b010101: [17, 20, 6],
    0b110101: [18, 5, 1],
    0b110111: [15, 0, 26],
    0b010111: [16, 25, 21],
    0b011101: [11, 7, 23],
    0b111101: [10, 2, 8],
    0b111111: [13, 27, 3],
    0b011111: [12, 22, 28],
} as const as Record<DiagonalAxis, number[]>;

const rendererStateCenterIndices = {
    0b000100: 19,
    0b010000: 24,
    0b000001: 9,
    0b110000: 4,
    0b000011: 29,
    0b001100: 14,
} as const as Record<Axis, number>;

const wcaTurnToStateTurn: Partial<Record<WCATurn, [DiagonalAxis, 0 | 1 | 2]>> =
    {
        U: [0b110111, 2],
        "U'": [0b110111, 1],
        R: [0b011111, 2],
        "R'": [0b011111, 1],
        L: [0b111101, 2],
        "L'": [0b111101, 1],
        B: [0b111111, 2],
        "B'": [0b111111, 1],
    };
const wcaTurnToStateRotation: Partial<Record<WCATurn, [Axis, 0 | 1 | 2 | 3]>> =
    {
        x: [0b010000, 3],
        "x'": [0b010000, 1],
        x2: [0b010000, 2],
        y: [0b000100, 3],
        "y'": [0b000100, 1],
        y2: [0b000100, 2],
        z: [0b000001, 3],
        "z'": [0b000001, 1],
        z2: [0b000001, 2],
    };

const rubikskewbTurnToStateTurn: Partial<
    Record<RubikskewbTurn, [DiagonalAxis, 0 | 1 | 2]>
> = {
    r: [0b011111, 2],
    "r'": [0b011111, 1],
    R: [0b010111, 2],
    "R'": [0b010111, 1],
    b: [0b111111, 2],
    "b'": [0b111111, 1],
    B: [0b110111, 2],
    "B'": [0b110111, 1],
    f: [0b011101, 2],
    "f'": [0b011101, 1],
    F: [0b010101, 2],
    "F'": [0b010101, 1],
    l: [0b111101, 2],
    "l'": [0b111101, 1],
    L: [0b110101, 2],
    "L'": [0b110101, 1],
};

export const rubikskewbTurnToStateRotation: Partial<
    Record<RubikskewbTurn, [Axis, 0 | 1 | 2 | 3]>
> = {
    x: [0b010000, 3],
    "x'": [0b010000, 1],
    x2: [0b010000, 2],
    y: [0b000100, 3],
    "y'": [0b000100, 1],
    y2: [0b000100, 2],
    z: [0b000001, 3],
    "z'": [0b000001, 1],
    z2: [0b000001, 2],
};

export class SkewbMatrixState {
    cornerPieces: Tuple<CubeRotation, 8>;
    centerPieces: Tuple<Axis, 6>;
    cornerPieceColors: Record<CornerIndex, Tuple<Color, 3>>;
    centerPieceColors: Record<CenterIndex, Color>;

    constructor(
        cornerPieces?: Tuple<CubeRotation, 8>,
        centerPieces?: Tuple<Axis, 6>,
        cornerPieceColors?: Record<CornerIndex, Tuple<Color, 3>>,
        centerPieceColors?: Record<CenterIndex, Color>,
    ) {
        this.cornerPieces =
            (cornerPieces?.slice() as Tuple<CubeRotation, 8>) ??
            (defaultCornerPieces.slice() as Tuple<CubeRotation, 8>);
        this.centerPieces =
            (centerPieces?.slice() as Tuple<Axis, 6>) ??
            (defaultCenterPieces.slice() as Tuple<Axis, 6>);
        this.cornerPieceColors =
            structuredClone(cornerPieceColors) ??
            structuredClone(baseCornerPieceColors);
        this.centerPieceColors =
            structuredClone(centerPieceColors) ??
            structuredClone(baseCenterPieceColors);
    }

    applyRotation(r: CubeRotation) {
        for (let i = 0; i < this.cornerPieces.length; i++) {
            this.cornerPieces[i] = multiplyRotations(r, this.cornerPieces[i]);
        }
        for (let i = 0; i < this.centerPieces.length; i++) {
            this.centerPieces[i] = multiplyRotationByAxis(
                r,
                this.centerPieces[i],
            );
        }
    }

    rotate(axis: Axis, th: number) {
        for (let i = 0; i < this.cornerPieces.length; i++) {
            this.cornerPieces[i] = multiplyRotations(
                rotateAroundAxis(axis, th),
                this.cornerPieces[i],
            );
        }
        for (let i = 0; i < this.centerPieces.length; i++) {
            this.centerPieces[i] = multiplyRotationByAxis(
                rotateAroundAxis(axis, th),
                this.centerPieces[i],
            );
        }
        return this;
    }

    turn(diagAxis: DiagonalAxis, th: number) {
        for (let i = 0; i < this.cornerPieces.length; i++) {
            const cornerDiag =
                (this.cornerPieces[i] & mask112131) |
                ((this.cornerPieces[i] & (mask112131 >> 2)) << 2) |
                ((this.cornerPieces[i] & (mask112131 >> 4)) << 4);
            const cd1 =
                ((cornerDiag & mask11) >> 12) ^ (diagAxis & mask1) ? 1 : 0;
            const cd2 =
                ((cornerDiag & mask21) >> 8) ^ (diagAxis & mask2) ? 1 : 0;
            const cd3 =
                ((cornerDiag & mask31) >> 4) ^ (diagAxis & mask3) ? 1 : 0;
            if (cd1 + cd2 + cd3 <= 1) {
                this.cornerPieces[i] = multiplyRotations(
                    rotateAroundDiagonalAxis(diagAxis, th),
                    this.cornerPieces[i],
                );
            }
        }
        for (let i = 0; i < this.centerPieces.length; i++) {
            if (
                this.centerPieces[i] & diagAxis & mask1
                    ? (this.centerPieces[i] & mask1) ^ (diagAxis & mask1)
                    : this.centerPieces[i] & diagAxis & mask2
                      ? (this.centerPieces[i] & mask2) ^ (diagAxis & mask2)
                      : (this.centerPieces[i] & mask3) ^ (diagAxis & mask3)
            ) {
                continue;
            }
            this.centerPieces[i] = multiplyRotationByAxis(
                rotateAroundDiagonalAxis(diagAxis, th),
                this.centerPieces[i],
            );
        }
        return this;
    }

    toSkewbRendererState(): SkewbRendererState {
        const skewbRendererState = Array.from(
            { length: 30 },
            () => null,
        ) as Tuple<Color | null, 30>;
        for (let i = 0; i < this.cornerPieces.length; i++) {
            const cornerDiagAxis = rotationToDiagAxis(this.cornerPieces[i]);
            const orie =
                this.cornerPieces[i] & mask22
                    ? 0
                    : this.cornerPieces[i] & mask21
                      ? 1
                      : 2;
            for (let j = 0; j < 3; j++) {
                const cornerIndex =
                    rendererStateCornerIndices[cornerDiagAxis][j];
                skewbRendererState[cornerIndex] =
                    this.cornerPieceColors[i as CornerIndex][mod(j + orie, 3)];
            }
        }
        for (let i = 0; i < this.centerPieces.length; i++) {
            skewbRendererState[
                rendererStateCenterIndices[this.centerPieces[i]]
            ] = this.centerPieceColors[i as CenterIndex];
        }
        if (skewbRendererState.some((c) => c === null)) {
            throw new Error(
                `invalid skewb matrix state! please contact site owner and send him this message:\nskewbRendererState:${skewbRendererState}\ncornerPieces:${this.cornerPieces}\ncenterPieces:${this.centerPieces}\ncornerPieceColors:${Object.values(this.cornerPieceColors)}\ncenterPieceColors:${Object.values(this.centerPieceColors)}`,
            );
        }
        return skewbRendererState as Tuple<Color, 30>;
    }

    turnWCA(turn: WCATurn) {
        if (wcaTurnToStateTurn[turn]) {
            this.turn(...wcaTurnToStateTurn[turn]);
        } else if (wcaTurnToStateRotation[turn]) {
            this.rotate(...wcaTurnToStateRotation[turn]);
        }
        return this;
    }

    applyWCAAlg(alg: WCAAlg) {
        for (const turn of alg.turns) {
            this.turnWCA(turn);
        }
        return this;
    }

    turnRubikskewb(turn: RubikskewbTurn) {
        if (rubikskewbTurnToStateTurn[turn]) {
            this.turn(...rubikskewbTurnToStateTurn[turn]);
        } else if (rubikskewbTurnToStateRotation[turn]) {
            this.rotate(...rubikskewbTurnToStateRotation[turn]);
        }
        return this;
    }

    applyRubikskewbAlg(alg: RubikskewbAlg) {
        for (const turn of alg.turns) {
            this.turnRubikskewb(turn);
        }
        return this;
    }

    clone() {
        return new SkewbMatrixState(
            this.cornerPieces,
            this.centerPieces,
            this.cornerPieceColors,
            this.centerPieceColors,
        );
    }

    turnCornerPiece(corner: CornerIndex, th: number) {
        const cornerDiagAxis = rotationToDiagAxis(this.cornerPieces[corner]);
        this.cornerPieces[corner] = multiplyRotations(
            rotateAroundDiagonalAxisLookup[cornerDiagAxis][mod(th, 3)],
            this.cornerPieces[corner],
        );
        return this;
    }

    getLayerPieceLocations(center: CenterIndex) {
        const color = this.centerPieceColors[center];
        return {
            cornerPieceLocations: CornerIndex.filter((corner) =>
                this.cornerPieceColors[corner].includes(color),
            ),
            centerPieceLocations: [center],
        };
    }

    getL2LPieceLocations(center: CenterIndex) {
        const color = this.centerPieceColors[center];
        const oppositeColor =
            this.centerPieceColors[
                defaultCenterPieces.indexOf(
                    invertAxis(defaultCenterPieces[center]),
                ) as CenterIndex
            ];
        const cornerPieceLocations = [
            CornerIndex.find(
                (corner) => !this.cornerPieceColors[corner].includes(color),
            ),
        ];
        for (let i = 1; i < 4; i++) {
            const prevCorner = cornerPieceLocations[i - 1] as CornerIndex;
            const prevCornerColors = this.cornerPieceColors[prevCorner];
            const prevCornerCenterOppColorIndex =
                prevCornerColors.indexOf(oppositeColor);
            const commonColor =
                prevCornerColors[mod(prevCornerCenterOppColorIndex + 1, 3)];
            cornerPieceLocations.push(
                CornerIndex.find(
                    (corner) =>
                        corner !== prevCorner &&
                        !this.cornerPieceColors[corner].includes(color) &&
                        this.cornerPieceColors[corner].includes(commonColor),
                ),
            );
        }
        if (cornerPieceLocations.some((corner) => corner === undefined)) {
            throw new Error(
                `ran getL2LPieceLocations on a bad color scheme ${Object.values(this.cornerPieceColors)} ${Object.values(this.centerPieceColors)})}`,
            );
        }
        return {
            // cornerPieceLocations is sorted ccw
            cornerPieceLocations: cornerPieceLocations as CornerIndex[],
            centerPieceLocations: CenterIndex.filter(
                (center) => this.centerPieceColors[center] !== color,
            ),
        };
    }

    rotateCenterToAxis(center: CenterIndex, axis: Axis) {
        const centerCurrRotation = this.centerPieces[center];
        const rotationToExecute = CubeRotation.find(
            (r) => multiplyRotationByAxis(r, centerCurrRotation) === axis,
        );
        if (rotationToExecute === undefined) {
            throw new Error(
                "impossible error! check if matrix operations are closed",
            );
        }
        this.applyRotation(rotationToExecute);
    }

    standardizeForWCA() {
        const wrgIndex: CornerIndex = Object.values(
            this.cornerPieceColors,
        ).findIndex(
            (cArr) =>
                cArr.includes(Color.White) &&
                cArr.includes(Color.Red) &&
                cArr.includes(Color.Green),
        ) as CornerIndex;
        if (wrgIndex === undefined) return;
        this.applyRotation(invertRotation(this.cornerPieces[wrgIndex]));
    }

    generateHash() {
        return `${this.centerPieces} ${this.cornerPieces}`;
    }

    resetRotations() {
        this.cornerPieces = defaultCornerPieces.slice() as Tuple<
            CubeRotation,
            8
        >;
        this.centerPieces = defaultCenterPieces.slice() as Tuple<Axis, 6>;
    }

    setFromWCAAlg(alg: WCAAlg) {
        this.resetRotations();
        this.applyWCAAlg(alg);
    }

    setFromRubikskewbAlg(alg: RubikskewbAlg) {
        this.resetRotations();
        this.applyRubikskewbAlg(alg);
    }
}
