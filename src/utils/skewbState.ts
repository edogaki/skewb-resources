import { RubikskewbAlg, RubikskewbTurn, WCAAlg, WCATurn } from "./alg";
import type { Tuple } from "./helperTypes";
import { Color } from "./renderer/color";
import type { SkewbRendererState } from "./renderer/skewbRenderer";

export type Piece = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;
type Orientation = 0 | 1 | 2;

const CenterPiece = [8, 9, 10, 11, 12, 13] as const;
type CenterPiece = (typeof CenterPiece)[number];

export const basePieceColors = {
    0: [Color.White, Color.Red, Color.Green],
    1: [Color.White, Color.Green, Color.Orange],
    2: [Color.White, Color.Orange, Color.Blue],
    3: [Color.White, Color.Blue, Color.Red],
    4: [Color.Yellow, Color.Green, Color.Red],
    5: [Color.Yellow, Color.Orange, Color.Green],
    6: [Color.Yellow, Color.Blue, Color.Orange],
    7: [Color.Yellow, Color.Red, Color.Blue],
    8: [Color.White],
    9: [Color.Red],
    10: [Color.Green],
    11: [Color.Orange],
    12: [Color.Blue],
    13: [Color.Yellow],
} as const as Record<Piece, Color[]>;

export class SkewbState {
    perm: Tuple<Piece, 14>;
    orie: Tuple<Orientation, 14>;
    pieceColors: Record<Piece, Color[]>;
    constructor(
        perm?: Tuple<Piece, 14>,
        orie?: Tuple<Orientation, 14>,
        pieceColors?: Record<Piece, Color[]>,
    ) {
        this.perm = perm ?? [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        this.orie = orie ?? [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.pieceColors = pieceColors ?? basePieceColors;
    }
    turnWCA(turn: WCATurn) {
        switch (turn) {
            case WCATurn.U:
                [this.perm[1], this.perm[3], this.perm[6]] = [
                    this.perm[3],
                    this.perm[6],
                    this.perm[1],
                ];
                [this.orie[1], this.orie[3], this.orie[6]] = [
                    ((this.orie[3] + 1) % 3) as Orientation,
                    ((this.orie[6] + 1) % 3) as Orientation,
                    ((this.orie[1] + 1) % 3) as Orientation,
                ];
                this.orie[2] = ((this.orie[2] + 2) % 3) as Orientation;

                [this.perm[8], this.perm[11], this.perm[12]] = [
                    this.perm[12],
                    this.perm[8],
                    this.perm[11],
                ];
                [this.orie[8], this.orie[11], this.orie[12]] = [
                    this.orie[12],
                    this.orie[8],
                    this.orie[11],
                ];
                break;
            case WCATurn.Uprime:
                [this.perm[1], this.perm[3], this.perm[6]] = [
                    this.perm[6],
                    this.perm[1],
                    this.perm[3],
                ];
                [this.orie[1], this.orie[3], this.orie[6]] = [
                    ((this.orie[6] + 2) % 3) as Orientation,
                    ((this.orie[1] + 2) % 3) as Orientation,
                    ((this.orie[3] + 2) % 3) as Orientation,
                ];
                this.orie[2] = ((this.orie[2] + 1) % 3) as Orientation;

                [this.perm[8], this.perm[11], this.perm[12]] = [
                    this.perm[11],
                    this.perm[12],
                    this.perm[8],
                ];
                [this.orie[8], this.orie[11], this.orie[12]] = [
                    this.orie[11],
                    this.orie[12],
                    this.orie[8],
                ];
                break;
            case WCATurn.R:
                [this.perm[3], this.perm[4], this.perm[6]] = [
                    this.perm[4],
                    this.perm[6],
                    this.perm[3],
                ];
                [this.orie[3], this.orie[4], this.orie[6]] = [
                    ((this.orie[4] + 1) % 3) as Orientation,
                    ((this.orie[6] + 1) % 3) as Orientation,
                    ((this.orie[3] + 1) % 3) as Orientation,
                ];
                this.orie[7] = ((this.orie[7] + 2) % 3) as Orientation;

                [this.perm[9], this.perm[12], this.perm[13]] = [
                    this.perm[13],
                    this.perm[9],
                    this.perm[12],
                ];
                [this.orie[9], this.orie[12], this.orie[13]] = [
                    this.orie[9],
                    this.orie[12],
                    this.orie[13],
                ];
                break;
            case WCATurn.Rprime:
                [this.perm[3], this.perm[4], this.perm[6]] = [
                    this.perm[6],
                    this.perm[3],
                    this.perm[4],
                ];
                [this.orie[3], this.orie[4], this.orie[6]] = [
                    ((this.orie[6] + 2) % 3) as Orientation,
                    ((this.orie[3] + 2) % 3) as Orientation,
                    ((this.orie[4] + 2) % 3) as Orientation,
                ];
                this.orie[7] = ((this.orie[7] + 1) % 3) as Orientation;

                [this.perm[9], this.perm[12], this.perm[13]] = [
                    this.perm[12],
                    this.perm[13],
                    this.perm[9],
                ];
                [this.orie[9], this.orie[12], this.orie[13]] = [
                    this.orie[12],
                    this.orie[13],
                    this.orie[9],
                ];
                break;
            case WCATurn.L:
                [this.perm[1], this.perm[4], this.perm[6]] = [
                    this.perm[6],
                    this.perm[1],
                    this.perm[4],
                ];
                [this.orie[1], this.orie[4], this.orie[6]] = [
                    ((this.orie[6] + 1) % 3) as Orientation,
                    ((this.orie[1] + 1) % 3) as Orientation,
                    ((this.orie[4] + 1) % 3) as Orientation,
                ];
                this.orie[5] = ((this.orie[5] + 2) % 3) as Orientation;

                [this.perm[10], this.perm[11], this.perm[13]] = [
                    this.perm[11],
                    this.perm[13],
                    this.perm[10],
                ];
                [this.orie[10], this.orie[11], this.orie[13]] = [
                    this.orie[11],
                    this.orie[13],
                    this.orie[10],
                ];
                break;
            case WCATurn.Lprime:
                [this.perm[1], this.perm[4], this.perm[6]] = [
                    this.perm[4],
                    this.perm[6],
                    this.perm[1],
                ];
                [this.orie[1], this.orie[4], this.orie[6]] = [
                    ((this.orie[4] + 2) % 3) as Orientation,
                    ((this.orie[6] + 2) % 3) as Orientation,
                    ((this.orie[1] + 2) % 3) as Orientation,
                ];
                this.orie[5] = ((this.orie[5] + 1) % 3) as Orientation;

                [this.perm[10], this.perm[11], this.perm[13]] = [
                    this.perm[13],
                    this.perm[10],
                    this.perm[11],
                ];
                [this.orie[10], this.orie[11], this.orie[13]] = [
                    this.orie[13],
                    this.orie[10],
                    this.orie[11],
                ];
                break;
            case WCATurn.B:
                [this.perm[2], this.perm[5], this.perm[7]] = [
                    this.perm[7],
                    this.perm[2],
                    this.perm[5],
                ];
                [this.orie[2], this.orie[5], this.orie[7]] = [
                    ((this.orie[7] + 1) % 3) as Orientation,
                    ((this.orie[2] + 1) % 3) as Orientation,
                    ((this.orie[5] + 1) % 3) as Orientation,
                ];
                this.orie[6] = ((this.orie[6] + 2) % 3) as Orientation;

                [this.perm[11], this.perm[12], this.perm[13]] = [
                    this.perm[12],
                    this.perm[13],
                    this.perm[11],
                ];
                [this.orie[11], this.orie[12], this.orie[13]] = [
                    this.orie[12],
                    this.orie[13],
                    this.orie[11],
                ];
                break;
            case WCATurn.Bprime:
                [this.perm[2], this.perm[5], this.perm[7]] = [
                    this.perm[5],
                    this.perm[7],
                    this.perm[2],
                ];
                [this.orie[2], this.orie[5], this.orie[7]] = [
                    ((this.orie[5] + 2) % 3) as Orientation,
                    ((this.orie[7] + 2) % 3) as Orientation,
                    ((this.orie[2] + 2) % 3) as Orientation,
                ];
                this.orie[6] = ((this.orie[6] + 1) % 3) as Orientation;

                [this.perm[11], this.perm[12], this.perm[13]] = [
                    this.perm[13],
                    this.perm[11],
                    this.perm[12],
                ];
                [this.orie[11], this.orie[12], this.orie[13]] = [
                    this.orie[13],
                    this.orie[11],
                    this.orie[12],
                ];
                break;
            case WCATurn.x:
                [this.perm[0], this.perm[4], this.perm[7], this.perm[3]] = [
                    this.perm[4],
                    this.perm[7],
                    this.perm[3],
                    this.perm[0],
                ];
                [this.orie[0], this.orie[4], this.orie[7], this.orie[3]] = [
                    ((this.orie[4] + 1) % 3) as Orientation,
                    ((this.orie[7] + 2) % 3) as Orientation,
                    ((this.orie[3] + 1) % 3) as Orientation,
                    ((this.orie[0] + 2) % 3) as Orientation,
                ];
                [this.perm[1], this.perm[5], this.perm[6], this.perm[2]] = [
                    this.perm[5],
                    this.perm[6],
                    this.perm[2],
                    this.perm[1],
                ];
                [this.orie[1], this.orie[5], this.orie[6], this.orie[2]] = [
                    ((this.orie[5] + 2) % 3) as Orientation,
                    ((this.orie[6] + 1) % 3) as Orientation,
                    ((this.orie[2] + 2) % 3) as Orientation,
                    ((this.orie[1] + 1) % 3) as Orientation,
                ];

                [this.perm[8], this.perm[10], this.perm[13], this.perm[12]] = [
                    this.perm[10],
                    this.perm[13],
                    this.perm[12],
                    this.perm[8],
                ];
                [this.orie[8], this.orie[10], this.orie[13], this.orie[12]] = [
                    this.orie[10],
                    this.orie[13],
                    this.orie[12],
                    this.orie[8],
                ];
                break;
            case WCATurn.xprime:
                [this.perm[0], this.perm[4], this.perm[7], this.perm[3]] = [
                    this.perm[3],
                    this.perm[0],
                    this.perm[4],
                    this.perm[7],
                ];
                [this.orie[0], this.orie[4], this.orie[7], this.orie[3]] = [
                    ((this.orie[3] + 1) % 3) as Orientation,
                    ((this.orie[0] + 2) % 3) as Orientation,
                    ((this.orie[4] + 1) % 3) as Orientation,
                    ((this.orie[7] + 2) % 3) as Orientation,
                ];
                [this.perm[1], this.perm[5], this.perm[6], this.perm[2]] = [
                    this.perm[2],
                    this.perm[1],
                    this.perm[5],
                    this.perm[6],
                ];
                [this.orie[1], this.orie[5], this.orie[6], this.orie[2]] = [
                    ((this.orie[2] + 2) % 3) as Orientation,
                    ((this.orie[1] + 1) % 3) as Orientation,
                    ((this.orie[5] + 2) % 3) as Orientation,
                    ((this.orie[6] + 1) % 3) as Orientation,
                ];

                [this.perm[8], this.perm[10], this.perm[13], this.perm[12]] = [
                    this.perm[12],
                    this.perm[8],
                    this.perm[10],
                    this.perm[13],
                ];
                [this.orie[8], this.orie[10], this.orie[13], this.orie[12]] = [
                    this.orie[12],
                    this.orie[8],
                    this.orie[10],
                    this.orie[13],
                ];
                break;
            case WCATurn.y:
                [this.perm[0], this.perm[3], this.perm[2], this.perm[1]] = [
                    this.perm[3],
                    this.perm[2],
                    this.perm[1],
                    this.perm[0],
                ];
                [this.orie[0], this.orie[3], this.orie[2], this.orie[1]] = [
                    this.orie[3],
                    this.orie[2],
                    this.orie[1],
                    this.orie[0],
                ];
                [this.perm[4], this.perm[7], this.perm[6], this.perm[5]] = [
                    this.perm[7],
                    this.perm[6],
                    this.perm[5],
                    this.perm[4],
                ];
                [this.orie[4], this.orie[7], this.orie[6], this.orie[5]] = [
                    this.orie[7],
                    this.orie[6],
                    this.orie[5],
                    this.orie[4],
                ];

                [this.perm[9], this.perm[12], this.perm[11], this.perm[10]] = [
                    this.perm[12],
                    this.perm[11],
                    this.perm[10],
                    this.perm[9],
                ];
                [this.orie[9], this.orie[12], this.orie[11], this.orie[10]] = [
                    this.orie[12],
                    this.orie[11],
                    this.orie[10],
                    this.orie[9],
                ];
                break;
            case WCATurn.yprime:
                [this.perm[0], this.perm[3], this.perm[2], this.perm[1]] = [
                    this.perm[1],
                    this.perm[0],
                    this.perm[3],
                    this.perm[2],
                ];
                [this.orie[0], this.orie[3], this.orie[2], this.orie[1]] = [
                    this.orie[1],
                    this.orie[0],
                    this.orie[3],
                    this.orie[2],
                ];
                [this.perm[4], this.perm[7], this.perm[6], this.perm[5]] = [
                    this.perm[5],
                    this.perm[4],
                    this.perm[7],
                    this.perm[6],
                ];
                [this.orie[4], this.orie[7], this.orie[6], this.orie[5]] = [
                    this.orie[5],
                    this.orie[4],
                    this.orie[7],
                    this.orie[6],
                ];

                [this.perm[9], this.perm[12], this.perm[11], this.perm[10]] = [
                    this.perm[10],
                    this.perm[9],
                    this.perm[12],
                    this.perm[11],
                ];
                [this.orie[9], this.orie[12], this.orie[11], this.orie[10]] = [
                    this.orie[10],
                    this.orie[9],
                    this.orie[12],
                    this.orie[11],
                ];
                break;
            // got too lazy lmao (write direct implementation of this in the future maybe?)
            case WCATurn.z:
                this.applyWCAAlg(new WCAAlg("x y x'"));
                break;
            case WCATurn.zprime:
                this.applyWCAAlg(new WCAAlg("x y' x'"));
                break;
            case WCATurn.x2:
                this.applyWCAAlg(new WCAAlg("x x"));
                break;
            case WCATurn.y2:
                this.applyWCAAlg(new WCAAlg("y y"));
                break;
            case WCATurn.z2:
                this.applyWCAAlg(new WCAAlg("z z"));
                break;
        }
        return this;
    }

    turnRubikskewb(turn: RubikskewbTurn) {
        switch (turn) {
            case RubikskewbTurn.R:
                [this.perm[0], this.perm[2], this.perm[7]] = [
                    this.perm[7],
                    this.perm[0],
                    this.perm[2],
                ];
                [this.orie[0], this.orie[2], this.orie[7]] = [
                    ((this.orie[7] + 1) % 3) as Orientation,
                    ((this.orie[0] + 1) % 3) as Orientation,
                    ((this.orie[2] + 1) % 3) as Orientation,
                ];
                this.orie[3] = ((this.orie[3] + 2) % 3) as Orientation;

                [this.perm[8], this.perm[9], this.perm[12]] = [
                    this.perm[9],
                    this.perm[12],
                    this.perm[8],
                ];
                [this.orie[8], this.orie[9], this.orie[12]] = [
                    this.orie[9],
                    this.orie[12],
                    this.orie[8],
                ];
                break;
            case RubikskewbTurn.Rprime:
                [this.perm[0], this.perm[2], this.perm[7]] = [
                    this.perm[2],
                    this.perm[7],
                    this.perm[0],
                ];
                [this.orie[0], this.orie[2], this.orie[7]] = [
                    ((this.orie[2] + 2) % 3) as Orientation,
                    ((this.orie[7] + 2) % 3) as Orientation,
                    ((this.orie[0] + 2) % 3) as Orientation,
                ];
                this.orie[3] = ((this.orie[3] + 1) % 3) as Orientation;

                [this.perm[8], this.perm[9], this.perm[12]] = [
                    this.perm[12],
                    this.perm[8],
                    this.perm[9],
                ];
                [this.orie[8], this.orie[9], this.orie[12]] = [
                    this.orie[12],
                    this.orie[8],
                    this.orie[9],
                ];
                break;
            case RubikskewbTurn.r:
                this.turnWCA(WCATurn.R);
                break;
            case RubikskewbTurn.rprime:
                this.turnWCA(WCATurn.Rprime);
                break;
            case RubikskewbTurn.B:
                this.turnWCA(WCATurn.U);
                break;
            case RubikskewbTurn.Bprime:
                this.turnWCA(WCATurn.Uprime);
                break;
            case RubikskewbTurn.b:
                this.turnWCA(WCATurn.B);
                break;
            case RubikskewbTurn.bprime:
                this.turnWCA(WCATurn.Bprime);
                break;
            case RubikskewbTurn.x:
                this.turnWCA(WCATurn.x);
                break;
            case RubikskewbTurn.xprime:
                this.turnWCA(WCATurn.xprime);
                break;
            case RubikskewbTurn.y:
                this.turnWCA(WCATurn.y);
                break;
            case RubikskewbTurn.yprime:
                this.turnWCA(WCATurn.yprime);
                break;
            case RubikskewbTurn.z:
                this.turnWCA(WCATurn.z);
                break;
            case RubikskewbTurn.zprime:
                this.turnWCA(WCATurn.zprime);
                break;
            case RubikskewbTurn.x2:
                this.applyWCAAlg(new WCAAlg("x x"));
                break;
            case RubikskewbTurn.y2:
                this.applyWCAAlg(new WCAAlg("y y"));
                break;
            case RubikskewbTurn.z2:
                this.applyWCAAlg(new WCAAlg("z z"));
                break;

            // Only for parsing user input. Not to be used for alg search (until proper implementation is made)
            case RubikskewbTurn.L:
                this.applyRubikskewbAlg(new RubikskewbAlg("r y x'"));
                break;
            case RubikskewbTurn.Lprime:
                this.applyRubikskewbAlg(new RubikskewbAlg("x y' r'"));
                break;
            case RubikskewbTurn.l:
                this.turnWCA(WCATurn.L);
                break;
            case RubikskewbTurn.lprime:
                this.turnWCA(WCATurn.Lprime);
                break;
            case RubikskewbTurn.F:
                this.applyRubikskewbAlg(new RubikskewbAlg("b x y"));
                break;
            case RubikskewbTurn.Fprime:
                this.applyRubikskewbAlg(new RubikskewbAlg("y' x' b'"));
                break;
            case RubikskewbTurn.f:
                this.applyRubikskewbAlg(new RubikskewbAlg("B y' x"));
                break;
            case RubikskewbTurn.fprime:
                this.applyRubikskewbAlg(new RubikskewbAlg("x' y B'"));
                break;

            case RubikskewbTurn.R2:
                this.turnRubikskewb(RubikskewbTurn.R);
                break;
            case RubikskewbTurn.B2:
                this.turnRubikskewb(RubikskewbTurn.B);
                break;
            case RubikskewbTurn.r2:
                this.turnRubikskewb(RubikskewbTurn.r);
                break;
            case RubikskewbTurn.b2:
                this.turnRubikskewb(RubikskewbTurn.b);
                break;
            case RubikskewbTurn.L2:
                this.turnRubikskewb(RubikskewbTurn.L);
                break;
            case RubikskewbTurn.F2:
                this.turnRubikskewb(RubikskewbTurn.F);
                break;
            case RubikskewbTurn.l2:
                this.turnRubikskewb(RubikskewbTurn.l);
                break;
            case RubikskewbTurn.f2:
                this.turnRubikskewb(RubikskewbTurn.f);
                break;
            case RubikskewbTurn.R2prime:
                this.turnRubikskewb(RubikskewbTurn.R);
                break;
            case RubikskewbTurn.B2prime:
                this.turnRubikskewb(RubikskewbTurn.B);
                break;
            case RubikskewbTurn.r2prime:
                this.turnRubikskewb(RubikskewbTurn.r);
                break;
            case RubikskewbTurn.b2prime:
                this.turnRubikskewb(RubikskewbTurn.b);
                break;
            case RubikskewbTurn.L2prime:
                this.turnRubikskewb(RubikskewbTurn.L);
                break;
            case RubikskewbTurn.F2prime:
                this.turnRubikskewb(RubikskewbTurn.F);
                break;
            case RubikskewbTurn.l2prime:
                this.turnRubikskewb(RubikskewbTurn.l);
                break;
            case RubikskewbTurn.f2prime:
                this.turnRubikskewb(RubikskewbTurn.f);
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

    applyRubikskewbAlg(alg: RubikskewbAlg) {
        for (const turn of alg.turns) {
            this.turnRubikskewb(turn);
        }
        return this;
    }

    toSkewbRendererState(): SkewbRendererState {
        return [
            // L (Orange) Faces (0-4)
            this.pieceColors[this.perm[2] as Piece][(1 + this.orie[2]) % 3],
            this.pieceColors[this.perm[1] as Piece][(2 + this.orie[1]) % 3],
            this.pieceColors[this.perm[5] as Piece][(1 + this.orie[5]) % 3],
            this.pieceColors[this.perm[6] as Piece][(2 + this.orie[6]) % 3],
            this.pieceColors[this.perm[11] as Piece][0],

            // F (Green) Faces (5-9)
            this.pieceColors[this.perm[1] as Piece][(1 + this.orie[1]) % 3],
            this.pieceColors[this.perm[0] as Piece][(2 + this.orie[0]) % 3],
            this.pieceColors[this.perm[4] as Piece][(1 + this.orie[4]) % 3],
            this.pieceColors[this.perm[5] as Piece][(2 + this.orie[5]) % 3],
            this.pieceColors[this.perm[10] as Piece][0],

            // D (Yellow) Faces (10-14)
            this.pieceColors[this.perm[5] as Piece][(0 + this.orie[5]) % 3],
            this.pieceColors[this.perm[4] as Piece][(0 + this.orie[4]) % 3],
            this.pieceColors[this.perm[7] as Piece][(0 + this.orie[7]) % 3],
            this.pieceColors[this.perm[6] as Piece][(0 + this.orie[6]) % 3],
            this.pieceColors[this.perm[13] as Piece][0],

            // U (White) Faces (15-19)
            this.pieceColors[this.perm[2] as Piece][(0 + this.orie[2]) % 3],
            this.pieceColors[this.perm[3] as Piece][(0 + this.orie[3]) % 3],
            this.pieceColors[this.perm[0] as Piece][(0 + this.orie[0]) % 3],
            this.pieceColors[this.perm[1] as Piece][(0 + this.orie[1]) % 3],
            this.pieceColors[this.perm[8] as Piece][0],

            // R (Red) Faces (20-24)
            this.pieceColors[this.perm[0] as Piece][(1 + this.orie[0]) % 3],
            this.pieceColors[this.perm[3] as Piece][(2 + this.orie[3]) % 3],
            this.pieceColors[this.perm[7] as Piece][(1 + this.orie[7]) % 3],
            this.pieceColors[this.perm[4] as Piece][(2 + this.orie[4]) % 3],
            this.pieceColors[this.perm[9] as Piece][0],

            // B (Blue) Faces (25-29)
            this.pieceColors[this.perm[3] as Piece][(1 + this.orie[3]) % 3],
            this.pieceColors[this.perm[2] as Piece][(2 + this.orie[2]) % 3],
            this.pieceColors[this.perm[6] as Piece][(1 + this.orie[6]) % 3],
            this.pieceColors[this.perm[7] as Piece][(2 + this.orie[7]) % 3],
            this.pieceColors[this.perm[12] as Piece][0],
        ];
    }

    fromSkewbRendererState(
        skewbRendererState: SkewbRendererState,
        useSameColorScheme: boolean,
    ) {
        const pieceColorsReverseMap = new Map<string, [Piece, Orientation]>();

        for (const p in basePieceColors) {
            const k = Number(p) as Piece;
            const colors = [...this.pieceColors[k]];
            for (let i = 0; i < this.pieceColors[k].length; i++) {
                pieceColorsReverseMap.set(colors.join("|"), [
                    k,
                    i as Orientation,
                ]);
                // biome-ignore lint/style/noNonNullAssertion: always pushing back removed element so colrs will never be empty
                colors.push(colors.shift()!);
            }
        }

        const perm = [] as Piece[];
        const orie = [] as Orientation[];
        const rendererStateIndices = {
            0: [17, 20, 6],
            1: [18, 5, 1],
            2: [15, 0, 26],
            3: [16, 25, 21],
            4: [11, 7, 23],
            5: [10, 2, 8],
            6: [13, 27, 3],
            7: [12, 22, 28],
            8: [19],
            9: [24],
            10: [9],
            11: [4],
            12: [29],
            13: [14],
        } as const as Record<Piece, number[]>;

        if (useSameColorScheme) {
            for (const k in rendererStateIndices) {
                const p = Number(k) as Piece;
                const searchString = rendererStateIndices[p]
                    .map((i) => skewbRendererState[i])
                    .join("|");
                if (!pieceColorsReverseMap.has(searchString)) {
                    console.error({ perm, orie });
                    return `Piece in location ${p} does not exist`;
                }
                const [pPiece, pOrie] =
                    // biome-ignore lint/style/noNonNullAssertion: type guard above guarantees non-undefined value
                    pieceColorsReverseMap.get(searchString)!;

                if (perm.indexOf(pPiece) >= 0) {
                    console.error({ perm, orie });
                    return `Duplicate piece found in locations ${p} and ${perm.indexOf(pPiece)}`;
                }
                perm.push(pPiece);
                orie.push(pOrie);
            }
        } else {
            this.pieceColors = { ...this.pieceColors };
            for (const k in rendererStateIndices) {
                const p = Number(k) as Piece;

                this.pieceColors[p] = rendererStateIndices[p].map(
                    (i) => skewbRendererState[i],
                );

                perm.push(p);
                orie.push(0);
            }
        }

        this.perm = perm as Tuple<Piece, 14>;
        this.orie = orie as Tuple<Orientation, 14>;
    }

    clone() {
        return new SkewbState([...this.perm], [...this.orie], this.pieceColors);
    }
}

export { WCATurn, CenterPiece };
