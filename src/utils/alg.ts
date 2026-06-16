const WCATurn = {
    U: "U",
    R: "R",
    L: "L",
    B: "B",
    Uprime: "U'",
    Rprime: "R'",
    Lprime: "L'",
    Bprime: "B'",
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
            if (isWCATurn(turn)) {
                this.turns.push(turn);
            } else {
                throw new Error(`Invalid WCA alg string`);
            }
        }
    }

    toString() {
        return this.turns.join(" ");
    }
}

export { WCATurn };
