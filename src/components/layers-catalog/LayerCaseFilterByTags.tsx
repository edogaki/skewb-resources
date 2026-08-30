import { type Dispatch, type SetStateAction, useEffect, useState } from "react";
import type { LayerCase } from "#/utils/layers-catalog/layerCases.gen";
import {
    type CaseTag,
    caseTags,
    layerCaseTags,
} from "#/utils/layers-catalog/layerCaseTags.gen";
import {
    type SolutionTag,
    solutionTags,
} from "#/utils/layers-catalog/layerSolutionTags.gen";
import type { FilterFunc } from "#/utils/layers-catalog/layersCatalogMethods";
import {
    layerCaseHasTagsShortest,
    layerCaseHasTagsSuboptimal,
} from "#/utils/layers-catalog/tagsMethods";
import { intersection } from "#/utils/renderer/math";

export default function LayerCaseFilterByTags({
    setFilterFunc,
}: {
    setFilterFunc: Dispatch<FilterFunc>;
}) {
    const hasTagsShortest = solutionTags;
    const hasTagsSuboptimal = solutionTags;

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

    useEffect(() => {
        setFilterFunc((layerCasesToShow: LayerCase[]) =>
            layerCasesToShow.filter(
                (lc) =>
                    intersection<string>(layerCaseTags[lc], caseTagsSelected)
                        .length === caseTagsSelected.length &&
                    intersection<string>(
                        layerCaseHasTagsShortest[lc].map(
                            ([tag, _algStrs]) => tag,
                        ),
                        hasTagsShortestSelected,
                    ).length === hasTagsShortestSelected.length &&
                    intersection<string>(
                        layerCaseHasTagsSuboptimal[lc].map(
                            ([tag, _algStrs]) => tag,
                        ),
                        hasTagsSuboptimalSelected,
                    ).length === hasTagsSuboptimalSelected.length,
            ),
        );
    }, [
        setFilterFunc,
        caseTagsSelected,
        hasTagsShortestSelected,
        hasTagsSuboptimalSelected,
    ]);

    return (
        <>
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
                                        : ts.filter((t) => t !== tag),
                                )
                            }
                            autoComplete="off"
                        />
                        <label htmlFor={`useTagsFilter-${tag}`}>{tag}</label>
                    </div>
                ))}
                {hasTagsShortest.map((tag) => (
                    <div key={tag}>
                        <input
                            type="checkbox"
                            checked={hasTagsShortestSelected.includes(tag)}
                            name={`useTagsFilter-has:${tag}`}
                            id={`useTagsFilter-has:${tag}`}
                            className="mr-1"
                            onChange={(e) =>
                                setHasTagsShortestSelected((ts) =>
                                    e.target.checked
                                        ? ts.concat([tag]).sort()
                                        : ts.filter((t) => t !== tag),
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
                            checked={hasTagsSuboptimalSelected.includes(tag)}
                            name={`useTagsFilter-has sub:${tag}`}
                            id={`useTagsFilter-has sub:${tag}`}
                            className="mr-1"
                            onChange={(e) =>
                                setHasTagsSuboptimalSelected((ts) =>
                                    e.target.checked
                                        ? ts.concat([tag]).sort()
                                        : ts.filter((t) => t !== tag),
                                )
                            }
                            autoComplete="off"
                        />
                        <label htmlFor={`useTagsFilter-has sub:${tag}`}>
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
        </>
    );
}
