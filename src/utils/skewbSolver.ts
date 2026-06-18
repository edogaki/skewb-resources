import { RubikskewbAlg, RubikskewbTurn, type WCAAlg } from "./alg";
import { CenterPiece, pieceColors, type SkewbState } from "./skewbState";

export type LayerSolutions = Record<CenterPiece, RubikskewbAlg[]>;

class SearchNode<A extends WCAAlg | RubikskewbAlg> {
    centerPiece: CenterPiece;
    alg: A;
    skewbState: SkewbState;
    depth: number;
    constructor(
        centerPiece: CenterPiece,
        alg: A,
        skewbState: SkewbState,
        depth: number,
    ) {
        this.centerPiece = centerPiece;
        this.alg = alg;
        this.skewbState = skewbState;
        this.depth = depth;
    }
}

function stateData(skewbState: SkewbState) {
    const layerColor = pieceColors[skewbState.perm[10]][0];
    const solvedCorners =
        (layerColor ===
        pieceColors[skewbState.perm[1]][(1 + skewbState.orie[1]) % 3]
            ? 1
            : 0) +
        (layerColor ===
        pieceColors[skewbState.perm[0]][(2 + skewbState.orie[0]) % 3]
            ? 1
            : 0) +
        (layerColor ===
        pieceColors[skewbState.perm[4]][(1 + skewbState.orie[4]) % 3]
            ? 1
            : 0) +
        (layerColor ===
        pieceColors[skewbState.perm[5]][(2 + skewbState.orie[5]) % 3]
            ? 1
            : 0);

    return {
        solvedCorners,
        isLayerSolved:
            solvedCorners === 4 &&
            pieceColors[skewbState.perm[0]][(0 + skewbState.orie[0]) % 3] ===
                pieceColors[skewbState.perm[1]][(0 + skewbState.orie[1]) % 3],
    };
}

export const searchTurns = [
    RubikskewbTurn.R,
    RubikskewbTurn.r,
    RubikskewbTurn.Rprime,
    RubikskewbTurn.rprime,
    RubikskewbTurn.B,
    RubikskewbTurn.b,
    RubikskewbTurn.Bprime,
    RubikskewbTurn.bprime,
] as const;

const maxDepth = 7;
const extraSearchDepth = 1;
export function solveLayers(
    skewbState: SkewbState,
    addSolutionFunc: (
        centerPiece: CenterPiece,
        solution: RubikskewbAlg,
    ) => void,
    finishedFunc: () => void,
) {
    const timeStarted = Date.now();
    let totalNodes = 0;
    let abortedDueToUnsolvedCorners = 0;
    const shortestLayerFound = Object.fromEntries(
        CenterPiece.map((c) => [c, Infinity]),
    ) as Record<CenterPiece, number>;

    const queueRegistry = new Map<number, boolean>();

    let isAborted = false;

    function addToQueue(searchNode: SearchNode<RubikskewbAlg>) {
        totalNodes++;
        const randomId = Math.random();
        queueRegistry.set(randomId, true);
        setTimeout(() => {
            (() => {
                if (isAborted) {
                    return;
                }
                const { isLayerSolved, solvedCorners } = stateData(
                    searchNode.skewbState,
                );
                if (isLayerSolved) {
                    if (
                        shortestLayerFound[searchNode.centerPiece] === Infinity
                    ) {
                        shortestLayerFound[searchNode.centerPiece] =
                            searchNode.depth;
                    }
                    addSolutionFunc(searchNode.centerPiece, searchNode.alg);
                    return;
                }
                if (searchNode.depth >= maxDepth) {
                    return;
                }
                if (
                    searchNode.depth >=
                    shortestLayerFound[searchNode.centerPiece] +
                        extraSearchDepth
                ) {
                    return;
                }
                if (
                    shortestLayerFound[searchNode.centerPiece] +
                        extraSearchDepth -
                        searchNode.depth <
                    4 - solvedCorners
                ) {
                    abortedDueToUnsolvedCorners++;
                    return;
                }
                for (const searchTurn of searchTurns) {
                    if (
                        searchNode.alg.turns.length > 0 &&
                        searchTurn[0] ===
                            searchNode.alg.turns[
                                searchNode.alg.turns.length - 1
                            ][0]
                    ) {
                        continue;
                    }
                    addToQueue(
                        new SearchNode<RubikskewbAlg>(
                            searchNode.centerPiece,
                            searchNode.alg.clone().addTurn(searchTurn),
                            searchNode.skewbState
                                .clone()
                                .turnRubikskewb(searchTurn),
                            searchNode.depth + 1,
                        ),
                    );
                }
            })();
            queueRegistry.delete(randomId);
        }, 0);
    }
    for (const c of CenterPiece) {
        const initialAlg = new RubikskewbAlg("");
        const index = skewbState.perm.indexOf(c);
        switch (index) {
            case 8:
                initialAlg.addTurn(RubikskewbTurn.xprime);
                break;
            case 9:
                initialAlg.addTurn(RubikskewbTurn.y);
                break;
            case 10:
                break;
            case 11:
                initialAlg.addTurn(RubikskewbTurn.yprime);
                break;
            case 12:
                initialAlg.addTurn(RubikskewbTurn.y2);
                break;
            case 13:
                initialAlg.addTurn(RubikskewbTurn.x);
                break;
        }

        addToQueue(
            new SearchNode(
                c,
                initialAlg.clone(),
                skewbState.clone().applyRubikskewbAlg(initialAlg),
                0,
            ),
        );
    }

    (function checkIfFinished() {
        if (queueRegistry.size === 0) {
            console.info(
                "Time elapsed:",
                (Date.now() - timeStarted) / 1000,
                "seconds",
            );
            console.info("Total nodes", totalNodes);
            console.info(
                "Aborted due to unsolved corners",
                abortedDueToUnsolvedCorners,
            );
            return finishedFunc();
        }
        setTimeout(checkIfFinished, 100);
    })();

    return function abort() {
        isAborted = true;
    };
}
