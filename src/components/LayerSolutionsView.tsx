import { useEffect, useState } from "react";
import type { RubikskewbAlg, RubikskewbTurn } from "#/utils/alg";
import { Color, tailwindColors } from "#/utils/renderer/color";
import { type LayerSolutions, searchTurns } from "#/utils/skewbSolver";
import { CenterPiece, pieceColors } from "#/utils/skewbState";
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
}: {
    layerSolutions: LayerSolutions;
}) {
    const shortestSolution = Object.fromEntries(
        CenterPiece.map((c) => [
            c,
            layerSolutions[c][0] ? algLength(layerSolutions[c][0]) : Infinity,
        ]),
    ) as Record<CenterPiece, number>;

    const [longestSolutionShown, setLongestSolutionShown] =
        useState(shortestSolution);
    const isMoreSolutionsAvailable = Object.fromEntries(
        CenterPiece.map((c) => [
            c,
            layerSolutions[c].length > 0 &&
                algLength(layerSolutions[c][layerSolutions[c].length - 1]) >
                    shortestSolution[c],
        ]),
    ) as Record<CenterPiece, boolean>;

    useEffect(() => {
        for (const c of CenterPiece) {
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
    }, [shortestSolution, longestSolutionShown]);

    return (
        <div>
            {/*
            <div
                className={`mb-2 ${hasAtLeastOneCenterWithMultipleSolns ? "" : "hidden"}`}
            >
                <input
                    type="checkbox"
                    id="showAdditionalSolutions"
                    checked={showAdditionalSolutions}
                    onChange={(e) =>
                        setShowAdditionalSolutions(e.target.checked)
                    }
                    className="mr-1"
                />
                <label htmlFor="showAdditionalSolutions">
                    Show additional solutions
                </label>
            </div>
            */}
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
                                    className="p-1 rounded-full border border-[rgba(23,58,64,0.2)]"
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
