import type { LayerCase } from "./layerCases.gen";

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
export type LayerSolutionsComplete = Record<
    LayerCase,
    Record<number, string[]>
>;

export const caseTags = [
    "0-mover",
    "1-mover",
    "2-mover",
    "3-mover",
    "4-mover",
    "5-mover",
    "6-mover",
    "7-mover",
    "Basic layer",
    "Adjacent layer",
    "Opposite layer",
    "Diagadj layer",
    "One-bar layer",
    "No-bar layer",
] as const;

export type CaseTag = (typeof caseTags)[number];

export type LayerCaseTags = Record<LayerCase, CaseTag[]>;

export const solutionTags = [
    "1 to adjacent layer",
    "1 to opposite layer",
    "1 to diagadj layer",
    "2 to adjacent layer",
    "2 to opposite layer",
    "2 to diagadj layer",
    "Preserves 2 corners",
    "Preserves centers",
    "Pres. 2 corners + Pres. centers",
] as const;

export type SolutionTag = (typeof solutionTags)[number];

export const solutionTagAbbrev: Record<SolutionTag, string> = {
    "1 to adjacent layer": "1a",
    "1 to opposite layer": "1o",
    "1 to diagadj layer": "1d",
    "2 to adjacent layer": "2a",
    "2 to opposite layer": "2o",
    "2 to diagadj layer": "2d",
    "Preserves 2 corners": "pco",
    "Preserves centers": "pce",
    "Pres. 2 corners + Pres. centers": "pcoce",
} as const;

export type LayerSolutionTags = Record<string, SolutionTag[]>;
