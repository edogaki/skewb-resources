import { type LayerCase, layerCases } from "./layerCases.gen";
import type { CaseTag } from "./layerCaseTags.gen";
import { layerSolutionsComplete } from "./layerSolutionsComplete.gen";
import { layerSolutionTags, type SolutionTag } from "./layerSolutionTags.gen";

export type Tag = CaseTag | SolutionTag;
export type HasTag = [SolutionTag, string[]];

function computeHasTagsShortest(lc: LayerCase): [SolutionTag, string[]][] {
    const hasTags = {} as Record<SolutionTag, string[]>;
    const shortestMover = Number(Object.keys(layerSolutionsComplete[lc])[0]);
    for (const algStr of layerSolutionsComplete[lc][shortestMover]) {
        if (layerSolutionTags[algStr]) {
            for (const solutionTag of layerSolutionTags[algStr]) {
                hasTags[solutionTag] = hasTags[solutionTag] || [];
                hasTags[solutionTag].push(algStr);
            }
        }
    }
    return Object.entries(hasTags) as [SolutionTag, string[]][];
}

export const layerCaseHasTagsShortest = Object.fromEntries(
    layerCases.map((lc) => [lc, computeHasTagsShortest(lc)]),
) as Record<LayerCase, [SolutionTag, string[]][]>;
