import { writeFileSync } from "node:fs";
import {
    layerCaseToSkewbState,
    skewbStateWhiteToLayerCase,
} from "#/utils/layers-catalog/layerCaseMethods";
import {
    type LayerCase,
    layerCases,
} from "#/utils/layers-catalog/layerCases.gen";
import { layerSolutionsComplete } from "#/utils/layers-catalog/layerSolutionsComplete.gen";
import { RubikskewbAlg, RubikskewbTurn } from "#/utils/solver/alg";
import type { Piece } from "#/utils/solver/skewbState";

const caseTags = [
    "0-mover",
    "1-mover",
    "2-mover",
    "3-mover",
    "4-mover",
    "5-mover",
    "6-mover",
    "7-mover",
    "Adjacent layer",
    "Opposite layer",
    "Diagadj layer",
    "No-bar layer",
] as const;

type CaseTag = (typeof caseTags)[number];

const layerCaseTags = Object.fromEntries(
    layerCases.map((lc) => [lc, new Set<CaseTag>()]),
) as Record<LayerCase, Set<CaseTag>>;

const solutionTags = [
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

type SolutionTag = (typeof solutionTags)[number];

const solutionTagAbbrev: Record<SolutionTag, string> = {
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

const layerSolutionTags = {} as Record<string, Set<SolutionTag>>;

for (const lc of Object.keys(layerSolutionsComplete) as LayerCase[]) {
    for (const n of Object.keys(layerSolutionsComplete[lc]).map(
        Number,
    ) as number[]) {
        for (const soln of layerSolutionsComplete[lc][n]) {
            layerSolutionTags[soln] = new Set<SolutionTag>();
        }
    }
}

for (const lc of layerCases) {
    const moverTags = [
        "0-mover",
        "1-mover",
        "2-mover",
        "3-mover",
        "4-mover",
        "5-mover",
        "6-mover",
        "7-mover",
    ] as const;
    layerCaseTags[lc].add(
        moverTags[Number(Object.keys(layerSolutionsComplete[lc])[0])],
    );

    if (lc.startsWith("ab")) {
        layerCaseTags[lc].add("Adjacent layer");
    }
    if (lc.startsWith("ad")) {
        layerCaseTags[lc].add("Diagadj layer");
    }
    if (lc.startsWith("a") && lc.includes("c")) {
        layerCaseTags[lc].add("Opposite layer");
    }

    if (!lc.startsWith("a")) {
        layerCaseTags[lc].add("No-bar layer");
    }
}

for (const lc of layerCases) {
    if (
        layerCaseTags[lc].has("0-mover") ||
        layerCaseTags[lc].has("1-mover") ||
        layerCaseTags[lc].has("2-mover") ||
        layerCaseTags[lc].has("Adjacent layer") ||
        layerCaseTags[lc].has("Opposite layer")
    ) {
        continue;
    }
    for (const n of Object.keys(layerSolutionsComplete[lc]).map(
        Number,
    ) as number[]) {
        for (const algStr of layerSolutionsComplete[lc][n]) {
            const skewbState = layerCaseToSkewbState(lc);
            const alg = new RubikskewbAlg(algStr);
            skewbState
                .turnRubikskewb(alg.turns[0])
                .turnRubikskewb(alg.turns[1]);
            skewbState.turnRubikskewb(RubikskewbTurn.xprime);
            const newLc = skewbStateWhiteToLayerCase(skewbState);
            if (!layerCaseTags[lc].has("Diagadj layer")) {
                if (layerCaseTags[newLc].has("Diagadj layer")) {
                    layerSolutionTags[algStr].add("1 to diagadj layer");
                }
            }
            if (layerCaseTags[newLc].has("Adjacent layer")) {
                layerSolutionTags[algStr].add("1 to adjacent layer");
            }
            if (layerCaseTags[newLc].has("Opposite layer")) {
                layerSolutionTags[algStr].add("1 to opposite layer");
            }
        }
    }
}

for (const lc of layerCases) {
    if (
        layerCaseTags[lc].has("0-mover") ||
        layerCaseTags[lc].has("1-mover") ||
        layerCaseTags[lc].has("2-mover") ||
        layerCaseTags[lc].has("3-mover") ||
        layerCaseTags[lc].has("Adjacent layer") ||
        layerCaseTags[lc].has("Opposite layer")
    ) {
        continue;
    }

    for (const n of Object.keys(layerSolutionsComplete[lc]).map(
        Number,
    ) as number[]) {
        for (const algStr of layerSolutionsComplete[lc][n]) {
            if (
                layerSolutionTags[algStr].has("1 to adjacent layer") ||
                layerSolutionTags[algStr].has("1 to opposite layer") ||
                layerSolutionTags[algStr].has("1 to diagadj layer")
            ) {
                continue;
            }
            const skewbState = layerCaseToSkewbState(lc);
            const alg = new RubikskewbAlg(algStr);
            skewbState
                .turnRubikskewb(alg.turns[0])
                .turnRubikskewb(alg.turns[1])
                .turnRubikskewb(alg.turns[2]);
            const newLc = skewbStateWhiteToLayerCase(skewbState);
            if (!layerCaseTags[lc].has("Diagadj layer")) {
                if (layerCaseTags[newLc].has("Diagadj layer")) {
                    layerSolutionTags[algStr].add("2 to diagadj layer");
                }
            }
            if (layerCaseTags[newLc].has("Adjacent layer")) {
                layerSolutionTags[algStr].add("2 to adjacent layer");
            }
            if (layerCaseTags[newLc].has("Opposite layer")) {
                layerSolutionTags[algStr].add("2 to opposite layer");
            }
        }
    }
}

for (const lc of layerCases) {
    for (const n of Object.keys(layerSolutionsComplete[lc]).map(
        Number,
    ) as number[]) {
        for (const algStr of layerSolutionsComplete[lc][n]) {
            const skewbState = layerCaseToSkewbState(lc);
            const permBefore = [...skewbState.perm];
            const orieBefore = [...skewbState.orie];
            const alg = new RubikskewbAlg(algStr);
            skewbState.applyRubikskewbAlg(alg);
            skewbState.turnRubikskewb("x'");
            const permAfter = skewbState.perm;
            const orieAfter = skewbState.orie;

            const uCornerSets = [
                [0, 2],
                [1, 3],
            ] as Piece[][];
            if (
                uCornerSets.every((set) =>
                    set.some(
                        (c) =>
                            permBefore[c] === permAfter[c] &&
                            orieBefore[c] === orieAfter[c],
                    ),
                )
            ) {
                layerSolutionTags[algStr].add("Preserves 2 corners");
            }

            const threeCenters = [8, 9, 10] as Piece[];
            if (threeCenters.every((c) => permBefore[c] === permAfter[c])) {
                layerSolutionTags[algStr].add("Preserves centers");
            }

            if (
                layerSolutionTags[algStr].has("Preserves 2 corners") &&
                layerSolutionTags[algStr].has("Preserves centers")
            ) {
                layerSolutionTags[algStr].add(
                    "Pres. 2 corners + Pres. centers",
                );
            }
        }
    }
}

const layerCaseTagArrays = {} as Record<LayerCase, CaseTag[]>;
for (const lc of layerCases) {
    layerCaseTagArrays[lc] = Array.from(layerCaseTags[lc]);
}

const layerSolutionTagArrays = {} as Record<string, SolutionTag[]>;
for (const algStr of Object.keys(layerSolutionTags)) {
    layerSolutionTagArrays[algStr] = Array.from(layerSolutionTags[algStr]);
}

const caseTagsCode = `import type { LayerCase } from "#/utils/layers-catalog/layerCases.gen";

export const caseTags = ${JSON.stringify(caseTags, null, 2)} as const;

export type CaseTag = (typeof caseTags)[number];

export const layerCaseTags = ${JSON.stringify(layerCaseTagArrays, null, 2)} as Record<LayerCase, CaseTag[]>;
`;

writeFileSync(
    "./src/utils/layers-catalog/layerCaseTags.gen.ts",
    caseTagsCode,
    "utf8",
);

const solutionTagsCode = `
export const solutionTags = ${JSON.stringify(solutionTags, null, 2)} as const;

export type SolutionTag = (typeof solutionTags)[number];

export const solutionTagAbbrev: Record<SolutionTag, string> = ${JSON.stringify(solutionTagAbbrev, null, 2)} as const;

export const layerSolutionTags = ${JSON.stringify(layerSolutionTagArrays, null, 2)} as Record<string, SolutionTag[]>;
`;

writeFileSync(
    "./src/utils/layers-catalog/layerSolutionTags.gen.ts",
    solutionTagsCode,
    "utf8",
);
