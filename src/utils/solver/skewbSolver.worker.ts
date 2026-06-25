import type { RubikskewbAlg } from "./alg";
import { solveLayers } from "./skewbSolver";
import type { InputMessage } from "./skewbSolverWorkerAdapter";
import { type CenterPiece, SkewbState } from "./skewbState";

let abortFunc: (() => void) | null = null;

self.onmessage = (event: MessageEvent<InputMessage>) => {
    if (event.data === "Abort") {
        if (abortFunc) {
            abortFunc();
        }
        return;
    }
    abortFunc = solveLayers(
        new SkewbState(
            event.data.perm,
            event.data.orie,
            event.data.pieceColors,
        ),
        (centerPiece: CenterPiece, solution: RubikskewbAlg) => {
            self.postMessage({ centerPiece, solution });
        },
        () => {
            self.postMessage("Finished");
        },
    );
};
