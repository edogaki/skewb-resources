import { Color } from "../renderer/color";
import type { Tuple } from "../solver/helperTypes";
import {
    basePieceColors,
    type Orientation,
    type Piece,
    SkewbState,
} from "../solver/skewbState";
import { computeHash } from "./baseMethods";
import type { LayerCase } from "./layerCases.gen";

const cornerToIndexOrie = {
    a: [6, 0],
    b: [5, 0],
    c: [4, 0],
    d: [7, 0],

    e: [6, 2],
    f: [6, 1],
    g: [5, 2],
    h: [5, 1],

    i: [4, 2],
    j: [4, 1],
    k: [7, 2],
    l: [7, 1],

    m: [2, 1],
    n: [2, 2],
    o: [2, 0],

    p: [1, 1],
    q: [1, 2],
    r: [1, 0],

    s: [0, 1],
    t: [0, 2],
    u: [0, 0],

    v: [3, 1],
    w: [3, 2],
    x: [3, 0],
} as Record<string, [Piece, Orientation]>;

const indexOrieToCorner = {} as Record<Piece, Record<Orientation, string>>;

for (const [c, [i, o]] of Object.entries(cornerToIndexOrie)) {
    indexOrieToCorner[i] = indexOrieToCorner[i] || {};
    indexOrieToCorner[i][o] = c;
}

const pieceColors = {
    ...basePieceColors,
    4: [Color.Gray, Color.Gray, Color.Gray],
    5: [Color.Gray, Color.Gray, Color.Gray],
    6: [Color.Gray, Color.Gray, Color.Gray],
    7: [Color.Gray, Color.Gray, Color.Gray],
    9: [Color.Gray],
    10: [Color.Gray],
    11: [Color.Gray],
    12: [Color.Gray],
    13: [Color.Gray],
};

export function layerCaseToSkewbState(lc: LayerCase) {
    const perm = [-1, -1, -1, -1, -1, -1, -1, -1, 13, 9, 10, 11, 12, 8];
    const orie = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const whiteCorners = [2, 3, 0, 1];
    const yellowCorners = [4, 5, 6, 7];
    for (let i = 0; i < 4; i++) {
        const [index, o] = cornerToIndexOrie[lc[i]];
        perm[index] = whiteCorners[i];
        orie[index] = o;
    }
    for (let i = 0, j = 0; i < 8; i++) {
        if (perm[i] < 0) {
            perm[i] = yellowCorners[j];
            j++;
        }
    }
    return new SkewbState(
        perm as Tuple<Piece, 14>,
        orie as Tuple<Orientation, 14>,
        pieceColors,
    );
}

// Assumes base color scheme.
export function skewbStateWhiteToLayerCase(skewbState: SkewbState) {
    const state = skewbState.clone();
    const whiteLocation = state.perm.indexOf(8);
    switch (whiteLocation) {
        case 13:
            break;
        case 8:
            state.turnRubikskewb("x2");
            break;
        case 9:
            state.turnRubikskewb("z");
            break;
        case 10:
            state.turnRubikskewb("x'");
            break;
        case 11:
            state.turnRubikskewb("z'");
            break;
        case 12:
            state.turnRubikskewb("x");
            break;
    }
    const whiteCorners = [2, 3, 0, 1] as Piece[];
    const letters = [] as string[];
    for (const wc of whiteCorners) {
        const index = state.perm.indexOf(wc) as Piece;
        const orie = state.orie[index];
        const letter = indexOrieToCorner[index][orie];
        letters.push(letter);
    }
    const layerCase = computeHash(letters) as LayerCase;
    return layerCase;
}
