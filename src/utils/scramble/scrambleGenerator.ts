import { shuffleArray, weightedRandom } from "../renderer/math";
import { WCAAlg, WCATurn } from "../solver/alg";
import type { Tuple } from "../solver/helperTypes";
import { type Orientation, type Piece, SkewbState } from "../solver/skewbState";
import preloadShortSolutionStates from "./preloadShortSolutionStates";

export function generateRandomSkewbState() {
    const orie = [
        Math.floor(Math.random() * 3),
        Math.floor(Math.random() * 3),
        Math.floor(Math.random() * 3),
        Math.floor(Math.random() * 3),
        Math.floor(Math.random() * 3),
        Math.floor(Math.random() * 3),
        NaN, // placeholder since this corners orientation depends on the orientation of 3 other corners
        Math.floor(Math.random() * 3),
        0,
        0,
        0,
        0,
        0,
        0,
    ];
    orie[6] = (9 - (orie[1] + orie[3] + orie[4])) % 3;
    const staticCornerOrieParity = (orie[0] + orie[2] + orie[5] + orie[7]) % 3;

    const movingCornerPermPossibleBaseStates = [
        [1, 3, 4, 6],
        [3, 1, 6, 4],
        [4, 6, 1, 3],
        [6, 4, 3, 1],
    ];
    const movingCornersPerm =
        movingCornerPermPossibleBaseStates[
            Math.floor(
                Math.random() * movingCornerPermPossibleBaseStates.length,
            )
        ];
    [movingCornersPerm[0], movingCornersPerm[1], movingCornersPerm[2]] = [
        movingCornersPerm[(staticCornerOrieParity + 0) % 3],
        movingCornersPerm[(staticCornerOrieParity + 1) % 3],
        movingCornersPerm[(staticCornerOrieParity + 2) % 3],
    ];

    const cornersPerm = [
        0,
        movingCornersPerm[0],
        2,
        movingCornersPerm[1],
        movingCornersPerm[2],
        5,
        movingCornersPerm[3],
        7,
    ];
    const centersPerm = [8, 9, 10, 11, 12, 13];
    shuffleArray(centersPerm, true);
    const perm = [...cornersPerm, ...centersPerm];
    const skewbState = new SkewbState(
        perm as Tuple<Piece, 14>,
        orie as Tuple<Orientation, 14>,
    );
    if (orie[0] === 1) {
        skewbState.turnWCA("z").turnWCA("x");
    } else if (orie[0] === 2) {
        skewbState.turnWCA("x'").turnWCA("z'");
    }
    return skewbState;
}

// Move state to standard position (perm = [0, ....], orie = [0, ...])
export function standardizeState(state: SkewbState) {
    const alg1 = new WCAAlg("");
    const wrgLocation = state.perm.indexOf(0);
    switch (wrgLocation) {
        // nothing to do for case 0
        case 1:
            alg1.addTurn("y'");
            break;
        case 2:
            alg1.addTurn("y2");
            break;
        case 3:
            alg1.addTurn("y");
            break;
        case 4:
            alg1.addTurn("x");
            break;
        case 5:
            alg1.addTurn("y'").addTurn("x");
            break;
        case 6:
            alg1.addTurn("y2").addTurn("x");
            break;
        case 7:
            alg1.addTurn("y").addTurn("x");
            break;
    }
    state.applyWCAAlg(alg1);
    const alg2 = new WCAAlg("");
    switch (state.orie[0]) {
        // nothing to do for case 0
        case 1:
            alg2.addTurn("z").addTurn("x");
            break;
        case 2:
            alg2.addTurn("x'").addTurn("z'");
            break;
    }
    state.applyWCAAlg(alg2);
    return alg1.concat(alg2);
}

interface SearchNode {
    alg: WCAAlg;
    skewbState: SkewbState;
    hash: string;
    depth: number;
}

const searchTurns = [
    WCATurn.R,
    WCATurn.Rprime,
    WCATurn.U,
    WCATurn.Uprime,
    WCATurn.L,
    WCATurn.Lprime,
    WCATurn.B,
    WCATurn.Bprime,
];

const scrambleSuboptimalDepthWeightedVariables = {
    7: [0, 0, 0.425, 0.425, 0.05],
    8: [0, 0.425, 0.425, 0.05],
    9: [0.425, 0.425, 0.05],
    10: [0.5, 0.5],
    11: [1],
};

const shortSolutionStates: Promise<Map<string, string>> =
    preloadShortSolutionStates();

// Already assumes cube is in a valid state
export async function solveValidSkewb(
    skewbState: SkewbState,
    scrambleMode?: boolean,
) {
    const shortSolutionStatesAwaited = await shortSolutionStates;
    const state = skewbState.clone();
    const alg = standardizeState(state);

    const stateHashes = new Map<string, string>();

    function saveStateHash(searchNode: SearchNode) {
        stateHashes.set(searchNode.hash, searchNode.alg.toString());
    }

    function isAlreadySearched(searchNode: SearchNode) {
        return stateHashes.has(searchNode.hash);
    }

    let isAbort = false;

    let optimalDepth = Infinity;
    let movesAboveOptimal = 0;

    function addToQueue(
        searchNode: SearchNode,
        submitSolution: (solution: WCAAlg) => void,
    ) {
        setTimeout(() => {
            if (isAbort) {
                return;
            }

            const shortSolution = shortSolutionStatesAwaited.get(
                searchNode.hash,
            );
            if (shortSolution) {
                const fullSolutionAlg = new WCAAlg(
                    `${searchNode.alg} ${shortSolution}`,
                );
                const fullDepth = fullSolutionAlg.turns.length;
                if (scrambleMode && fullDepth >= 7) {
                    if (optimalDepth === Infinity) {
                        optimalDepth = fullDepth;
                        movesAboveOptimal = weightedRandom(
                            scrambleSuboptimalDepthWeightedVariables[
                                fullDepth as 7 | 8 | 9 | 10 | 11
                            ],
                        );
                        console.info(
                            "optimal solution:",
                            fullSolutionAlg.toString(),
                            fullDepth,
                            "moves. Moves above optimal:",
                            movesAboveOptimal,
                        );
                    }
                    if (fullDepth >= optimalDepth + movesAboveOptimal) {
                        submitSolution(fullSolutionAlg);
                        isAbort = true;
                    }
                } else {
                    // if scrambleMode is true and skewbState solution is too short, submit optimal solution anyway and let the caller reject it and try again
                    submitSolution(fullSolutionAlg);
                    isAbort = true;
                    return;
                }
            }

            if (isAlreadySearched(searchNode)) {
                return;
            }

            saveStateHash(searchNode);
            shuffleArray(searchTurns);

            for (const searchTurn of searchTurns) {
                if (
                    searchNode.alg.turns.length > 0 &&
                    // check if previous turn is the same as or inverse of search turn
                    searchTurn[0] ===
                        searchNode.alg.turns[searchNode.alg.turns.length - 1][0]
                ) {
                    continue;
                }
                const newState = searchNode.skewbState
                    .clone()
                    .turnWCA(searchTurn);
                addToQueue(
                    {
                        alg: searchNode.alg.clone().addTurn(searchTurn),
                        skewbState: newState,
                        hash: newState.generateHash(),
                        depth: searchNode.depth + 1,
                    },
                    submitSolution,
                );
            }
        }, 0);
    }

    return await new Promise<WCAAlg>((resolve, _reject) => {
        addToQueue(
            {
                alg,
                skewbState: state,
                hash: state.generateHash(),
                depth: 0,
            },
            resolve,
        );
    });
}

export async function generateScramble() {
    let randomState: SkewbState;
    let soln: WCAAlg;
    do {
        randomState = generateRandomSkewbState();
        soln = await solveValidSkewb(randomState, true);
    } while (soln.turns.length < 8);
    return soln.invert().toString();
}
