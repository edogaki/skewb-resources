import { computeHash, toRight } from "../layers-catalog/baseMethods";
import type { LayerCase } from "../layers-catalog/layerCases.gen";
import { applyFuncNTimes } from "../methods";
import { Color } from "../renderer/color";
import {
    CubeRotation,
    identity,
    invertRotation,
    multiplyRotationByAxis,
    multiplyRotations,
    rotateAroundAxis,
    rotateAroundDiagonalAxis,
} from "./matrixMath";
import {
    CenterIndex,
    cornerPieceAxis,
    defaultCenterPieces,
    defaultCornerPieces,
    type SkewbMatrixState,
} from "./skewbMatrixState";

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

export function identifyLayerCases(skewbState: SkewbMatrixState) {
    const state = skewbState.clone();
    const layerCases = {} as Record<CenterIndex, LayerCase>;
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
            });
            throw new Error("invalid letters");
        }
        const hash = computeHash(letters) as LayerCase;
        layerCases[center] = hash;
    }
    return layerCases;
}
