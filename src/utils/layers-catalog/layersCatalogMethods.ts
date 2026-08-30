import type { LayerCase } from "./layerCases.gen";

export type FilterFunc = (layerCasesToSelect: LayerCase[]) => LayerCase[];
