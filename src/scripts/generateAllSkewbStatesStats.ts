import {
    CenterIndex,
    SkewbMatrixState,
} from "#/utils/skewb-matrix/skewbMatrixState";
import { WCAAlg } from "#/utils/solver/alg";

const skewbStateScrambles = [
    "",
    "U R B R B",
    "U' R B R B",
    "U' R B R B",
    "U' R' B R B",
    "U' R' B' R B",
    "U' R' B' R' B'",
    "L U' R' B' R' B'",
    "L' U' R' B' R' B'",
];

for (const setupStr of skewbStateScrambles) {
    const state = new SkewbMatrixState().applyWCAAlg(new WCAAlg(setupStr));
    for (const center of CenterIndex) {
        const centerTo001Rotation = state.rotateCenterToAxis(center, 0b000001);
        const { cornerPieceLocations } = state.getLayerPieceLocations(center);
    }
}
