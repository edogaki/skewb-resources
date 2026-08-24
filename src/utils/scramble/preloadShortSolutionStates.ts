import { WCAAlg, WCATurn } from "#/utils/solver/alg";
import { SkewbState } from "#/utils/solver/skewbState";
import { shuffleArray } from "../renderer/math";

interface SearchNode {
    alg: WCAAlg;
    skewbState: SkewbState;
    hash: string;
    depth: number;
}

const maxDepth = 6;

const stateHashes = {} as Record<string, string>;

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

function saveStateHash(searchNode: SearchNode) {
    stateHashes[searchNode.hash] = searchNode.alg.toString();
}

function isAlreadySearched(searchNode: SearchNode) {
    return stateHashes[searchNode.hash] !== undefined;
}

let searchedCount = 0;
let depthSoFar = 0;

const runningNodeHashes = new Map<string, boolean>();

function addToQueue(searchNode: SearchNode) {
    runningNodeHashes.set(searchNode.hash, true);
    setTimeout(() => {
        (() => {
            if (isAlreadySearched(searchNode)) {
                return;
            }

            saveStateHash(searchNode);

            if (depthSoFar < searchNode.depth) {
                // console.log(`depth ${depthSoFar}: ${searchedCount} states`);
                depthSoFar = searchNode.depth;
                searchedCount = 0;
            }
            searchedCount++;

            if (searchNode.depth >= maxDepth) {
                return;
            }

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
                addToQueue({
                    alg: searchNode.alg.clone().addTurn(searchTurn),
                    skewbState: newState,
                    hash: newState.generateHash(),
                    depth: searchNode.depth + 1,
                });
            }
        })();
        runningNodeHashes.delete(searchNode.hash);
    }, 0);
}

export default async function preloadShortSolutionStates(): Promise<
    Record<string, string>
> {
    const timeStarted = Date.now();
    return new Promise((resolve, _reject) => {
        addToQueue({
            alg: new WCAAlg(""),
            skewbState: new SkewbState(),
            hash: new SkewbState().generateHash(),
            depth: 0,
        });

        function checkIfFinished() {
            if (runningNodeHashes.size === 0) {
                // console.log(`depth ${depthSoFar}: ${searchedCount} states`);
                console.info(
                    "Time spent on generating short solution states:",
                    (Date.now() - timeStarted) / 1000,
                    "seconds",
                );
                resolve(stateHashes);
            } else {
                setTimeout(checkIfFinished, 50);
            }
        }

        checkIfFinished();
    });
}
