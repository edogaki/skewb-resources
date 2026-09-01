import {
    type Dispatch,
    type FC,
    type SetStateAction,
    useMemo,
    useState,
} from "react";
import {
    type LayerCase,
    layerCases,
} from "#/utils/layers-catalog/layerCases.gen";
import type { FilterFunc } from "#/utils/layers-catalog/layersCatalogMethods";
import LayerCaseFilterByCorners from "./LayerCaseFilterByCorners";
import LayerCaseFilterByTags from "./LayerCaseFilterByTags";

const filterOptions: {
    optionName: string;
    Component: FC<{ setFilterFunc: Dispatch<FilterFunc> }>;
    width: string;
}[] = [
    {
        optionName: "Filter By Tags",
        Component: LayerCaseFilterByTags,
        width: "w-full",
    },
    {
        optionName: "Filter By Corners",
        Component: LayerCaseFilterByCorners,
        width: "w-full",
    },
];

export default function LayerCaseFilter({
    setLayerCasesToShow,
}: {
    layerCasesToShow: LayerCase[];
    setLayerCasesToShow: Dispatch<SetStateAction<LayerCase[]>>;
}) {
    const [filterFuncs, setFilterFuncs] = useState<FilterFunc[]>([]);

    const setFilterFuncByIndex = useMemo(
        () =>
            filterOptions.map(
                (_, index) => (filterFunc: FilterFunc) =>
                    setFilterFuncs((ffs) => {
                        const newFfs = ffs.slice();
                        newFfs[index] = filterFunc;
                        return newFfs;
                    }),
            ),
        [],
    );
    return (
        <div className="mb-3">
            <div className="flex flex-wrap mb-3 gap-10">
                {filterOptions.map(
                    ({ optionName, Component, width }, index) => (
                        <div className={width} key={optionName}>
                            <h3 className="text-xl font-semibold text-(--sea-ink) mb-1">
                                {optionName}
                            </h3>
                            <Component
                                setFilterFunc={setFilterFuncByIndex[index]}
                            ></Component>
                        </div>
                    ),
                )}
            </div>
            <button
                type="button"
                className="rounded-full border border-(--line) hover:border-(--line-heavy) bg-(--surface) px-5 py-2.5 text-sm font-semibold text-(--sea-ink) no-underline transition hover:-translate-y-0.5"
                onClick={() => {
                    setLayerCasesToShow(() => {
                        let newLayerCases = layerCases.slice();
                        for (const filterFunc of filterFuncs) {
                            newLayerCases = filterFunc(newLayerCases);
                        }
                        return newLayerCases;
                    });
                }}
            >
                Apply Filters
            </button>
        </div>
    );
}
