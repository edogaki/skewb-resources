import { Color } from "../renderer/color";
import { WCATurn } from "../solver/alg";
import type { Tuple } from "../solver/helperTypes";
import {
    basePieceColors,
    type Orientation,
    type Piece,
    SkewbState,
} from "../solver/skewbState";
import type { LayerCase } from "./layerCases.gen";

const cornerToIndexOrie = {
    a: [2, 0],
    b: [3, 0],
    c: [0, 0],
    d: [1, 0],

    e: [2, 2],
    f: [1, 1],
    g: [5, 2],
    h: [6, 1],

    i: [1, 2],
    j: [0, 1],
    k: [4, 2],
    l: [5, 1],

    m: [0, 2],
    n: [3, 1],
    o: [7, 2],
    p: [4, 1],

    q: [3, 2],
    r: [2, 1],
    s: [6, 2],
    t: [7, 1],

    u: [5, 0],
    v: [4, 0],
    w: [7, 0],
    x: [6, 0],
} as Record<string, [Piece, Orientation]>;

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

export let layerSolutionsComplete:
    | Record<LayerCase, Record<number, string[]>>
    | undefined;

export function layerCaseToSkewbState(lc: LayerCase) {
    const perm = [-1, -1, -1, -1, -1, -1, -1, -1, 8, 9, 10, 11, 12, 13];
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
    )
        .turnWCA(WCATurn.z2)
        .turnWCA(WCATurn.yprime);
}

export async function preloadLayerSolutionsComplete() {
    if (!layerSolutionsComplete) {
        const importedVariable = await import(
            "#/utils/layers-catalog/layerSolutionsComplete.gen"
        );
        layerSolutionsComplete = importedVariable.layerSolutionsComplete;
    }
}
