import { type Dispatch, type SetStateAction, useEffect, useRef } from "react";
import type { LayerCase } from "#/utils/layers-catalog/layerCases.gen";

function getSelectedStatus(
    selectedLayerCases: Partial<Record<LayerCase, boolean>>,
) {
    const values = Object.values(selectedLayerCases);
    const trueValues = values.filter((v) => v);
    if (trueValues.length === 0) return "no";
    if (trueValues.length === values.length) return "all";
    else return "some";
}

export default function SelectAllOrNone({
    layerCasesToShow,
    selectedLayerCases,
    setSelectedLayerCases,
}: {
    layerCasesToShow: LayerCase[];
    selectedLayerCases: Partial<Record<LayerCase, boolean>>;
    setSelectedLayerCases: Dispatch<
        SetStateAction<Partial<Record<LayerCase, boolean>>>
    >;
}) {
    const inputRef = useRef<HTMLInputElement>(null);
    const status = getSelectedStatus(selectedLayerCases);
    useEffect(() => {
        if (!inputRef.current) return;
        if (getSelectedStatus(selectedLayerCases) === "some")
            inputRef.current.indeterminate = true;
        else inputRef.current.indeterminate = false;
    }, [selectedLayerCases]);
    return (
        <label htmlFor="selectAllOrNone">
            <input
                type="checkbox"
                checked={status === "all"}
                name="selectAllOrNone"
                id="selectAllOrNone"
                className="mr-1"
                onChange={(e) =>
                    setSelectedLayerCases(
                        Object.fromEntries(
                            layerCasesToShow.map((lc) => [
                                lc,
                                e.target.checked,
                            ]),
                        ),
                    )
                }
                autoComplete="off"
                ref={inputRef}
            />{" "}
            Select/Unselect All
        </label>
    );
}
