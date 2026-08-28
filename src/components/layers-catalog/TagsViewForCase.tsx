import type { LayerCase } from "#/utils/layers-catalog/layerCases.gen";
import type { CaseTag } from "#/utils/layers-catalog/layerCaseTags.gen";
import { layerCaseHasTagsShortest } from "#/utils/layers-catalog/tagsMethods";
import Tooltip from "../Tooltip";

export default function TagsViewForCase({
    layerCase,
    caseTags,
}: {
    layerCase: LayerCase;
    caseTags: CaseTag[];
}) {
    const hasTags = layerCaseHasTagsShortest[layerCase];
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
            {hasTags.map(([tag, algStrs]) => (
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
        </div>
    );
}
