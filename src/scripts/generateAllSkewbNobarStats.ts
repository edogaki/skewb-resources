import { readFileSync } from "node:fs";
import {
    type LayerCase,
    layerCases,
} from "#/utils/layers-catalog/layerCases.gen";
import { layerCaseTags } from "#/utils/layers-catalog/layerCaseTags.gen";
import { layerSolutionsComplete } from "#/utils/layers-catalog/layerSolutionsComplete.gen";
import { identifyLayerCases } from "#/utils/skewb-matrix/layerCasesIdentifier";
import {
    CenterIndex,
    SkewbMatrixState,
} from "#/utils/skewb-matrix/skewbMatrixState";
import { WCAAlg } from "#/utils/solver/alg";
import { fileLog } from "./utils/log";

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
    const stateLayerCasesVals = Object.values(stateLayerCases);
    const minMover = Math.min(
        ...stateLayerCasesVals.map((lc) =>
            Number(Object.keys(layerSolutionsComplete[lc])[0]),
        ),
    );
    const stateLayerCasesValsSet = new Set(
        stateLayerCasesVals.filter(
            (lc) =>
                Number(Object.keys(layerSolutionsComplete[lc])[0]) === minMover,
        ),
    );

    for (const lc of stateLayerCasesValsSet) {
        layerCasesTotalCount[lc]++;
    }
    stateLayerCasesArr.push(Array.from(stateLayerCasesValsSet));
    // fileLog(setupAlg);
    // fileLog(JSON.stringify(stateLayerCases));
}

console.log(layerCasesTotalCount);
const sortedTotal = (
    Object.entries(layerCasesTotalCount) as [LayerCase, number][]
).filter(([lc, _n]) => !lc.startsWith("a"));
sortedTotal.sort(([_lc1, n1], [_lc2, n2]) => n2 - n1);

sortedTotal.map((arr) => fileLog(JSON.stringify(arr)));

// greedy find minimum number of layer cases to know to be able to solve all no bar scrambles

let currStateLayerCasesArr = stateLayerCasesArr.slice();
const minLayerCases: LayerCase[] = [];
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
    fileLog(
        JSON.stringify(mostCommonLc),
        currStateLayerCasesArr.length.toString(),
    );
}

console.log(minLayerCases);
fileLog(
    "layer solns of 200 no-bars that will cover the highest number of no-bar scrams",
);
fileLog(
    minLayerCases
        .slice(0, 200)
        .map((lc) => Object.values(layerSolutionsComplete[lc])[0][0])
        .join("\n"),
);

// bruteforce search power set of nobarLayerCases

const nobarLayerCasesSorted = sortedTotal
    .filter(([_lc, n]) => n > 0)
    .map(([lc, _n]) => lc);

let minRunsCt = 0;

let minHit = Infinity;

function min(
    arr: LayerCase[],
    filteredStates: LayerCase[][],
    idx: number,
): LayerCase[] {
    minRunsCt++;
    if (minRunsCt % 1000000 === 0) {
        console.log(minRunsCt, "min function calls");
    }
    if (idx >= nobarLayerCasesSorted.length) {
        return nobarLayerCasesSorted;
    }
    if (arr.length >= minHit) {
        return nobarLayerCasesSorted;
    }
    const newArr = [...arr, nobarLayerCasesSorted[idx]];
    const newFilteredStates = filteredStates.filter(
        (lcs) => !lcs.includes(nobarLayerCasesSorted[idx]),
    );
    if (newFilteredStates.length === 0) {
        if (newArr.length < minHit) {
            minHit = newArr.length;
            console.log("new minHit:", minHit, newArr);
        }
        return newArr;
    }
    const withMin = min(newArr, newFilteredStates, idx + 1);
    const withoutMin = min(arr, filteredStates, idx + 1);
    if (withMin.length > withoutMin.length) {
        return withoutMin;
    } else {
        return withMin;
    }
}
console.log(min([], stateLayerCasesArr, 0));
