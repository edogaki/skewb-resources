import { Color, tailwindColors } from "#/utils/renderer/color";
import type { LayerSolution } from "#/utils/skewbSolver";
import { CenterPiece, pieceColors } from "#/utils/skewbState";
import AlgorithmView from "./AlgorithmView";

const colorsReverseMap = Object.fromEntries(
    Object.entries(Color).map(([k, v]) => [v, k]),
);

export default function LayerSolutionView({
    layerSolution,
}: {
    layerSolution: LayerSolution;
}) {
    return (
        <div className="flex flex-col gap-2">
            {CenterPiece.map((c) => {
                const color: Color = pieceColors[c][0];
                const colorName = colorsReverseMap[color];
                return (
                    <div key={c}>
                        <span
                            className={`inline-block w-7 border border-[var(--line)] rounded-xl ${tailwindColors[color]}`}
                        >
                            &nbsp;
                        </span>
                        &nbsp;
                        <span>{colorName}</span>:{" "}
                        <AlgorithmView alg={layerSolution[c]} />
                    </div>
                );
            })}
        </div>
    );
}
