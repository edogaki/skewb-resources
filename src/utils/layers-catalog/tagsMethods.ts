import { type LayerCase, layerCases } from "./layerCases.gen";
import type { CaseTag } from "./layerCaseTags.gen";
import { layerSolutionsComplete } from "./layerSolutionsComplete.gen";
import { layerSolutionTags, type SolutionTag } from "./layerSolutionTags.gen";

export type Tag = CaseTag | SolutionTag;
export type HasTag = [SolutionTag, string[]];

export const caseTagCategories: [string, CaseTag[]][] = [
    [
        "Number of moves",
        [
            "0-mover",
            "1-mover",
            "2-mover",
            "3-mover",
            "4-mover",
            "5-mover",
            "6-mover",
            "7-mover",
        ],
    ],
    [
        "Layer Type",
        [
            "Basic layer",
            "Adjacent layer",
            "Opposite layer",
            "Diagadj layer",
            "One-bar layer",
            "No-bar layer",
        ],
    ],
];

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

export function filterRedundantSolutionTags(
    solnTags: SolutionTag[],
): SolutionTag[] {
    return solnTags.includes("Pres. 2 corners + Pres. centers")
        ? solnTags.filter(
              (solnTag) =>
                  !["Preserves 2 corners", "Preserves centers"].includes(
                      solnTag,
                  ),
          )
        : solnTags;
}

export function filterRedundantHasTags(hasTags: HasTag[]): HasTag[] {
    const doubleTag = hasTags.find(
        ([hasTag, _algs]) => hasTag === "Pres. 2 corners + Pres. centers",
    );
    if (!doubleTag) return hasTags;

    const filteredTags = hasTags.map(
        ([hasTag, algs]) =>
            [
                hasTag,
                ["Preserves 2 corners", "Preserves centers"].includes(hasTag)
                    ? algs.filter((alg) => !doubleTag[1].includes(alg))
                    : algs,
            ] as HasTag,
    );

    return filteredTags.filter(([_hasTag, algs]) => algs.length > 0);
}
