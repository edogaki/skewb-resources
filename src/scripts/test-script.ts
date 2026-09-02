import {
    Axis,
    CubeRotation,
    DiagonalAxis,
    invertRotation,
    multiplyRotationByAxis,
    multiplyRotations,
    prettyPrint,
    rotateAroundAxis,
    rotateAroundAxisLookup,
    rotateAroundDiagonalAxis,
    rotateAroundDiagonalAxisLookup,
} from "#/utils/skewb-matrix/matrixMath";
import {
    defaultCenterPieces,
    defaultCornerPieces,
} from "#/utils/skewb-matrix/SkewbMatrixState";
import { fileLog } from "./utils/log";

console.log(
    "is multiplyRotations closed?",
    CubeRotation.every((r1) =>
        CubeRotation.every((r2) => {
            const result = multiplyRotations(r1, r2);
            fileLog(
                "is multiplyRotations closed?",
                JSON.stringify(
                    {
                        r1: prettyPrint(r1),
                        r2: prettyPrint(r2),
                        result: prettyPrint(result),
                    },
                    null,
                    2,
                ),
            );
            return CubeRotation.includes(result);
        }),
    ),
);

console.log(
    "is invertRotation closed?",
    CubeRotation.every((r1) => {
        const result = invertRotation(r1);
        fileLog(
            "is invertRotation closed?",
            JSON.stringify(
                {
                    r1: prettyPrint(r1),
                    result: prettyPrint(result),
                },
                null,
                2,
            ),
        );
        return CubeRotation.includes(result);
    }),
);

console.log(
    "A(A^-1)B = B?",
    CubeRotation.every((r1) =>
        CubeRotation.every((r2) => {
            const result = multiplyRotations(
                invertRotation(r1),
                multiplyRotations(r1, r2),
            );
            fileLog(
                "A(A^-1)B = B?",
                JSON.stringify(
                    {
                        r1: prettyPrint(r1),
                        r2: prettyPrint(r2),
                        result: prettyPrint(result),
                    },
                    null,
                    2,
                ),
            );
            return CubeRotation.includes(result);
        }),
    ),
);

console.log(
    "is multiplyRotationByAxis closed?",
    CubeRotation.every((r1) =>
        Axis.every((a) => {
            const result = multiplyRotationByAxis(r1, a);
            fileLog(
                "is multiplyRotationByAxis closed?",
                JSON.stringify(
                    {
                        r1: prettyPrint(r1),
                        a: prettyPrint(a),
                        result: prettyPrint(result),
                    },
                    null,
                    2,
                ),
            );
            return Axis.includes(result);
        }),
    ) &&
        CubeRotation.every((r1) =>
            DiagonalAxis.every((a) => {
                const result = multiplyRotationByAxis(r1, a);
                fileLog(
                    "is multiplyRotationByAxis closed?",
                    JSON.stringify(
                        {
                            r1: prettyPrint(r1),
                            a: prettyPrint(a),
                            result: prettyPrint(result),
                        },
                        null,
                        2,
                    ),
                );
                return DiagonalAxis.includes(result);
            }),
        ),
);

console.log(
    "is rotateAroundAxisLookup closed?",
    Axis.every((a) =>
        rotateAroundAxisLookup[a].every((r, i) => {
            fileLog(
                "is rotateAroundAxisLookup closed?",
                JSON.stringify(
                    {
                        a: prettyPrint(a),
                        i,
                        r: prettyPrint(r),
                    },
                    null,
                    2,
                ),
            );
            return CubeRotation.includes(r);
        }),
    ),
);

console.log(
    "is rotateAroundDiagonalAxisLookup closed?",
    DiagonalAxis.every((a) =>
        rotateAroundDiagonalAxisLookup[a].every((r, i) => {
            fileLog(
                "is rotateAroundDiagonalAxisLookup closed?",
                JSON.stringify(
                    {
                        a: prettyPrint(a),
                        i,
                        r: prettyPrint(r),
                    },
                    null,
                    2,
                ),
            );
            return CubeRotation.includes(r);
        }),
    ),
);

fileLog(
    "all skewb corner states",
    JSON.stringify(
        defaultCornerPieces.map((r) =>
            [0, 1, 2].map((i) =>
                prettyPrint(
                    multiplyRotations(
                        rotateAroundDiagonalAxis(
                            multiplyRotationByAxis<DiagonalAxis>(r, 0b010101),
                            i as 0 | 1 | 2,
                        ),
                        r,
                    ),
                ),
            ),
        ),
        null,
        2,
    ),
);

fileLog(
    "all skewb center states",
    JSON.stringify(
        defaultCenterPieces.map((r) =>
            [0, 1, 2, 3].map((i) =>
                prettyPrint(
                    multiplyRotations(
                        rotateAroundAxis(
                            multiplyRotationByAxis<Axis>(r, 0b010000),
                            i as 0 | 1 | 2 | 3,
                        ),
                        r,
                    ),
                ),
            ),
        ),
        null,
        2,
    ),
);
