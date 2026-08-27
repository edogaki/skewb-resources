export const toRight = {
    a: "b",
    b: "c",
    c: "d",
    d: "a",
    e: "g",
    g: "i",
    i: "k",
    k: "e",
    f: "h",
    h: "j",
    j: "l",
    l: "f",
    m: "p",
    p: "s",
    s: "v",
    v: "m",
    n: "q",
    q: "t",
    t: "w",
    w: "n",
    o: "r",
    r: "u",
    u: "x",
    x: "o",
} as const;

export const cornerLetters = [
    ["aef", "rqp", "cij", "xwv"],
    ["bgh", "uts", "dkl", "onm"],
] as const;

export function computeHash(layerCase: string[]) {
    let hash = "zzzz";
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const currHash = [
                ...layerCase.slice(j, 4),
                ...layerCase.slice(0, j),
            ].join("");
            if (currHash < hash) {
                hash = currHash;
            }
        }
        layerCase = layerCase.map((c) => toRight[c as keyof typeof toRight]);
    }
    return hash;
}
