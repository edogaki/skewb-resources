import { type LayerCase, layerCases } from "./layerCases.gen";
import type { CaseTag } from "./layerCaseTags.gen";
import { layerSolutionsComplete } from "./layerSolutionsComplete.gen";
import { layerSolutionTags, type SolutionTag } from "./layerSolutionTags.gen";

export type Tag = CaseTag | SolutionTag;
export type JoinedTag = string;
export type HasTag = [JoinedTag, string[]];

function computeHasTagsShortest(lc: LayerCase): HasTag[] {
    const hasTags = {} as Record<JoinedTag, string[]>;
    const shortestMover = Number(Object.keys(layerSolutionsComplete[lc])[0]);
    for (const algStr of layerSolutionsComplete[lc][shortestMover]) {
        const solutionTagsCopy = layerSolutionTags[algStr];
        if (
            solutionTagsCopy.includes("Preserves 2 corners") &&
            solutionTagsCopy.includes("Preserves centers")
        ) {
            const joinedTag = "Pres. 2 corners + Pres. centers";
            hasTags[joinedTag] = hasTags[joinedTag] || [];
            hasTags[joinedTag].push(algStr);
            solutionTagsCopy.splice(
                solutionTagsCopy.indexOf("Preserves 2 corners"),
                1,
            );
            solutionTagsCopy.splice(
                solutionTagsCopy.indexOf("Preserves centers"),
                1,
            );
        }
        for (const solutionTag of solutionTagsCopy) {
            hasTags[solutionTag] = hasTags[solutionTag] || [];
            hasTags[solutionTag].push(algStr);
        }
    }
    return Object.entries(hasTags) as [JoinedTag, string[]][];
}

export const layerCaseHasTagsShortest = Object.fromEntries(
    layerCases.map((lc) => [lc, computeHasTagsShortest(lc)]),
) as Record<LayerCase, HasTag[]>;

function computeHasTagsSuboptimal(lc: LayerCase): HasTag[] {
    const hasTags = {} as Record<JoinedTag, string[]>;
    for (const n of Object.keys(layerSolutionsComplete[lc])
        .slice(1)
        .map(Number)) {
        for (const algStr of layerSolutionsComplete[lc][n]) {
            const solutionTagsCopy = layerSolutionTags[algStr];
            if (
                solutionTagsCopy.includes("Preserves 2 corners") &&
                solutionTagsCopy.includes("Preserves centers")
            ) {
                const joinedTag = "Pres. 2 corners + Pres. centers";
                hasTags[joinedTag] = hasTags[joinedTag] || [];
                hasTags[joinedTag].push(algStr);
                solutionTagsCopy.splice(
                    solutionTagsCopy.indexOf("Preserves 2 corners"),
                    1,
                );
                solutionTagsCopy.splice(
                    solutionTagsCopy.indexOf("Preserves centers"),
                    1,
                );
            }
            for (const solutionTag of solutionTagsCopy) {
                hasTags[solutionTag] = hasTags[solutionTag] || [];
                hasTags[solutionTag].push(algStr);
            }
        }
    }
    return Object.entries(hasTags) as [JoinedTag, string[]][];
}

export const layerCaseHasTagsSuboptimal = Object.fromEntries(
    layerCases.map((lc) => [lc, computeHasTagsSuboptimal(lc)]),
) as Record<LayerCase, HasTag[]>;
