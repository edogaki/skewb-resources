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

const rubikskewbTurnsMap = new Map(
    (Object.values(RubikskewbTurn) as RubikskewbTurn[]).map((v) => [v, true]),
);

export function isRubikskewbTurn(str: string): str is RubikskewbTurn {
    return rubikskewbTurnsMap.has(str as RubikskewbTurn);
}

export abstract class Alg<T extends WCATurn | RubikskewbTurn> {
    protected abstract isValidTurn(s: string): s is T;
    protected abstract empty(): this;

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
}

export class WCAAlg extends Alg<WCATurn> {
    protected isValidTurn(s: string): s is WCATurn {
        return isWCATurn(s);
    }
    protected empty(): this {
        return new WCAAlg("") as this;
    }
}

export class RubikskewbAlg extends Alg<RubikskewbTurn> {
    protected isValidTurn(s: string): s is RubikskewbTurn {
        return isRubikskewbTurn(s);
    }
    protected empty(): this {
        return new RubikskewbAlg("") as this;
    }
}

export { WCATurn, RubikskewbTurn };
