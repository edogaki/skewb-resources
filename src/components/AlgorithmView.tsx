import type { RubikskewbAlg, WCAAlg } from "#/utils/alg";

export default function AlgorithmView({
    alg,
}: {
    alg: WCAAlg | RubikskewbAlg;
}) {
    const algString = alg.toString();
    console.log(algString);
    return (
        <span className={`${algString.length === 0 && "text-[var(--line)]"}`}>
            {algString.length === 0 ? "(solved)" : algString}
        </span>
    );
}
