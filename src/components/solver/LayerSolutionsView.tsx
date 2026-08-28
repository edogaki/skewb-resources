import { Fragment, useCallback, useMemo, useState } from "react";
import { pluralize } from "#/utils/methods";
import { Color, tailwindColors } from "#/utils/renderer/color";
import type { LayerSolutions, SolverOptions } from "#/utils/solver/skewbSolver";
import type { CenterPiece, Piece, SkewbState } from "#/utils/solver/skewbState";
import AlgorithmView from "./AlgorithmView";

const colorsReverseMap = Object.fromEntries(
    Object.entries(Color).map(([k, v]) => [v, k]),
);

export default function LayerSolutionsView({
    layerSolutions,
    pieceColors,
    skewbState,
    options,
}: {
    layerSolutions: LayerSolutions;
    pieceColors: Record<Piece, Color[]>;
    skewbState: SkewbState;
    options: SolverOptions;
}) {
    const [optsCopy] = useState(options);
    const centersToShow = skewbState.uniqueColorCenters();
    const [numGroupsToShow, setNumGroupsToShow] = useState(
        Object.fromEntries(
            centersToShow.map((c) => [
                c,
                optsCopy.hideSolutionsInitially ? 0 : 1,
            ]),
        ) as Record<CenterPiece, number>,
    );

    const [isShowShortestLength, setIsShowShortestLength] = useState(
        Object.fromEntries(centersToShow.map((c) => [c, false])) as Record<
            CenterPiece,
            boolean
        >,
    );

    const numGroupsTotal = Object.fromEntries(
        centersToShow.map((c) => [c, Object.keys(layerSolutions[c]).length]),
    ) as Record<CenterPiece, number>;

    const groupsToShow = Object.fromEntries(
        centersToShow.map((c) => [
            c,
            Object.keys(layerSolutions[c])
                .map(Number)
                .slice(0, numGroupsToShow[c]) as number[],
        ]),
    ) as Record<CenterPiece, number[]>;

    return (
        <div>
            <div className="flex flex-col gap-2">
                {optsCopy.hideSolutionsInitially &&
                Object.values(isShowShortestLength).some((x) => x === false) ? (
                    <div>
                        <button
                            type="button"
                            className="p-1 rounded-full border border-(--line) hover:border-(--line-heavy) bg-(--surface) px-2.5"
                            onClick={() =>
                                setIsShowShortestLength(
                                    Object.fromEntries(
                                        centersToShow.map((c) => [c, true]),
                                    ) as Record<CenterPiece, boolean>,
                                )
                            }
                        >
                            Show all hints
                        </button>
                    </div>
                ) : null}
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
                            <span className="inline-block py-1.5">
                                {colorName}
                            </span>
                            :&nbsp;
                            {!optsCopy.hideSolutionsInitially ? null : isShowShortestLength[
                                  c
                              ] ? (
                                <span>
                                    {Object.keys(layerSolutions[c])[0]}
                                    {pluralize(
                                        " move",
                                        Number(
                                            Object.keys(layerSolutions[c])[0],
                                        ),
                                    )}
                                    {", "}
                                    {
                                        layerSolutions[c][
                                            Number(
                                                Object.keys(
                                                    layerSolutions[c],
                                                )[0],
                                            )
                                        ].length
                                    }
                                    {pluralize(
                                        " optimal solution",
                                        layerSolutions[c][
                                            Number(
                                                Object.keys(
                                                    layerSolutions[c],
                                                )[0],
                                            )
                                        ].length,
                                    )}
                                </span>
                            ) : Object.keys(layerSolutions[c]).length > 0 ? (
                                <button
                                    type="button"
                                    className="p-1 rounded-full border border-(--line) hover:border-(--line-heavy) bg-(--surface) px-2.5"
                                    onClick={() =>
                                        setIsShowShortestLength((issl) => ({
                                            ...issl,
                                            [c]: !issl[c],
                                        }))
                                    }
                                >
                                    Show hint
                                </button>
                            ) : null}
                            <div>
                                {groupsToShow[c].map((g) => (
                                    <div key={g}>
                                        <span>{g}-movers: </span>
                                        {layerSolutions[c][g].map(
                                            (solution, i) => (
                                                <Fragment
                                                    key={solution.toString()}
                                                >
                                                    <AlgorithmView
                                                        alg={solution}
                                                    />
                                                    {i <
                                                        layerSolutions[c][g]
                                                            .length -
                                                            1 && ", "}
                                                </Fragment>
                                            ),
                                        )}
                                    </div>
                                ))}
                            </div>
                            {numGroupsTotal[c] > 0 && (
                                <button
                                    type="button"
                                    className="p-1 rounded-full border border-(--line) hover:border-(--line-heavy) bg-(--surface) px-2.5"
                                    onClick={() =>
                                        setNumGroupsToShow((ngs) => ({
                                            ...ngs,
                                            [c]:
                                                numGroupsToShow[c] >=
                                                numGroupsTotal[c]
                                                    ? 0
                                                    : numGroupsToShow[c] + 1,
                                        }))
                                    }
                                >
                                    {numGroupsToShow[c] === numGroupsTotal[c]
                                        ? "Hide solutions"
                                        : numGroupsToShow[c] === 0
                                          ? "Show solutions"
                                          : "Show longer solutions"}
                                </button>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
