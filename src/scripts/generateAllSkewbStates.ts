import { appendFileSync, writeFileSync } from "node:fs";
import { Color } from "#/utils/renderer/color";
import {
    type Axis,
    type CubeRotation,
    multiplyRotations,
    prettyPrint,
    rotateAroundDiagonalAxis,
} from "#/utils/skewb-matrix/matrixMath";
import {
    cornerPieceAxis,
    defaultCenterPieces,
    defaultCornerPieces,
    isValidState,
    SkewbMatrixState,
} from "#/utils/skewb-matrix/skewbMatrixState";
import { solveSkewb } from "#/utils/skewb-matrix/solver";
import type { IntFrom0To, Tuple } from "#/utils/solver/helperTypes";
import { fileLog } from "./utils/log";

const tsFileName = "./src/utils/allSkewbStateScrambles.gen.ts";

function generateSkewbPiecesFromRandomParameters(
    params: [
        IntFrom0To<3>,
        IntFrom0To<3>,
        IntFrom0To<3>,
        IntFrom0To<3>,
        IntFrom0To<3>,
        IntFrom0To<3>,
        IntFrom0To<3>,
        IntFrom0To<4>,
        IntFrom0To<6>,
        IntFrom0To<5>,
        IntFrom0To<4>,
        IntFrom0To<3>,
    ],
) {
    const cornerPieces = defaultCornerPieces.slice() as Tuple<CubeRotation, 8>;
    const centerPieces = defaultCenterPieces.slice() as Tuple<Axis, 6>;
    cornerPieces[0] = multiplyRotations(
        rotateAroundDiagonalAxis(cornerPieceAxis[0], params[0]),
        cornerPieces[0],
    );
    cornerPieces[1] = multiplyRotations(
        rotateAroundDiagonalAxis(cornerPieceAxis[1], params[1]),
        cornerPieces[1],
    );
    cornerPieces[2] = multiplyRotations(
        rotateAroundDiagonalAxis(cornerPieceAxis[2], params[2]),
        cornerPieces[2],
    );
    cornerPieces[3] = multiplyRotations(
        rotateAroundDiagonalAxis(cornerPieceAxis[3], params[3]),
        cornerPieces[3],
    );
    cornerPieces[4] = multiplyRotations(
        rotateAroundDiagonalAxis(cornerPieceAxis[4], params[4]),
        cornerPieces[4],
    );
    cornerPieces[5] = multiplyRotations(
        rotateAroundDiagonalAxis(cornerPieceAxis[5], params[5]),
        cornerPieces[5],
    );
    cornerPieces[7] = multiplyRotations(
        rotateAroundDiagonalAxis(cornerPieceAxis[7], params[6]),
        cornerPieces[7],
    );

    const corner6Orie = (9 - (params[1] + params[3] + params[4])) % 3;
    cornerPieces[6] = multiplyRotations(
        rotateAroundDiagonalAxis(cornerPieceAxis[6], corner6Orie),
        cornerPieces[6],
    );

    const staticCornerOrieParity = ((params[0] +
        params[2] +
        params[5] +
        params[6]) %
        3) as IntFrom0To<3>;

    const movingCorners = [1, 3, 4, 6];
    if (params[7] > 0) {
        [
            cornerPieces[movingCorners[0]],
            cornerPieces[movingCorners[params[7]]],
        ] = [
            cornerPieces[movingCorners[params[7]]],
            cornerPieces[movingCorners[0]],
        ];
        const lastMovingCorners = [
            movingCorners[((params[7] - 1 + 1) % 3) + 1],
            movingCorners[((params[7] - 1 + 2) % 3) + 1],
        ];

        [
            cornerPieces[lastMovingCorners[0]],
            cornerPieces[lastMovingCorners[1]],
        ] = [
            cornerPieces[lastMovingCorners[1]],
            cornerPieces[lastMovingCorners[0]],
        ];
    }
    [
        cornerPieces[movingCorners[(staticCornerOrieParity + 0) % 3]],
        cornerPieces[movingCorners[(staticCornerOrieParity + 1) % 3]],
        cornerPieces[movingCorners[(staticCornerOrieParity + 2) % 3]],
    ] = [
        cornerPieces[movingCorners[0]],
        cornerPieces[movingCorners[1]],
        cornerPieces[movingCorners[2]],
    ];

    for (let i = 0; i < 4; i++) {
        [centerPieces[i], centerPieces[i + params[8 + i]]] = [
            centerPieces[i + params[8 + i]],
            centerPieces[i],
        ];
    }
    const centerParity =
        params
            .slice(8, 12)
            .reduce((a, b) => (b !== 0 ? a + 1 : a), 0 as number) % 2;
    if (centerParity === 1) {
        [centerPieces[4], centerPieces[5]] = [centerPieces[5], centerPieces[4]];
    }
    return [cornerPieces, centerPieces] as const;
}

function* generateAllStates() {
    const paramsLimit = [3, 3, 3, 3, 3, 3, 3, 4, 6, 5, 4, 3] as const;
    const params = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    while (true) {
        const pieces = generateSkewbPiecesFromRandomParameters(
            params as [
                IntFrom0To<3>,
                IntFrom0To<3>,
                IntFrom0To<3>,
                IntFrom0To<3>,
                IntFrom0To<3>,
                IntFrom0To<3>,
                IntFrom0To<3>,
                IntFrom0To<4>,
                IntFrom0To<6>,
                IntFrom0To<5>,
                IntFrom0To<4>,
                IntFrom0To<3>,
            ],
        );
        yield [pieces[0], pieces[1], params.slice()] as const;

        let i = 0;
        params[i] = (params[i] + 1) % paramsLimit[i];
        while (params[i] === 0) {
            i++;
            if (i >= paramsLimit.length) return;
            params[i] = (params[i] + 1) % paramsLimit[i];
        }
    }
}

console.log("starting...");
const startTime = Date.now();

const allStatesGenerator = generateAllStates();
const solution = await solveSkewb(new SkewbMatrixState());

const colorReverseMap = Object.fromEntries(
    Object.entries(Color).map(([a, b]) => [b, a]),
);

writeFileSync(tsFileName, "export const skewbStateScrambles = [\n", "utf8");

let i = 0;
let hits = 0;
const hashMap = new Map<string, number>();

for (const state of allStatesGenerator) {
    const hash = JSON.stringify(state.slice(0, 2));
    if (hashMap.has(hash)) {
        console.log("hit", { i, j: hashMap.get(hash), hash });
        hits++;
    }
    hashMap.set(hash, i);
    const matrixState = new SkewbMatrixState(state[0], state[1]);
    if (!isValidState(matrixState)) {
        console.error("Invalid state", i);
        break;
    }
    const solution = await solveSkewb(matrixState);
    const setupString = solution.invert().toString();
    appendFileSync(tsFileName, `"${setupString}",\n`, "utf8");
    if (i % 1000 === 0) {
        console.log("processed", i, "th state");
        console.log(
            state,
            matrixState.toSkewbRendererState().map((c) => colorReverseMap[c]),
        );
        console.log(solution.toString());
    }
    i++;
}

console.log("finished in", (Date.now() - startTime) / 1000, "seconds");
console.log("number of states:", i);
console.log("number of duplicate states (if > 1, generator is bugged):", hits);

appendFileSync(tsFileName, "];", "utf8");
