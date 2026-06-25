import { RubikskewbAlg } from "./alg";
import type { CenterPiece, SkewbState } from "./skewbState";

export type InputMessage = SkewbState | "Abort";
export type OutputMessage =
    | { centerPiece: CenterPiece; solution: RubikskewbAlg }
    | "Finished";

export function solveLayers(
    skewbState: SkewbState,
    addSolutionFunc: (
        centerPiece: CenterPiece,
        solution: RubikskewbAlg,
    ) => void,
    finishedFunc: () => void,
) {
    const worker = new Worker(
        new URL("./skewbSolver.worker.ts", import.meta.url),
        { type: "module" },
    );
    worker.postMessage(skewbState);
    worker.onmessage = (event: MessageEvent<OutputMessage>) => {
        if (event.data === "Finished") {
            finishedFunc();
            return;
        }
        addSolutionFunc(
            event.data.centerPiece,
            new RubikskewbAlg("").setTurns(event.data.solution.turns),
        );
    };
    return function abort() {
        worker.postMessage("Abort");
    };
}
