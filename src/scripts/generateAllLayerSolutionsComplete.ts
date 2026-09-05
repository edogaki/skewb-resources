import { writeFileSync } from "node:fs";
import { layerCaseToSkewbState } from "#/utils/layers-catalog/layerCaseMethods";
import {
    type LayerCase,
    layerCases,
} from "#/utils/layers-catalog/layerCases.gen";
import type { RubikskewbAlg, RubikskewbTurn } from "#/utils/solver/alg";
import { searchTurns, solveLayers } from "#/utils/solver/skewbSolver";

const layerSolutionsComplete = Object.fromEntries(
    layerCases.map((lc) => [lc, {}]),
) as Record<LayerCase, Record<number, string[]>>;

function algLength(alg: RubikskewbAlg) {
    return alg.turns.filter((t) =>
        (searchTurns as readonly RubikskewbTurn[]).includes(t),
    ).length;
}

async function solveAllLayers() {
    for (let i = 0; i < layerCases.length; i++) {
        const lc = layerCases[i];
        const skewbState = layerCaseToSkewbState(lc);
        await new Promise<void>((resolve) => {
            solveLayers(
                skewbState,
                (_c, alg) => {
                    const length = algLength(alg);
                    if (!layerSolutionsComplete[lc][length]) {
                        layerSolutionsComplete[lc][length] = [];
                    }
                    layerSolutionsComplete[lc][length].push(alg.toString());
                },
                resolve,
            );
        });
        console.log(`Finished ${i + 1}/${layerCases.length}`);
    }
}

await solveAllLayers();

const code = `import type { LayerSolutionsComplete } from "#/utils/layers-catalog/baseMethods";

export const layerSolutionsComplete: LayerSolutionsComplete = ${JSON.stringify(layerSolutionsComplete, null, 2)};
`;

writeFileSync(
    "./src/utils/layers-catalog/layerSolutionsComplete.gen.ts",
    code,
    "utf8",
);
