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

export class WCAAlg {
    turns: WCATurn[];

    constructor(algString: string) {
        this.turns = [];
        for (const turn of algString.split(" ")) {
            if (turn === "") {
                continue;
            }
            if (!isWCATurn(turn)) {
                throw new Error(`Invalid WCA alg string`);
            }
            this.turns.push(turn as WCATurn);
        }
    }

    toString() {
        return this.turns.join(" ");
    }

    addTurn(turn: WCATurn) {
        this.turns.push(turn);
    }
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
} as const;
type RubikskewbTurn = (typeof RubikskewbTurn)[keyof typeof RubikskewbTurn];

const rubikskewbTurnsMap = new Map(
    (Object.values(RubikskewbTurn) as RubikskewbTurn[]).map((v) => [v, true]),
);

export function isRubikskewbTurn(str: string): str is RubikskewbTurn {
    return rubikskewbTurnsMap.has(str as RubikskewbTurn);
}

export class RubikskewbAlg {
    turns: RubikskewbTurn[];

    constructor(algString: string) {
        this.turns = [];
        for (const turn of algString.split(" ")) {
            if (turn === "") {
                continue;
            }
            if (isRubikskewbTurn(turn)) {
                this.turns.push(turn);
            } else {
                throw new Error(`Invalid Rubikskewb alg string`);
            }
        }
    }

    toString() {
        return this.turns.join(" ");
    }

    addTurn(turn: RubikskewbTurn) {
        this.turns.push(turn);
    }
}

export { WCATurn, RubikskewbTurn };
