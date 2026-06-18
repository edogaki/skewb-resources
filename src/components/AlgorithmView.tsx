import type { RubikskewbAlg, WCAAlg } from "#/utils/alg";

export default function AlgorithmView({
    alg,
    isNotShortest,
    isHidden,
}: {
    alg: WCAAlg | RubikskewbAlg;
    isNotShortest?: boolean;
    isHidden?: boolean;
}) {
    const algString = alg.toString();
    return (
        <span
            className={`${algString.length === 0 && "text-[var(--line)]"} ${isNotShortest && "bg-[var(--line)]"} ${isHidden && "text-[rgba(0,0,0,0)] hover:text-[var(--sea-ink)] "}`}
        >
            {algString.length === 0 ? "(solved)" : algString}
        </span>
    );
}
