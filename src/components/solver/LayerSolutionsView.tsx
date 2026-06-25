import { useEffect, useState } from "react";
import { Color, tailwindColors } from "#/utils/renderer/color";
import type { RubikskewbAlg, RubikskewbTurn } from "#/utils/solver/alg";
import { type LayerSolutions, searchTurns } from "#/utils/solver/skewbSolver";
import type { CenterPiece, Piece, SkewbState } from "#/utils/solver/skewbState";
import AlgorithmView from "./AlgorithmView";

const colorsReverseMap = Object.fromEntries(
    Object.entries(Color).map(([k, v]) => [v, k]),
);

function algLength(alg: RubikskewbAlg) {
    return alg.turns.filter((t) =>
        (searchTurns as readonly RubikskewbTurn[]).includes(t),
    ).length;
}

export default function LayerSolutionsView({
    layerSolutions,
    pieceColors,
    skewbState,
}: {
    layerSolutions: LayerSolutions;
    pieceColors: Record<Piece, Color[]>;
    skewbState: SkewbState;
}) {
    const centersToShow = skewbState.uniqueColorCenters();
    const shortestSolution = Object.fromEntries(
        centersToShow.map((c) => [
            c,
            layerSolutions[c][0] ? algLength(layerSolutions[c][0]) : Infinity,
        ]),
    ) as Record<CenterPiece, number>;

    const [longestSolutionShown, setLongestSolutionShown] =
        useState(shortestSolution);
    const isMoreSolutionsAvailable = Object.fromEntries(
        centersToShow.map((c) => [
            c,
            layerSolutions[c].length > 0 &&
                algLength(layerSolutions[c][layerSolutions[c].length - 1]) >
                    shortestSolution[c],
        ]),
    ) as Record<CenterPiece, boolean>;

    useEffect(() => {
        for (const c of centersToShow) {
            if (
                shortestSolution[c] !== Infinity &&
                longestSolutionShown[c] === Infinity
            ) {
                setLongestSolutionShown((lss) => ({
                    ...lss,
                    [c]: shortestSolution[c],
                }));
            }
        }
    }, [shortestSolution, longestSolutionShown, centersToShow]);

    return (
        <div>
            <div className="flex flex-col gap-2">
                {centersToShow.map((c) => {
                    const color: Color = pieceColors[c][0];
                    const colorName = colorsReverseMap[color];
                    return (
                        <div key={c}>
                            <span
                                className={`inline-block w-7 border border-(--line) rounded-xl ${tailwindColors[color]}`}
                            >
                                &nbsp;
                            </span>
                            &nbsp;
                            <span>{colorName}</span>:{" "}
                            {layerSolutions[c].map((solution, i) => {
                                return (
                                    algLength(solution) <=
                                        longestSolutionShown[c] && (
                                        <span key={solution.toString()}>
                                            <AlgorithmView alg={solution} />
                                            {i !==
                                                layerSolutions[c].length - 1 &&
                                                ", "}
                                        </span>
                                    )
                                );
                            })}
                            {isMoreSolutionsAvailable[c] && (
                                <button
                                    type="button"
                                    className="p-1 rounded-full border border-[rgba(23,58,64,0.2)] bg-white/30 px-2.5"
                                    onClick={() =>
                                        setLongestSolutionShown((lss) => ({
                                            ...lss,
                                            [c]:
                                                longestSolutionShown[c] ===
                                                shortestSolution[c]
                                                    ? lss[c] + 2
                                                    : shortestSolution[c],
                                        }))
                                    }
                                >
                                    {longestSolutionShown[c] ===
                                    shortestSolution[c]
                                        ? `Show longer solutions`
                                        : "Hide longer solutions"}{" "}
                                </button>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
