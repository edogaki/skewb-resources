import { useHeavyObjectsLoader } from "#/utils/heavyObjectsLoader";
import type { LayerCase } from "#/utils/layers-catalog/layerCases.gen";
import { filterRedundantHasTags } from "#/utils/layers-catalog/tagsMethods";
import Tooltip from "../Tooltip";

export default function TagsViewForCase({
    layerCase,
}: {
    layerCase: LayerCase;
}) {
    const layerCaseTags = useHeavyObjectsLoader(
        "#/utils/layers-catalog/layerCaseTags.gen",
        async () =>
            (await import("#/utils/layers-catalog/layerCaseTags.gen"))
                .layerCaseTags,
    );

    const layerCaseHasTagsShortest = useHeavyObjectsLoader(
        "#/utils/layers-catalog/layerCaseHasTagsShortest.gen",
        async () =>
            (
                await import(
                    "#/utils/layers-catalog/layerCaseHasTagsShortest.gen"
                )
            ).layerCaseHasTagsShortest,
    );

    const layerCaseHasTagsSuboptimal = useHeavyObjectsLoader(
        "#/utils/layers-catalog/layerCaseHasTagsSuboptimal.gen",
        async () =>
            (
                await import(
                    "#/utils/layers-catalog/layerCaseHasTagsSuboptimal.gen"
                )
            ).layerCaseHasTagsSuboptimal,
    );

    const caseTags = layerCaseTags?.[layerCase] || [];
    const hasTagsShortest = layerCaseHasTagsShortest?.[layerCase] || [];
    const hasTagsSuboptimal = layerCaseHasTagsSuboptimal?.[layerCase] || [];
    return (
        <div>
            {caseTags.map((caseTag) => (
                <span
                    key={caseTag}
                    className="inline-block p-1 rounded-full border border-(--line) px-2 text-sm"
                >
                    {caseTag}
                </span>
            ))}
            {filterRedundantHasTags(hasTagsShortest).map(([tag, algStrs]) => (
                <span key={tag}>
                    <Tooltip
                        content={algStrs.map((algStr) => (
                            <div key={algStr}>{algStr}</div>
                        ))}
                    >
                        <div className="inline-block p-1 rounded-full border border-(--line) px-2 text-sm">
                            has:{tag}
                        </div>
                    </Tooltip>
                </span>
            ))}
            {filterRedundantHasTags(hasTagsSuboptimal).map(([tag, algStrs]) => (
                <span key={tag}>
                    <Tooltip
                        content={algStrs.map((algStr) => (
                            <div key={algStr}>{algStr}</div>
                        ))}
                    >
                        <div className="inline-block p-1 rounded-full border border-(--line) px-2 text-sm">
                            has sub:{tag}
                        </div>
                    </Tooltip>
                </span>
            ))}
        </div>
    );
}
