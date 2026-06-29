import { Color } from "#/utils/renderer/color";
import { RubikskewbAlg, RubikskewbTurn } from "#/utils/solver/alg";
import {
    type Orientation,
    type Piece,
    SkewbState,
} from "#/utils/solver/skewbState";

const layerPieces = new Map<Piece, boolean>([
    [0, true],
    [1, true],
    [4, true],
    [5, true],
    [10, true],
]);

type NodeHash = string;

class TreeNode {
    skewbState: SkewbState;
    algs: RubikskewbAlg[];
    depth: number;
    hash: NodeHash;
    constructor(skewbState: SkewbState, depth: number, alg?: RubikskewbAlg) {
        this.skewbState = skewbState;
        this.algs = alg ? [alg] : [];
        this.depth = depth;
        this.hash = generateLayerHash(this.skewbState);
    }

    toSerializable() {
        return {
            algs: this.algs.map((alg) => alg.toString()),
            hash: this.hash,
            depth: this.depth,
        };
    }
}

function generateLayerHash(skewbState: SkewbState): NodeHash {
    const stateClone = skewbState.clone();
    let hash: NodeHash = "~";
    for (let i = 0; i < 4; i++) {
        const filteredPerm: (Piece | -1)[] = [...stateClone.perm].map((p) =>
            layerPieces.has(p) ? p : -1,
        );
        const filteredOrie: (Orientation | -1)[] = [...stateClone.orie].map(
            (o, i) => (filteredPerm[i] >= 0 ? o : -1),
        );
        for (let j = 0; j < 4; j++) {
            const candidateHash = `${filteredPerm.join(";")}|${filteredOrie.join(";")}`;
            if (hash > candidateHash) hash = candidateHash;
            [
                filteredPerm[0],
                filteredPerm[1],
                filteredPerm[4],
                filteredPerm[5],
            ] = [
                filteredPerm[1],
                filteredPerm[4],
                filteredPerm[5],
                filteredPerm[0],
            ];
            [
                filteredOrie[0],
                filteredOrie[1],
                filteredOrie[4],
                filteredOrie[5],
            ] = [
                filteredOrie[1],
                filteredOrie[4],
                filteredOrie[5],
                filteredOrie[0],
            ];
        }
        stateClone.turnRubikskewb(RubikskewbTurn.z);
    }
    return hash;
}

function generateTree() {
    const nodeHashMap = new Map<NodeHash, TreeNode>();

    const initialSkewbState = new SkewbState(undefined, undefined, {
        0: [Color.White, Color.Red, Color.Green],
        1: [Color.White, Color.Green, Color.Orange],
        2: [Color.Gray, Color.Gray, Color.Gray],
        3: [Color.Gray, Color.Gray, Color.Gray],
        4: [Color.Yellow, Color.Green, Color.Red],
        5: [Color.Yellow, Color.Orange, Color.Green],
        6: [Color.Gray, Color.Gray, Color.Gray],
        7: [Color.Gray, Color.Gray, Color.Gray],
        8: [Color.Gray],
        9: [Color.Gray],
        10: [Color.Green],
        11: [Color.Gray],
        12: [Color.Gray],
        13: [Color.Gray],
    });

    function computeNode(node: TreeNode) {
        setTimeout(() => {
            const mapNode = nodeHashMap.get(node.hash);
            if (mapNode) {
            } else {
                nodeHashMap.set(node.hash, node);
            }
        }, 0);
    }

    computeNode(new TreeNode(initialSkewbState, 0, new RubikskewbAlg("")));
}
