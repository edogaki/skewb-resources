import {
    layerSolutionTags,
    solutionTagAbbrev,
} from "#/utils/layers-catalog/layerSolutionTags.gen";
import { filterRedundantSolutionTags } from "#/utils/layers-catalog/tagsMethods";
import type { RubikskewbAlg, WCAAlg } from "#/utils/solver/alg";
import Tooltip from "../Tooltip";

export default function AlgorithmView({
    alg,
    isNotShortest,
    isHidden,
    includeTags,
}: {
    alg: WCAAlg | RubikskewbAlg;
    isNotShortest?: boolean;
    isHidden?: boolean;
    includeTags?: boolean;
}) {
    const algString = alg.toString();
    return (
        <span
            className={`${algString.length === 0 && "text-(--line)"} ${isNotShortest && "bg-(--line)"} ${isHidden && "text-[rgba(0,0,0,0)] hover:text-(--sea-ink)"}`}
        >
            {algString.length === 0 ? "(solved)" : algString}
            {includeTags &&
                filterRedundantSolutionTags(layerSolutionTags[algString]).map(
                    (tag) => (
                        <Tooltip key={tag} content={tag}>
                            <span className="text-xs align-sub">
                                {solutionTagAbbrev[tag]}
                            </span>
                        </Tooltip>
                    ),
                )}
        </span>
    );
}
