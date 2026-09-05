import type { CaseTag, HasTag, SolutionTag } from "./baseMethods";

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
