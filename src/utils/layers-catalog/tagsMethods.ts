import { type LayerCase, layerCases } from "./layerCases.gen";
import type { CaseTag } from "./layerCaseTags.gen";
import { layerSolutionsComplete } from "./layerSolutionsComplete.gen";
import { layerSolutionTags, type SolutionTag } from "./layerSolutionTags.gen";

export type Tag = CaseTag | SolutionTag;
export type HasTag = [SolutionTag, string[]];

function computeHasTagsShortest(lc: LayerCase): HasTag[] {
    const hasTags = {} as Record<SolutionTag, string[]>;
    const shortestMover = Number(Object.keys(layerSolutionsComplete[lc])[0]);
    for (const algStr of layerSolutionsComplete[lc][shortestMover]) {
        const solutionTagsCopy = layerSolutionTags[algStr];
        for (const solutionTag of solutionTagsCopy) {
            hasTags[solutionTag] = hasTags[solutionTag] || [];
            hasTags[solutionTag].push(algStr);
        }
    }
    return Object.entries(hasTags) as [SolutionTag, string[]][];
}

export const layerCaseHasTagsShortest = Object.fromEntries(
    layerCases.map((lc) => [lc, computeHasTagsShortest(lc)]),
) as Record<LayerCase, HasTag[]>;

function computeHasTagsSuboptimal(lc: LayerCase): HasTag[] {
    const hasTags = {} as Record<SolutionTag, string[]>;
    for (const n of Object.keys(layerSolutionsComplete[lc])
        .slice(1)
        .map(Number)) {
        for (const algStr of layerSolutionsComplete[lc][n]) {
            const solutionTagsCopy = layerSolutionTags[algStr];
            for (const solutionTag of solutionTagsCopy) {
                hasTags[solutionTag] = hasTags[solutionTag] || [];
                hasTags[solutionTag].push(algStr);
            }
        }
    }
    return Object.entries(hasTags) as [SolutionTag, string[]][];
}

export const layerCaseHasTagsSuboptimal = Object.fromEntries(
    layerCases.map((lc) => [lc, computeHasTagsSuboptimal(lc)]),
) as Record<LayerCase, HasTag[]>;

export function filterRedundantSolutionTags(solnTags: SolutionTag[]) {
    return solnTags.includes("Pres. 2 corners + Pres. centers")
        ? solnTags.filter(
              (solnTag) =>
                  !["Preserves 2 corners", "Preserves centers"].includes(
                      solnTag,
                  ),
          )
        : solnTags;
}

export function filterRedundantHasTags(hasTags: HasTag[]) {
    return hasTags.find(
        ([hasTags, _algs]) => hasTags === "Pres. 2 corners + Pres. centers",
    )
        ? hasTags.filter(
              ([hasTags, _algs]) =>
                  !["Preserves 2 corners", "Preserves centers"].includes(
                      hasTags,
                  ),
          )
        : hasTags;
}
