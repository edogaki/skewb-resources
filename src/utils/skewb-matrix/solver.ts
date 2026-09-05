import { Queue } from "@datastructures-js/queue";
import { shuffleArray } from "../math";
import { WCAAlg, WCATurn } from "../solver/alg";
import { SkewbMatrixState } from "./SkewbMatrixState";

export interface SearchNode {
    alg: WCAAlg;
    state: SkewbMatrixState;
    hash: string;
    depth: number;
}

export type TaskQueue = Queue<SearchNode>;

export const preloadMaxDepth = 6;

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

let _shortSolutionStates: Map<string, string> | null = null;

export async function getShortSolutionStates(): Promise<Map<string, string>> {
    if (_shortSolutionStates) return _shortSolutionStates;

    const shortSolutionStates = new Map<string, string>();
    const timeStarted = Date.now();
    const taskQueue: TaskQueue = new Queue<SearchNode>();
    taskQueue.enqueue({
        alg: new WCAAlg(""),
        state: new SkewbMatrixState(),
        hash: new SkewbMatrixState().generateHash(),
        depth: 0,
    });

    let maxDepthSoFar = 0;
    // let layerNodesNum = 0;
    // let totalCacheHits = 0;

    while (!taskQueue.isEmpty()) {
        const searchNode = taskQueue.dequeue();
        if (!searchNode) continue;
        if (shortSolutionStates.has(searchNode.hash)) {
            // totalCacheHits++;
            continue;
        }

        shortSolutionStates.set(
            searchNode.hash,
            searchNode.alg.clone().invert().toString(),
        );

        if (maxDepthSoFar < searchNode.depth) {
            /*
            console.log(
                maxDepthSoFar,
                "depth:",
                layerNodesNum,
                "nodes and",
                totalCacheHits,
                "cache hits",
            );
            */
            maxDepthSoFar = searchNode.depth;
            // layerNodesNum = 0;
            // totalCacheHits = 0;
        }
        // layerNodesNum++;

        if (searchNode.depth >= preloadMaxDepth) {
            continue;
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
            const newState = searchNode.state.clone().turnWCA(searchTurn);
            taskQueue.enqueue({
                alg: searchNode.alg.clone().addTurn(searchTurn),
                state: newState,
                hash: newState.generateHash(),
                depth: searchNode.depth + 1,
            });
        }
    }
    /*
    console.log(
        maxDepthSoFar,
        "depth:",
        layerNodesNum,
        "nodes and",
        totalCacheHits,
        "cache hits",
    );
    */

    console.info(
        "One look trainer: Time spent on generating short solution states:",
        (Date.now() - timeStarted) / 1000,
        "seconds",
    );
    _shortSolutionStates = shortSolutionStates;
    return _shortSolutionStates;
}

export async function solveSkewb(state: SkewbMatrixState) {
    const taskQueue: TaskQueue = new Queue<SearchNode>();
    const shortSolutionStates = await getShortSolutionStates();

    taskQueue.enqueue({
        alg: new WCAAlg(""),
        state,
        hash: state.generateHash(),
        depth: 0,
    });
    while (!taskQueue.isEmpty()) {
        const searchNode = taskQueue.dequeue();
        if (!searchNode) continue;
        const possibleShortSolution = shortSolutionStates.get(searchNode.hash);
        if (possibleShortSolution) {
            return searchNode.alg.concat(new WCAAlg(possibleShortSolution));
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
            const newState = searchNode.state.clone().turnWCA(searchTurn);
            taskQueue.enqueue({
                alg: searchNode.alg.clone().addTurn(searchTurn),
                state: newState,
                hash: newState.generateHash(),
                depth: searchNode.depth + 1,
            });
        }
    }
    return new WCAAlg("");
}
