import { readFileSync } from "node:fs";
import {
    type LayerCase,
    layerCases,
} from "#/utils/layers-catalog/layerCases.gen";
import { layerCaseTags } from "#/utils/layers-catalog/layerCaseTags.gen";
import { layerSolutionsComplete } from "#/utils/layers-catalog/layerSolutionsComplete.gen";
import { identifyLayerCases } from "#/utils/skewb-matrix/layerCasesIdentifier";
import { SkewbMatrixState } from "#/utils/skewb-matrix/skewbMatrixState";
import { WCAAlg } from "#/utils/solver/alg";
import { fileLog } from "./utils/log";

const isCountOptimalOnly = false;

const nobarAlgs = readFileSync(
    "./src/utils/allSkewbNobarScrambles.gen.csv",
    "utf-8",
);

const layerCasesTotalCount = Object.fromEntries(
    layerCases.map((lc) => [lc, 0]),
) as Record<LayerCase, number>;

const stateLayerCasesArr: LayerCase[][] = [];

for (const setupAlg of nobarAlgs.split("\n")) {
    if (setupAlg.length === 0) continue;
    const algObj = new WCAAlg(setupAlg);
    if (algObj.turns.length < 7) continue;

    const state = new SkewbMatrixState().applyWCAAlg(algObj);

    const stateLayerCases = identifyLayerCases(state);
    let stateLayerCasesVals = Object.values(stateLayerCases);
    const minMover = Math.min(
        ...stateLayerCasesVals.map((lc) =>
            Number(Object.keys(layerSolutionsComplete[lc])[0]),
        ),
    );

    if (isCountOptimalOnly) {
        stateLayerCasesVals = stateLayerCasesVals.filter(
            (lc) =>
                Number(Object.keys(layerSolutionsComplete[lc])[0]) === minMover,
        );
    }

    for (const lc of stateLayerCasesVals) {
        layerCasesTotalCount[lc]++;
    }
    stateLayerCasesArr.push(stateLayerCasesVals);
}

console.log(layerCasesTotalCount);
const sortedTotal = (
    Object.entries(layerCasesTotalCount) as [LayerCase, number][]
).filter(([lc, _n]) => !lc.startsWith("a"));
sortedTotal.sort(([_lc1, n1], [_lc2, n2]) => n2 - n1);

for (const arr of sortedTotal) {
    fileLog(
        `Layer case ${arr[0]} (${layerCaseTags[arr[0]].find((t) =>
            t.endsWith("-mover"),
        )}): ${arr[1]} nobar scrambles with it as ${isCountOptimalOnly ? "optimal " : ""}layer case`,
    );
}

// greedy find minimum number of layer cases to know to be able to solve all no bar scrambles

let currStateLayerCasesArr = stateLayerCasesArr.slice();
const minLayerCases: LayerCase[] = [];
fileLog(`Initial number of no bar scrambles: ${currStateLayerCasesArr.length}`);
let i = 0;
while (currStateLayerCasesArr.length > 0) {
    const numUniquePerLayer = new Map<LayerCase, number>();
    // count total
    for (const stateLayerCases of currStateLayerCasesArr) {
        const uniqueLayerCases = new Set(stateLayerCases);
        for (const lc of uniqueLayerCases) {
            /*
            if (
                !layerCaseTags[lc].includes("6-mover") &&
                !layerCaseTags[lc].includes("7-mover")
            ) {
                */
            numUniquePerLayer.set(lc, (numUniquePerLayer.get(lc) || 0) + 1);
            /*}*/
        }
    }
    const max = Math.max(...numUniquePerLayer.values());
    if (max < 0) {
        break;
    }
    const mostCommonLc = Array.from(numUniquePerLayer.entries()).find(
        ([_lc, n]) => n === max,
    );
    if (!mostCommonLc) continue;
    minLayerCases.push(mostCommonLc[0]);

    // filter
    currStateLayerCasesArr = currStateLayerCasesArr.filter(
        (lcArr) => !lcArr.includes(mostCommonLc[0]),
    );
    console.log(mostCommonLc, currStateLayerCasesArr.length);
    i++;
    fileLog(
        `Crossing out ${mostCommonLc[1]} no bar scrambles with ${isCountOptimalOnly ? "optimal " : ""}layer case ${mostCommonLc[0]}. ${i} layer cases covers ${((1 - currStateLayerCasesArr.length / stateLayerCasesArr.length) * 100).toFixed(2)}% of no bar scrambles`,
    );
}

console.log(minLayerCases);
fileLog(
    "solns of no bar layers that will cover all no bar scrambles, in order of most common to least",
);
fileLog(
    minLayerCases
        .map((lc) => Object.values(layerSolutionsComplete[lc])[0][0])
        .join("\n"),
);
