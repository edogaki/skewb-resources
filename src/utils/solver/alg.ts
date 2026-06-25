const WCATurn = {
    U: "U",
    R: "R",
    L: "L",
    B: "B",
    Uprime: "U'",
    Rprime: "R'",
    Lprime: "L'",
    Bprime: "B'",
    x: "x",
    y: "y",
    z: "z",
    xprime: "x'",
    yprime: "y'",
    zprime: "z'",
    x2: "x2",
    y2: "y2",
    z2: "z2",
} as const;
type WCATurn = (typeof WCATurn)[keyof typeof WCATurn];

export const wcaTurnInverse = {
    [WCATurn.U]: "U'",
    [WCATurn.R]: "R'",
    [WCATurn.L]: "L'",
    [WCATurn.B]: "B'",
    [WCATurn.x]: "x'",
    [WCATurn.y]: "y'",
    [WCATurn.z]: "z'",
    [WCATurn.x2]: "x2",
    [WCATurn.y2]: "y2",
    [WCATurn.z2]: "z2",
    [WCATurn.xprime]: "x",
    [WCATurn.yprime]: "y",
    [WCATurn.zprime]: "z",
    [WCATurn.Uprime]: "U",
    [WCATurn.Rprime]: "R",
    [WCATurn.Lprime]: "L",
    [WCATurn.Bprime]: "B",
} as const;

const wcaTurnsMap = new Map(
    (Object.values(WCATurn) as WCATurn[]).map((v) => [v, true]),
);

export function isWCATurn(str: string): str is WCATurn {
    return wcaTurnsMap.has(str as WCATurn);
}

const RubikskewbTurn = {
    R: "R",
    B: "B",
    r: "r",
    b: "b",
    Rprime: "R'",
    Bprime: "B'",
    rprime: "r'",
    bprime: "b'",
    L: "L",
    l: "l",
    F: "F",
    f: "f",
    Lprime: "L'",
    lprime: "l'",
    Fprime: "F'",
    fprime: "f'",
    x: "x",
    y: "y",
    z: "z",
    xprime: "x'",
    yprime: "y'",
    zprime: "z'",
    x2: "x2",
    y2: "y2",
    z2: "z2",

    R2: "R2",
    B2: "B2",
    r2: "r2",
    b2: "b2",
    R2prime: "R2'",
    B2prime: "B2'",
    r2prime: "r2'",
    b2prime: "b2'",
    L2: "L2",
    l2: "l2",
    F2: "F2",
    f2: "f2",
    L2prime: "L2'",
    l2prime: "l2'",
    F2prime: "F2'",
    f2prime: "f2'",
    x2prime: "x2'",
    y2prime: "y2'",
    z2prime: "z2'",
} as const;
type RubikskewbTurn = (typeof RubikskewbTurn)[keyof typeof RubikskewbTurn];

export const rubikskewbTurnInverse = {
    [RubikskewbTurn.R]: "R'",
    [RubikskewbTurn.B]: "B'",
    [RubikskewbTurn.r]: "r'",
    [RubikskewbTurn.b]: "b'",
    [RubikskewbTurn.L]: "L'",
    [RubikskewbTurn.l]: "l'",
    [RubikskewbTurn.F]: "F'",
    [RubikskewbTurn.f]: "f'",
    [RubikskewbTurn.x]: "x'",
    [RubikskewbTurn.y]: "y'",
    [RubikskewbTurn.z]: "z'",
    [RubikskewbTurn.x2]: "x2'",
    [RubikskewbTurn.y2]: "y2'",
    [RubikskewbTurn.z2]: "z2'",
    [RubikskewbTurn.R2]: "R2'",
    [RubikskewbTurn.B2]: "B2'",
    [RubikskewbTurn.r2]: "r2'",
    [RubikskewbTurn.b2]: "b2'",
    [RubikskewbTurn.L2]: "L2'",
    [RubikskewbTurn.l2]: "l2'",
    [RubikskewbTurn.F2]: "F2'",
    [RubikskewbTurn.f2]: "f2'",

    [RubikskewbTurn.Rprime]: "R",
    [RubikskewbTurn.Bprime]: "B",
    [RubikskewbTurn.rprime]: "r",
    [RubikskewbTurn.bprime]: "b",
    [RubikskewbTurn.Lprime]: "L",
    [RubikskewbTurn.lprime]: "l",
    [RubikskewbTurn.Fprime]: "F",
    [RubikskewbTurn.fprime]: "f",
    [RubikskewbTurn.xprime]: "x",
    [RubikskewbTurn.yprime]: "y",
    [RubikskewbTurn.zprime]: "z",
    [RubikskewbTurn.R2prime]: "R2",
    [RubikskewbTurn.B2prime]: "B2",
    [RubikskewbTurn.r2prime]: "r2",
    [RubikskewbTurn.b2prime]: "b2",
    [RubikskewbTurn.L2prime]: "L2",
    [RubikskewbTurn.l2prime]: "l2",
    [RubikskewbTurn.F2prime]: "F2",
    [RubikskewbTurn.f2prime]: "f2",
    [RubikskewbTurn.x2prime]: "x2",
    [RubikskewbTurn.y2prime]: "y2",
    [RubikskewbTurn.z2prime]: "z2",
} as const;

const rubikskewbTurnsMap = new Map(
    (Object.values(RubikskewbTurn) as RubikskewbTurn[]).map((v) => [v, true]),
);

export function isRubikskewbTurn(str: string): str is RubikskewbTurn {
    return rubikskewbTurnsMap.has(str as RubikskewbTurn);
}

export abstract class Alg<T extends WCATurn | RubikskewbTurn> {
    protected abstract isValidTurn(s: string): s is T;
    protected abstract empty(): this;
    protected abstract inverse: Record<T, T>;

    turns: T[];

    constructor(algString: string) {
        const parsedTurns = algString.trim().match(/\S+/g) || [];
        this.turns = [];
        for (const turn of parsedTurns) {
            if (turn === "") {
                continue;
            }
            if (this.isValidTurn(turn)) {
                this.turns.push(turn);
            } else {
                throw new Error(`Invalid alg string`);
            }
        }
    }

    setTurns(turns: T[]) {
        this.turns = turns;
        return this;
    }

    toString() {
        return this.turns.join(" ");
    }

    addTurn(turn: T) {
        this.turns.push(turn);
        return this;
    }

    clone() {
        return this.empty().setTurns([...this.turns]);
    }

    invert() {
        return this.setTurns(this.turns.reverse().map((t) => this.inverse[t]));
    }
}

export class WCAAlg extends Alg<WCATurn> {
    protected isValidTurn(s: string): s is WCATurn {
        return isWCATurn(s);
    }
    protected empty(): this {
        return new WCAAlg("") as this;
    }

    protected inverse = wcaTurnInverse;
}

export class RubikskewbAlg extends Alg<RubikskewbTurn> {
    protected isValidTurn(s: string): s is RubikskewbTurn {
        return isRubikskewbTurn(s);
    }
    protected empty(): this {
        return new RubikskewbAlg("") as this;
    }
    protected inverse = rubikskewbTurnInverse;
}

export { WCATurn, RubikskewbTurn };
