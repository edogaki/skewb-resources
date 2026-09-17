import { skewbStateScrambles } from "#/utils/allSkewbStateScrambles.gen";

import { computeHash, toRight } from "#/utils/layers-catalog/baseMethods";
import { sum } from "#/utils/math";
import { applyFuncNTimes } from "#/utils/methods";
import { Color } from "#/utils/renderer/color";
import {
    CubeRotation,
    identity,
    invertRotation,
    multiplyRotationByAxis,
    multiplyRotations,
    prettyPrint,
    rotateAroundAxis,
    rotateAroundDiagonalAxis,
} from "#/utils/skewb-matrix/matrixMath";
import {
    CenterIndex,
    cornerPieceAxis,
    defaultCenterPieces,
    defaultCornerPieces,
    SkewbMatrixState,
} from "#/utils/skewb-matrix/skewbMatrixState";
import { WCAAlg } from "#/utils/solver/alg";

const colorReverseMap = Object.fromEntries(
    Object.entries(Color).map(([a, b]) => [b, a]),
);

const cornerRotationToLetterMap: Record<CubeRotation, string> = {
    [identity]: "a",
    [rotateAroundAxis(0b010000, 3)]: "b",
    [rotateAroundAxis(0b010000, 2)]: "c",
    [rotateAroundAxis(0b010000, 1)]: "d",
    [rotateAroundDiagonalAxis(0b010101, 2)]: "e",
    [rotateAroundDiagonalAxis(0b010101, 1)]: "f",
    [multiplyRotations(
        rotateAroundAxis(0b010000, 3),
        rotateAroundDiagonalAxis(0b010101, 2),
    )]: "g",
    [multiplyRotations(
        rotateAroundAxis(0b010000, 3),
        rotateAroundDiagonalAxis(0b010101, 1),
    )]: "h",
    [multiplyRotations(
        rotateAroundAxis(0b010000, 2),
        rotateAroundDiagonalAxis(0b010101, 2),
    )]: "i",
    [multiplyRotations(
        rotateAroundAxis(0b010000, 2),
        rotateAroundDiagonalAxis(0b010101, 1),
    )]: "j",
    [multiplyRotations(
        rotateAroundAxis(0b010000, 1),
        rotateAroundDiagonalAxis(0b010101, 2),
    )]: "k",
    [multiplyRotations(
        rotateAroundAxis(0b010000, 1),
        rotateAroundDiagonalAxis(0b010101, 1),
    )]: "l",
    [rotateAroundAxis(0b000100, 3)]: "m",
    [multiplyRotations(
        rotateAroundAxis(0b000100, 3),
        rotateAroundDiagonalAxis(0b010101, 1),
    )]: "n",
    [multiplyRotations(
        rotateAroundAxis(0b000100, 3),
        rotateAroundDiagonalAxis(0b010101, 2),
    )]: "o",
    [multiplyRotations(
        rotateAroundAxis(0b010000, 3),
        rotateAroundAxis(0b000100, 3),
    )]: "p",
    [multiplyRotations(
        rotateAroundAxis(0b010000, 3),
        multiplyRotations(
            rotateAroundAxis(0b000100, 3),
            rotateAroundDiagonalAxis(0b010101, 1),
        ),
    )]: "q",
    [multiplyRotations(
        rotateAroundAxis(0b010000, 3),
        multiplyRotations(
            rotateAroundAxis(0b000100, 3),
            rotateAroundDiagonalAxis(0b010101, 2),
        ),
    )]: "r",
    [multiplyRotations(
        rotateAroundAxis(0b010000, 2),
        rotateAroundAxis(0b000100, 3),
    )]: "s",
    [multiplyRotations(
        rotateAroundAxis(0b010000, 2),
        multiplyRotations(
            rotateAroundAxis(0b000100, 3),
            rotateAroundDiagonalAxis(0b010101, 1),
        ),
    )]: "t",
    [multiplyRotations(
        rotateAroundAxis(0b010000, 2),
        multiplyRotations(
            rotateAroundAxis(0b000100, 3),
            rotateAroundDiagonalAxis(0b010101, 2),
        ),
    )]: "u",
    [multiplyRotations(
        rotateAroundAxis(0b010000, 1),
        rotateAroundAxis(0b000100, 3),
    )]: "v",
    [multiplyRotations(
        rotateAroundAxis(0b010000, 1),
        multiplyRotations(
            rotateAroundAxis(0b000100, 3),
            rotateAroundDiagonalAxis(0b010101, 1),
        ),
    )]: "w",
    [multiplyRotations(
        rotateAroundAxis(0b010000, 1),
        multiplyRotations(
            rotateAroundAxis(0b000100, 3),
            rotateAroundDiagonalAxis(0b010101, 2),
        ),
    )]: "x",
} as Record<CubeRotation, string>;
if (Object.keys(cornerRotationToLetterMap).length !== 24) {
    console.error("invalid cornerRotationToLetterMap!", {
        cornerRotationToLetterMap,
    });
    throw new Error("invalid cornerRotationToLetterMap");
}

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
for (const setupStr of skewbStateScrambles) {
    const state = new SkewbMatrixState().applyWCAAlg(new WCAAlg(setupStr));
    let easiestLayerType: keyof typeof layerCasePriority = "No-bar layer";
    for (const center of CenterIndex) {
        state.rotateCenterToAxis(center, defaultCenterPieces[center]);
        const { cornerPieceLocations } = state.getLayerPieceLocations(center);
        const layerCornerPieceAxis = cornerPieceLocations.map(
            (corner) => cornerPieceAxis[corner],
        );
        // for each layer corner piece, get corner rotation relative to default rotation
        const cornerRotationRelativeToDefault = cornerPieceLocations.map(
            (corner) =>
                multiplyRotations(
                    state.cornerPieces[corner],
                    invertRotation(defaultCornerPieces[corner]),
                ),
        );

        const cornerRotationRedPerspective =
            cornerRotationRelativeToDefault.map((r, i) => {
                const centerTo100AndCornerDefaultTo111Rotation =
                    CubeRotation.find(
                        (r) =>
                            r >> 12 === state.centerPieces[center] &&
                            multiplyRotationByAxis(
                                r,
                                layerCornerPieceAxis[i],
                            ) === 0b010101,
                    );
                if (centerTo100AndCornerDefaultTo111Rotation === undefined)
                    throw new Error("invalid centerToRedLocRotation");

                return multiplyRotations(
                    centerTo100AndCornerDefaultTo111Rotation,
                    multiplyRotations(
                        r,
                        invertRotation(
                            centerTo100AndCornerDefaultTo111Rotation,
                        ),
                    ),
                );
            });

        const letters = cornerRotationRedPerspective.map((r, i) =>
            applyFuncNTimes(
                (c) => toRight[c as keyof typeof toRight],
                cornerRotationToLetterMap[r],
                i,
            ),
        );

        if (letters.some((c) => !toRight[c as keyof typeof toRight])) {
            console.error("invalid letters!", {
                letters,
                cornerRotationRelativeToDefault,
                cornerPieceLocations,
                center,
                setupStr,
            });
            throw new Error("invalid letters");
        }

        const hash = computeHash(letters);

        const lcType = classifyLayerCase(hash);
        if (layerCasePriority[lcType] > layerCasePriority[easiestLayerType]) {
            easiestLayerType = lcType;
        }
    }
    easiestLayerCount[easiestLayerType]++;
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
