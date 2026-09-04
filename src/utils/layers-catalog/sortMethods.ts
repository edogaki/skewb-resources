import type { LayerCase } from "./layerCases.gen";
import { layerSolutionsComplete } from "./layerSolutionsComplete.gen";

export type SortBy = {
    category: "Case ID" | "Number of moves";
    order: "asc" | "desc";
};

export function sortLayerCases(lcs: LayerCase[], sortBy: SortBy) {
    const mul = sortBy.order === "desc" ? -1 : 1;
    return sortBy.category === "Number of moves"
        ? lcs
              .slice()
              .sort(
                  (lc1, lc2) =>
                      mul *
                      (Number(Object.keys(layerSolutionsComplete[lc1])[0]) -
                          Number(Object.keys(layerSolutionsComplete[lc2])[0])),
              )
        : lcs.slice().sort((lc1, lc2) => mul * lc1.localeCompare(lc2));
}
