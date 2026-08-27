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
import { fileLog } from "./utils/log";

const tags = [
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
    "1 to adjacent layer",
    "1 to opposite layer",
    "1 to diagadj layer",
    "2 to adjacent layer",
    "2 to opposite layer",
    "2 to diagadj layer",
] as const;

type Tag = (typeof tags)[number];

const layerCaseTags = Object.fromEntries(
    layerCases.map((lc) => [lc, new Set<Tag>()]),
) as Record<LayerCase, Set<Tag>>;

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
    const shortestAlgs = Object.values(layerSolutionsComplete[lc])[0];
    fileLog("lc", lc);

    for (const algStr of shortestAlgs) {
        fileLog("algStr", algStr);
        const skewbState = layerCaseToSkewbState(lc);
        const alg = new RubikskewbAlg(algStr);
        skewbState.turnRubikskewb(alg.turns[0]).turnRubikskewb(alg.turns[1]);
        skewbState.turnRubikskewb(RubikskewbTurn.xprime);
        const newLc = skewbStateWhiteToLayerCase(skewbState);
        fileLog("layer case after 1 move:", newLc);
        fileLog("new tags:", Array.from(layerCaseTags[newLc]).join(","));
        if (!layerCaseTags[lc].has("Diagadj layer")) {
            if (layerCaseTags[newLc].has("Diagadj layer")) {
                fileLog("1 to diagadj layer");
                layerCaseTags[lc].add("1 to diagadj layer");
            }
        }
        if (layerCaseTags[newLc].has("Adjacent layer")) {
            fileLog("1 to adjacent layer");
            layerCaseTags[lc].add("1 to adjacent layer");
        }
        if (layerCaseTags[newLc].has("Opposite layer")) {
            fileLog("1 to opposite layer");
            layerCaseTags[lc].add("1 to opposite layer");
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
        layerCaseTags[lc].has("Opposite layer") ||
        layerCaseTags[lc].has("1 to adjacent layer") ||
        layerCaseTags[lc].has("1 to opposite layer") ||
        layerCaseTags[lc].has("1 to diagadj layer")
    ) {
        continue;
    }
    const shortestAlgs = Object.values(layerSolutionsComplete[lc])[0];

    for (const algStr of shortestAlgs) {
        const skewbState = layerCaseToSkewbState(lc);
        const alg = new RubikskewbAlg(algStr);
        skewbState
            .turnRubikskewb(alg.turns[0])
            .turnRubikskewb(alg.turns[1])
            .turnRubikskewb(alg.turns[2]);
        const newLc = skewbStateWhiteToLayerCase(skewbState);
        if (!layerCaseTags[lc].has("Diagadj layer")) {
            if (layerCaseTags[newLc].has("Diagadj layer")) {
                layerCaseTags[lc].add("2 to diagadj layer");
            }
        }
        if (layerCaseTags[newLc].has("Adjacent layer")) {
            layerCaseTags[lc].add("2 to adjacent layer");
        }
        if (layerCaseTags[newLc].has("Opposite layer")) {
            layerCaseTags[lc].add("2 to opposite layer");
        }
    }
}

const layerCaseTagArrays = {} as Record<LayerCase, Tag[]>;
for (const lc of layerCases) {
    layerCaseTagArrays[lc] = Array.from(layerCaseTags[lc]);
}

const code = `import type { LayerCase } from "#/utils/layers-catalog/layerCases.gen";

export const tags = ${JSON.stringify(tags, null, 2)} as const;

export type Tag = (typeof tags)[number];

export const layerCaseTags = ${JSON.stringify(layerCaseTagArrays, null, 2)} as Record<LayerCase, Tag[]>;
`;

writeFileSync("./src/utils/layers-catalog/layerCaseTags.gen.ts", code, "utf8");
