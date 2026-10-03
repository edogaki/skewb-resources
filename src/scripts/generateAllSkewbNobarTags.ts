import { writeFileSync } from "node:fs";
import { layerCases } from "#/utils/layers-catalog/layerCases.gen";
import { layerSolutionsComplete } from "#/utils/layers-catalog/layerSolutionsComplete.gen";
import { SkewbMatrixState } from "#/utils/skewb-matrix/skewbMatrixState";
import { RubikskewbAlg } from "#/utils/solver/alg";

const permCenterNumbers = [5, 4, 3, 0] as const;
type PermCenterNumber = (typeof permCenterNumbers)[number];

type PermCenterTag = `L${PermCenterNumber}C`;

const nobarLayerCases = layerCases.filter((lc) => !lc.startsWith("a"));

const nobarSolutionPermCenterTags = {} as Record<string, PermCenterTag>;

const baseState = new SkewbMatrixState().turnWCA("x2");

function isPermCenterNumber(n: number): n is PermCenterNumber {
    return permCenterNumbers.includes(n as PermCenterNumber);
}

for (const lc of nobarLayerCases) {
    for (const n of Object.keys(layerSolutionsComplete[lc]).map(
        Number,
    ) as number[]) {
        for (const soln of layerSolutionsComplete[lc][n]) {
            const state = new SkewbMatrixState()
                .turnWCA("x'")
                .applyRubikskewbAlg(new RubikskewbAlg(soln).invert());

            let permCenterNumber = 0;
            for (const center of [1, 2, 3, 4, 5]) {
                if (
                    state.centerPieces[center] !==
                    baseState.centerPieces[center]
                ) {
                    permCenterNumber++;
                }
            }
            if (!isPermCenterNumber(permCenterNumber)) {
                throw Error(
                    `Impossible error! ${JSON.stringify({ permCenterNumber, soln, baseState: baseState.centerPieces, state: state.centerPieces })}`,
                );
            }
            nobarSolutionPermCenterTags[soln] = `L${permCenterNumber}C`;
        }
    }
}

/** TODO
 * - generate nobarCaseTags
 * - write function to compute weight of no bar case given freq
 * - write new file mostly copying the old nobar stats code
 * - get max weight instead of jut max frequency
 */

const nobarTagsCode = `
export const permCenterNumbers = [5, 4, 3, 0] as const;
export type PermCenterNumber = (typeof permCenterNumbers)[number];

export type PermCenterTag = \`L\${PermCenterNumber}C\`;

export const nobarSolutionPermCenterTags = ${JSON.stringify(nobarSolutionPermCenterTags, null, 2)} as Record<string, PermCenterTag>;
`;

writeFileSync("./src/scripts/utils/nobarTags.gen.ts", nobarTagsCode, "utf8");
