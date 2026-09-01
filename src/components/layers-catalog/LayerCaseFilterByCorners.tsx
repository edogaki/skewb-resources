import { type Dispatch, useEffect, useState } from "react";
import { allLayerCaseRotations } from "#/utils/layers-catalog/layerCaseMethods";
import type { LayerCase } from "#/utils/layers-catalog/layerCases.gen";
import type { FilterFunc } from "#/utils/layers-catalog/layersCatalogMethods";
import LayerCaseFilterByCornersGuide from "./LayerCaseFilterByCornersGuide";

export default function LayerCaseFilterByCorners({
    setFilterFunc,
}: {
    setFilterFunc: Dispatch<FilterFunc>;
}) {
    const [regex, setRegex] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [includeRotations, setIncludeRotations] = useState(true);
    useEffect(() => {
        try {
            const regexObj = new RegExp(regex, "i");
            setFilterFunc((layerCasesToShow: LayerCase[]) =>
                layerCasesToShow.filter((lc) =>
                    includeRotations
                        ? allLayerCaseRotations[lc].some(
                              (id) => !!regexObj.exec(id),
                          )
                        : !!regexObj.exec(lc),
                ),
            );
            setErrorMessage("");
        } catch (e) {
            if (e instanceof Error) {
                setErrorMessage(`Regex error: ${e.message}`);
            } else {
                setErrorMessage(
                    `Unexpected error, please message site owner: ${e}`,
                );
            }
        }
    }, [setFilterFunc, regex, includeRotations]);
    return (
        <div className="flex gap-10 flex-wrap">
            <div className="flex flex-col gap-2 w-100">
                <p>Use a regular expression to filter by Case ID.</p>
                <p>Examples:</p>
                <p>
                    <span className="font-mono font-bold inline-block p-1 px-2 border rounded-full">
                        sq
                    </span>{" "}
                    All cases with case ID containing "sq". (Rotations are
                    included in search results too, unless "Include rotations in
                    search" is disabled.)
                </p>
                <p>
                    <span className="font-mono font-bold inline-block p-1 px-2 border rounded-full">
                        a.*c
                    </span>{" "}
                    All cases with case ID starting with "a" followed (not
                    necessarily immediately) by "c". This will return all the
                    basic and opposite layers.
                </p>
                <p>
                    <span className="font-mono font-bold inline-block p-1 px-2 border rounded-full">
                        a(g|h)
                    </span>{" "}
                    All cases with case ID starting with "a" followed
                    immediately by either "g" or "h".
                </p>
                <p>
                    <span className="font-mono font-bold inline-block p-1 px-2 border rounded-full">
                        {"[^abcdefghijkl]{4}"}
                    </span>{" "}
                    All cases where none of the corners are at the bottom layer.
                </p>
                <div>
                    <input
                        autoComplete="off"
                        type="text"
                        placeholder="Regular expression"
                        className="w-full mr-2 p-3 border rounded-md border-(--line)"
                        value={regex}
                        onChange={(e) => setRegex(e.target.value)}
                    ></input>
                    <p className="text-red-400">{errorMessage}</p>
                </div>
                <div>
                    <input
                        type="checkbox"
                        checked={includeRotations}
                        name="useCornersFilter-includeRotations"
                        id="useCornersFilter-includeRotations"
                        className="mr-1"
                        onChange={(e) => setIncludeRotations(e.target.checked)}
                        autoComplete="off"
                    />
                    <label htmlFor="useCornersFilter-includeRotations">
                        Include rotations in search
                    </label>
                </div>
            </div>
            <div className="w-100">
                <div className="font-semibold">Guide</div>
                <LayerCaseFilterByCornersGuide />
                <p>
                    The order of letters matters too. abcd is the solved state
                    while adcb is a 7-mover, also known as the EG-2 layer.
                </p>
                <p>
                    Make sure the order of letters is correct. For example, acbd
                    is not a correct ID, since a and c are opposite corners.
                    Letters next to each other in the Case ID string must be
                    adjacent corners. dcba is another example of a correct ID.
                </p>
            </div>
        </div>
    );
}
