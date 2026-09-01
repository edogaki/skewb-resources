import {
    type Dispatch,
    Fragment,
    type SetStateAction,
    useEffect,
    useState,
} from "react";
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
    caseTagCategories,
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

    useEffect(() => {
        const caseTagsSelectedByCategory = caseTagCategories.map(
            ([catName, catTags]) =>
                [
                    catName,
                    catTags.filter((catTag) =>
                        caseTagsSelected.includes(catTag),
                    ),
                ] as const,
        );
        setFilterFunc((layerCasesToShow: LayerCase[]) =>
            layerCasesToShow.filter((lc) => {
                return (
                    (intersection<string>(
                        caseTagsSelectedByCategory[0][1],
                        layerCaseTags[lc],
                    ).length > 0 ||
                        caseTagsSelectedByCategory[0][1].length === 0) &&
                    (intersection<string>(
                        caseTagsSelectedByCategory[1][1],
                        layerCaseTags[lc],
                    ).length > 0 ||
                        caseTagsSelectedByCategory[1][1].length === 0) &&
                    (intersection<string>(
                        layerCaseHasTagsShortest[lc].map(
                            ([tag, _algStrs]) => tag,
                        ),
                        hasTagsShortestSelected,
                    ).length > 0 ||
                        hasTagsShortestSelected.length === 0) &&
                    (intersection<string>(
                        layerCaseHasTagsSuboptimal[lc].map(
                            ([tag, _algStrs]) => tag,
                        ),
                        hasTagsSuboptimalSelected,
                    ).length > 0 ||
                        hasTagsSuboptimalSelected.length === 0)
                );
            }),
        );
    }, [
        setFilterFunc,
        caseTagsSelected,
        hasTagsShortestSelected,
        hasTagsSuboptimalSelected,
    ]);

    return (
        <div className="flex gap-10 flex-wrap">
            {caseTagCategories.map(([category, tags]) => (
                <div key={category}>
                    <div className="font-semibold">{category}</div>
                    {tags.map((tag) => (
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
                            <label htmlFor={`useTagsFilter-${tag}`}>
                                {tag}
                            </label>
                        </div>
                    ))}
                </div>
            ))}
            <div>
                <div className="font-semibold">Has an optimal alg that is:</div>
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
                            {tag}
                        </label>
                    </div>
                ))}
            </div>
            <div>
                <div className="font-semibold">
                    Has a suboptimal alg that is:
                </div>
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
                            {tag}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
}
