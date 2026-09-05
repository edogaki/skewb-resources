import { type Dispatch, type SetStateAction, useEffect } from "react";
import type { LayerCase } from "#/utils/layers-catalog/layerCases.gen";
import {
    type SortBy,
    sortLayerCases,
} from "#/utils/layers-catalog/sortMethods";

export default function LayerCaseSort({
    setLayerCasesToShow,
    sortBy,
    setSortBy,
}: {
    setLayerCasesToShow: Dispatch<SetStateAction<LayerCase[]>>;
    sortBy: SortBy;
    setSortBy: Dispatch<SetStateAction<SortBy>>;
}) {
    useEffect(() => {
        setLayerCasesToShow((lcs) => sortLayerCases(lcs, sortBy));
    }, [sortBy, setLayerCasesToShow]);
    return (
        <div className="flex gap-1 items-center">
            Sort by
            <select
                className="mr-1 border border-(--line) px-3 py-2 rounded-lg"
                id="layerCaseSortByCategory"
                value={sortBy.category}
                onChange={(e) =>
                    setSortBy((sb) => ({
                        ...sb,
                        category: e.target.value as SortBy["category"],
                    }))
                }
            >
                <option value="Case ID">Case ID</option>
                <option value="Number of moves">Number of moves</option>
            </select>
            <select
                className="mr-1 border border-(--line) px-3 py-2 rounded-lg"
                id="layerCaseSortByOrder"
                value={sortBy.order}
                onChange={(e) =>
                    setSortBy((sb) => ({
                        ...sb,
                        order: e.target.value as SortBy["order"],
                    }))
                }
            >
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>
        </div>
    );
}
