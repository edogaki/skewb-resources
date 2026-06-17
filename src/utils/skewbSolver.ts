import { RubikskewbAlg, RubikskewbTurn } from "./alg";
import { CenterPiece, type SkewbState } from "./skewbState";

export type LayerSolution = Record<CenterPiece, RubikskewbAlg>;

export async function solveLayers(skewbState: SkewbState) {
    const layerSolution: LayerSolution = Object.fromEntries(
        CenterPiece.map((v) => [v, new RubikskewbAlg("")]),
    ) as LayerSolution;
    for (const c of CenterPiece) {
        const index = skewbState.perm.indexOf(c);
        switch (index) {
            case 8:
                layerSolution[c].addTurn(RubikskewbTurn.xprime);
                break;
            case 9:
                layerSolution[c].addTurn(RubikskewbTurn.y);
                break;
            case 10:
                break;
            case 11:
                layerSolution[c].addTurn(RubikskewbTurn.yprime);
                break;
            case 12:
                layerSolution[c].addTurn(RubikskewbTurn.y2);
                break;
            case 13:
                layerSolution[c].addTurn(RubikskewbTurn.x);
                break;
        }
    }
    return layerSolution;
}
