import { appendFileSync, writeFileSync } from "node:fs";
import { skewbStateScrambles } from "#/utils/allSkewbStateScrambles.gen";
import { sum } from "#/utils/math";
import { identifyLayerCases } from "#/utils/skewb-matrix/layerCasesIdentifier";
import {
    CenterIndex,
    SkewbMatrixState,
} from "#/utils/skewb-matrix/skewbMatrixState";
import { WCAAlg } from "#/utils/solver/alg";

const nobarsFileName = "./src/utils/allSkewbNobarScrambles.gen.csv";

function classifyLayerCase(lc: string) {
    if (lc.startsWith("abc")) {
        return "Basic layer";
    } else if (lc.startsWith("ab")) {
        return "Adjacent layer";
    } else if (lc.startsWith("a") && lc.includes("c")) {
        return "Opposite layer";
    } else if (lc.startsWith("ad")) {
        return "Diagadj layer";
    } else if (lc.startsWith("a")) {
        return "One-bar layer";
    } else {
        return "No-bar layer";
    }
}

const layerCasePriority = {
    "Basic layer": 6,
    "Adjacent layer": 5,
    "Opposite layer": 4,
    "Diagadj layer": 3,
    "One-bar layer": 2,
    "No-bar layer": 1,
} as const;

const easiestLayerCount: Record<keyof typeof layerCasePriority, number> = {
    "Basic layer": 0,
    "Adjacent layer": 0,
    "Opposite layer": 0,
    "Diagadj layer": 0,
    "One-bar layer": 0,
    "No-bar layer": 0,
};

const easiestLayerCountWCALegalOnly: Record<
    keyof typeof layerCasePriority,
    number
> = {
    "Basic layer": 0,
    "Adjacent layer": 0,
    "Opposite layer": 0,
    "Diagadj layer": 0,
    "One-bar layer": 0,
    "No-bar layer": 0,
};

function isWCALegal(setupStr: string) {
    return setupStr.split(" ").length >= 7;
}

let ct = 0;

writeFileSync(nobarsFileName, "", "utf8");

for (const setupStr of skewbStateScrambles) {
    const state = new SkewbMatrixState().applyWCAAlg(new WCAAlg(setupStr));
    let easiestLayerType: keyof typeof layerCasePriority = "No-bar layer";
    const stateLayerCases = identifyLayerCases(state);
    for (const center of CenterIndex) {
        const lc = stateLayerCases[center];
        const lcType = classifyLayerCase(lc);
        if (layerCasePriority[lcType] > layerCasePriority[easiestLayerType]) {
            easiestLayerType = lcType;
        }
    }
    easiestLayerCount[easiestLayerType]++;
    if (easiestLayerType === "No-bar layer") {
        appendFileSync(nobarsFileName, `${setupStr}\n`, "utf8");
    }
    if (isWCALegal(setupStr)) {
        easiestLayerCountWCALegalOnly[easiestLayerType]++;
    }
    ct++;
    if (ct % 100000 === 0) {
        console.log("Processed", ct, "states:", easiestLayerCount);
    }
}

function aggregateRecordOfNumbers<T extends string, U>(
    record: Record<T, number>,
    func: (arg0: number) => U,
): Record<T, U> {
    return Object.fromEntries(
        Object.entries(record).map(([k, v]) => [k as T, func(v as number)]),
    ) as Record<T, U>;
}

console.log(
    ct,
    "total processed states. Scrambles with at least one:",
    easiestLayerCount,
);

const easiestLayerCountPercents = aggregateRecordOfNumbers(
    easiestLayerCount,
    (n) => `${((n * 100) / sum(Object.values(easiestLayerCount))).toFixed(2)}%`,
);

console.log("Percentages:", easiestLayerCountPercents);

const wcaLegalCt = sum(Object.values(easiestLayerCountWCALegalOnly));

console.log(
    wcaLegalCt,
    "WCA legal states. Scrambles with at least one:",
    easiestLayerCountWCALegalOnly,
);

const easiestLayerCountWCALegalOnlyPercents = aggregateRecordOfNumbers(
    easiestLayerCountWCALegalOnly,
    (n) => `${((n * 100) / wcaLegalCt).toFixed(2)}%`,
);

console.log("Percentages:", easiestLayerCountWCALegalOnlyPercents);
