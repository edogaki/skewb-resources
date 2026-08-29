import { type Dispatch, type SetStateAction, useState } from "react";
import {
    type LayerCase,
    layerCases,
} from "#/utils/layers-catalog/layerCases.gen";
import {
    type CaseTag,
    caseTags,
    layerCaseTags,
} from "#/utils/layers-catalog/layerCaseTags.gen";
import {
    type SolutionTag,
    solutionTags,
} from "#/utils/layers-catalog/layerSolutionTags.gen";
import {
    layerCaseHasTagsShortest,
    layerCaseHasTagsSuboptimal,
} from "#/utils/layers-catalog/tagsMethods";
import { intersection } from "#/utils/renderer/math";

export default function LayerCaseFilter({
    setLayerCasesToShow,
}: {
    layerCasesToShow: LayerCase[];
    setLayerCasesToShow: Dispatch<SetStateAction<LayerCase[]>>;
}) {
    const hasTagsShortest = solutionTags;
    const hasTagsSuboptimal = solutionTags;
    const [useTagsFilter, setUseTagsFilter] = useState(true);
    const [useCornersFilter, setUseCornersFilter] = useState(false);
    const [caseTagsSelected, setCaseTagsSelected] = useState<CaseTag[]>([]);
    const [hasTagsShortestSelected, setHasTagsShortestSelected] = useState<
        SolutionTag[]
    >([]);
    const [hasTagsSuboptimalSelected, setHasTagsSuboptimalSelected] = useState<
        SolutionTag[]
    >([]);

    const allSelectedTags = [
        ...caseTagsSelected,
        ...hasTagsShortestSelected.map((tag) => `has:${tag}`),
        ...hasTagsSuboptimalSelected.map((tag) => `has sub:${tag}`),
    ];
    return (
        <div className="mb-3">
            <div className="flex flex-wrap mb-3">
                <div className="w-100">
                    <div className="flex items-center mb-3">
                        <input
                            type="checkbox"
                            checked={useTagsFilter}
                            name="useTagsFilter"
                            id="useTagsFilter"
                            className="mr-1"
                            onChange={(e) => setUseTagsFilter(e.target.checked)}
                            autoComplete="off"
                        />
                        <label htmlFor="useTagsFilter">
                            <h3
                                className={`text-xl font-semibold ${useTagsFilter ? "text-(--sea-ink)" : "text-(--sea-ink-softer)"}`}
                            >
                                Filter by Tags
                            </h3>
                        </label>
                    </div>
                    <div className="relative mr-3 border border-(--line) p-2">
                        <div className="h-80 overflow-scroll mb-2">
                            {caseTags.map((tag) => (
                                <div key={tag}>
                                    <input
                                        type="checkbox"
                                        checked={caseTagsSelected.includes(tag)}
                                        name={`useTagsFilter-${tag}`}
                                        id={`useTagsFilter-${tag}`}
                                        className="mr-1"
                                        onChange={(e) =>
                                            setCaseTagsSelected((ts) =>
                                                e.target.checked
                                                    ? ts.concat([tag]).sort()
                                                    : ts.filter(
                                                          (t) => t !== tag,
                                                      ),
                                            )
                                        }
                                        autoComplete="off"
                                    />
                                    <label htmlFor={`useTagsFilter-${tag}`}>
                                        {tag}
                                    </label>
                                </div>
                            ))}
                            {hasTagsShortest.map((tag) => (
                                <div key={tag}>
                                    <input
                                        type="checkbox"
                                        checked={hasTagsShortestSelected.includes(
                                            tag,
                                        )}
                                        name={`useTagsFilter-has:${tag}`}
                                        id={`useTagsFilter-has:${tag}`}
                                        className="mr-1"
                                        onChange={(e) =>
                                            setHasTagsShortestSelected((ts) =>
                                                e.target.checked
                                                    ? ts.concat([tag]).sort()
                                                    : ts.filter(
                                                          (t) => t !== tag,
                                                      ),
                                            )
                                        }
                                        autoComplete="off"
                                    />
                                    <label htmlFor={`useTagsFilter-has:${tag}`}>
                                        has:{tag}
                                    </label>
                                </div>
                            ))}
                            {hasTagsSuboptimal.map((tag) => (
                                <div key={tag}>
                                    <input
                                        type="checkbox"
                                        checked={hasTagsSuboptimalSelected.includes(
                                            tag,
                                        )}
                                        name={`useTagsFilter-has sub:${tag}`}
                                        id={`useTagsFilter-has sub:${tag}`}
                                        className="mr-1"
                                        onChange={(e) =>
                                            setHasTagsSuboptimalSelected(
                                                (ts) =>
                                                    e.target.checked
                                                        ? ts
                                                              .concat([tag])
                                                              .sort()
                                                        : ts.filter(
                                                              (t) => t !== tag,
                                                          ),
                                            )
                                        }
                                        autoComplete="off"
                                    />
                                    <label
                                        htmlFor={`useTagsFilter-has sub:${tag}`}
                                    >
                                        has sub:{tag}
                                    </label>
                                </div>
                            ))}
                        </div>
                        <div>
                            {allSelectedTags.map((tag, _i) => (
                                <span
                                    key={tag}
                                    className="inline-block p-1 rounded-full border border-(--line) px-2 text-sm"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div
                            className={`${useTagsFilter ? "hidden" : ""}absolute top-0 left-0 w-full h-full bg-(--line)`}
                        ></div>
                    </div>
                </div>
                <div className="w-100">
                    <div className="flex items-center mb-3">
                        <input
                            type="checkbox"
                            checked={useCornersFilter}
                            name="useCornersFilter"
                            id="useCornersFilter"
                            className="mr-1"
                            onChange={(e) =>
                                setUseCornersFilter(e.target.checked)
                            }
                            autoComplete="off"
                        />
                        <label htmlFor="useCornersFilter">
                            <h3
                                className={`text-xl font-semibold ${useCornersFilter ? "text-(--sea-ink)" : "text-(--sea-ink-softer)"}`}
                            >
                                Filter by Corners
                            </h3>
                        </label>
                    </div>
                    Filter By Corners coming soon!
                </div>
            </div>
            <button
                type="button"
                className="rounded-full border border-(--line) hover:border-(--line-heavy) bg-(--surface) px-5 py-2.5 text-sm font-semibold text-(--sea-ink) no-underline transition hover:-translate-y-0.5"
                onClick={() => {
                    setLayerCasesToShow(
                        !useTagsFilter
                            ? layerCases.slice()
                            : layerCases.filter(
                                  (lc) =>
                                      intersection<string>(
                                          layerCaseTags[lc],
                                          caseTagsSelected,
                                      ).length === caseTagsSelected.length &&
                                      intersection<string>(
                                          layerCaseHasTagsShortest[lc].map(
                                              ([tag, _algStrs]) => tag,
                                          ),
                                          hasTagsShortestSelected,
                                      ).length ===
                                          hasTagsShortestSelected.length &&
                                      intersection<string>(
                                          layerCaseHasTagsSuboptimal[lc].map(
                                              ([tag, _algStrs]) => tag,
                                          ),
                                          hasTagsSuboptimalSelected,
                                      ).length ===
                                          hasTagsSuboptimalSelected.length,
                              ),
                    );
                }}
            >
                Apply Filters
            </button>
        </div>
    );
}
