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
}[] = [
    {
        optionName: "Filter By Tags",
        Component: LayerCaseFilterByTags,
    },
    {
        optionName: "Filter By Corners",
        Component: LayerCaseFilterByCorners,
    },
];

export default function LayerCaseFilter({
    setLayerCasesToShow,
}: {
    layerCasesToShow: LayerCase[];
    setLayerCasesToShow: Dispatch<SetStateAction<LayerCase[]>>;
}) {
    const [filterFuncs, setFilterFuncs] = useState<FilterFunc[]>([]);
    const [isUseFilter, setIsUseFilter] = useState<boolean[]>(
        filterOptions.map(() => false),
    );

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
            <div className="flex flex-wrap mb-3">
                {filterOptions.map(({ optionName, Component }, index) => (
                    <div className="w-100" key={optionName}>
                        <div className="flex items-center mb-3">
                            <input
                                type="checkbox"
                                checked={isUseFilter[index]}
                                name="useTagsFilter"
                                id="useTagsFilter"
                                className="mr-1"
                                onChange={(e) =>
                                    setIsUseFilter((iuf) => {
                                        const newIuf = iuf.slice();
                                        newIuf[index] = e.target.checked;
                                        return newIuf;
                                    })
                                }
                                autoComplete="off"
                            />
                            <label htmlFor="useTagsFilter">
                                <h3
                                    className={`text-xl font-semibold ${isUseFilter[index] ? "text-(--sea-ink)" : "text-(--sea-ink-softer)"}`}
                                >
                                    {optionName}
                                </h3>
                            </label>
                        </div>
                        <div className="relative border border-(--line) p-2">
                            <Component
                                setFilterFunc={setFilterFuncByIndex[index]}
                            ></Component>
                            <div
                                className={`${isUseFilter[index] ? "hidden" : ""}absolute top-0 left-0 w-full h-full bg-(--line)`}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
            <button
                type="button"
                className="rounded-full border border-(--line) hover:border-(--line-heavy) bg-(--surface) px-5 py-2.5 text-sm font-semibold text-(--sea-ink) no-underline transition hover:-translate-y-0.5"
                onClick={() => {
                    setLayerCasesToShow(() => {
                        let newLayerCases = layerCases.slice();
                        for (const filterFunc of filterFuncs) {
                            console.log({ newLayerCases });
                            newLayerCases = filterFunc(newLayerCases);
                        }
                        console.log({ newLayerCases });
                        return newLayerCases;
                    });
                }}
            >
                Apply Filters
            </button>
        </div>
    );
}
