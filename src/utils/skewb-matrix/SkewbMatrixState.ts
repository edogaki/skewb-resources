/** biome-ignore-all lint/complexity/useSimpleNumberKeys: binary representation for keys is simpler */
import { mod } from "../math";
import { Color } from "../renderer/color";
import type { SkewbRendererState } from "../renderer/skewbRenderer";
import { WCAAlg, WCATurn } from "../solver/alg";
import type { Tuple } from "../solver/helperTypes";
import {
    type Axis,
    type CubeRotation,
    type DiagonalAxis,
    mask1,
    mask2,
    mask3,
    mask11,
    mask12,
    mask21,
    mask22,
    mask31,
    multiplyRotations,
    rotateAroundAxis,
    rotateAroundDiagonalAxis,
} from "./matrixMath";

const CornerPiece = [0, 1, 2, 3, 4, 5, 6, 7] as const;
type CornerPiece = (typeof CornerPiece)[number];
const CenterPiece = [0, 1, 2, 3, 4, 5] as const;
type CenterPiece = (typeof CenterPiece)[number];

const baseCornerPieceColors = {
    0: [Color.White, Color.Red, Color.Green],
    1: [Color.White, Color.Green, Color.Orange],
    2: [Color.White, Color.Orange, Color.Blue],
    3: [Color.White, Color.Blue, Color.Red],
    4: [Color.Yellow, Color.Green, Color.Red],
    5: [Color.Yellow, Color.Orange, Color.Green],
    6: [Color.Yellow, Color.Blue, Color.Orange],
    7: [Color.Yellow, Color.Red, Color.Blue],
} as const as Record<CornerPiece, Tuple<Color, 3>>;

const baseCenterPieceColors = {
    0: Color.White,
    1: Color.Red,
    2: Color.Green,
    3: Color.Orange,
    4: Color.Blue,
    5: Color.Yellow,
} as const as Record<CenterPiece, Color>;

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

const cornerPieceDiagonalAxis: DiagonalAxis[] = [
    0b010101, 0b110101, 0b110111, 0b010111, 0b011101, 0b111101, 0b111111,
    0b011111,
];

const centerPieceAxis: Axis[] = [
    0b000100, 0b010000, 0b000001, 0b110000, 0b000011, 0b001100,
];

export const defaultCenterPieces: Tuple<CubeRotation, 6> = [
    rotateAroundAxis(0b000001, 1),
    rotateAroundAxis(0b000100, 0),
    rotateAroundAxis(0b000100, 3),
    rotateAroundAxis(0b000100, 2),
    rotateAroundAxis(0b000100, 1),
    rotateAroundAxis(0b000001, 3),
];

const mask112131 = 0b110000110000110000;

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

export class SkewbMatrixState {
    cornerPieces: Tuple<CubeRotation, 8>;
    centerPieces: Tuple<CubeRotation, 6>;
    cornerPieceColors: Record<CornerPiece, Tuple<Color, 3>>;
    centerPieceColors: Record<CenterPiece, Color>;

    constructor(
        cornerPieces?: Tuple<CubeRotation, 8>,
        centerPieces?: Tuple<CubeRotation, 6>,
        cornerPieceColors?: Record<CornerPiece, Tuple<Color, 3>>,
        centerPieceColors?: Record<CenterPiece, Color>,
    ) {
        this.cornerPieces =
            cornerPieces ??
            (defaultCornerPieces.slice() as Tuple<CubeRotation, 8>);
        this.centerPieces =
            centerPieces ??
            (defaultCenterPieces.slice() as Tuple<CubeRotation, 6>);
        this.cornerPieceColors =
            cornerPieceColors ?? structuredClone(baseCornerPieceColors);
        this.centerPieceColors =
            centerPieceColors ?? structuredClone(baseCenterPieceColors);
    }

    rotate(axis: Axis, th: number) {
        for (let i = 0; i < this.cornerPieces.length; i++) {
            this.cornerPieces[i] = multiplyRotations(
                rotateAroundAxis(axis, th),
                this.cornerPieces[i],
            );
        }
        for (let i = 0; i < this.centerPieces.length; i++) {
            this.centerPieces[i] = multiplyRotations(
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
            console.log(i, cornerDiag.toString(2).padStart(18, "0"));
            const cd1 =
                ((cornerDiag & mask11) >> 12) ^ (diagAxis & mask1) ? 1 : 0;
            const cd2 =
                ((cornerDiag & mask21) >> 8) ^ (diagAxis & mask2) ? 1 : 0;
            const cd3 =
                ((cornerDiag & mask31) >> 4) ^ (diagAxis & mask3) ? 1 : 0;
            console.log({ cd1, cd2, cd3 });
            if (cd1 + cd2 + cd3 <= 1) {
                this.cornerPieces[i] = multiplyRotations(
                    rotateAroundDiagonalAxis(diagAxis, th),
                    this.cornerPieces[i],
                );
            }
        }
        for (let i = 0; i < this.centerPieces.length; i++) {
            if (
                ((this.centerPieces[i] & mask11) >> 12) & diagAxis & mask1
                    ? ((this.centerPieces[i] & mask11) >> 12) ^
                      (diagAxis & mask1)
                    : ((this.centerPieces[i] & mask21) >> 8) & diagAxis & mask2
                      ? ((this.centerPieces[i] & mask21) >> 8) ^
                        (diagAxis & mask2)
                      : ((this.centerPieces[i] & mask31) >> 4) ^
                        (diagAxis & mask3)
            ) {
                continue;
            }
            this.centerPieces[i] = multiplyRotations(
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
            const cornerDiag =
                (this.cornerPieces[i] & mask112131) |
                ((this.cornerPieces[i] & (mask112131 >> 2)) << 2) |
                ((this.cornerPieces[i] & (mask112131 >> 4)) << 4);
            const cornerDiagAxis = (((cornerDiag & mask11) >> 12) |
                ((cornerDiag & mask21) >> 8) |
                ((cornerDiag & mask31) >> 4)) as DiagonalAxis;
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
                    this.cornerPieceColors[i as CornerPiece][mod(j + orie, 3)];
            }
        }
        for (let i = 0; i < this.centerPieces.length; i++) {
            const centerAxis = (((this.centerPieces[i] & mask11) >> 12) |
                ((this.centerPieces[i] & mask21) >> 8) |
                ((this.centerPieces[i] & mask31) >> 4)) as Axis;

            skewbRendererState[rendererStateCenterIndices[centerAxis]] =
                this.centerPieceColors[i as CenterPiece];
        }
        if (skewbRendererState.some((c) => c === null)) {
            throw new Error(
                `invalid skewb matrix state! please contact site owner and send him this message:\n${skewbRendererState} ${this.cornerPieces} ${this.centerPieces} ${Object.values(this.cornerPieceColors)} ${Object.values(this.centerPieceColors)}`,
            );
        }
        return skewbRendererState as Tuple<Color, 30>;
    }
    turnWCA(turn: WCATurn) {
        switch (turn) {
            case WCATurn.U:
                this.turn(0b110111, 2);
                break;
            case WCATurn.Uprime:
                this.turn(0b110111, 1);
                break;
            case WCATurn.R:
                this.turn(0b011111, 2);
                break;
            case WCATurn.Rprime:
                this.turn(0b011111, 1);
                break;
            case WCATurn.L:
                this.turn(0b111101, 2);
                break;
            case WCATurn.Lprime:
                this.turn(0b111101, 1);
                break;
            case WCATurn.B:
                this.turn(0b111111, 2);
                break;
            case WCATurn.Bprime:
                this.turn(0b111111, 1);
                break;
            case WCATurn.x:
                this.rotate(0b010000, 3);
                break;
            case WCATurn.xprime:
                this.rotate(0b010000, 1);
                break;
            case WCATurn.x2:
                this.rotate(0b010000, 2);
                break;
            case WCATurn.y:
                this.rotate(0b000100, 3);
                break;
            case WCATurn.yprime:
                this.rotate(0b000100, 1);
                break;
            case WCATurn.y2:
                this.rotate(0b000100, 2);
                break;
            case WCATurn.z:
                this.rotate(0b000001, 3);
                break;
            case WCATurn.zprime:
                this.rotate(0b000001, 1);
                break;
            case WCATurn.z2:
                this.rotate(0b000001, 2);
                break;
        }
        return this;
    }

    applyWCAAlg(alg: WCAAlg) {
        for (const turn of alg.turns) {
            this.turnWCA(turn);
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
}
