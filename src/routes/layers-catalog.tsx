import { createFileRoute } from "@tanstack/react-router";
import { Fragment, useState } from "react";
import TagsView from "#/components/layers-catalog/TagsView";
import SkewbRenderer from "#/components/SkewbRenderer";
import AlgorithmView from "#/components/solver/AlgorithmView";
import { layerCaseToSkewbState } from "#/utils/layers-catalog/layerCaseMethods";
import {
    type LayerCase,
    layerCases,
} from "#/utils/layers-catalog/layerCases.gen";
import { layerCaseTags } from "#/utils/layers-catalog/layerCaseTags.gen";
import { preloadLayerSolutionsComplete } from "#/utils/layers-catalog/layerSolutionMethods";
import { RubikskewbAlg } from "#/utils/solver/alg";

export const Route = createFileRoute("/layers-catalog")({
    component: RouteComponent,
    head: () => ({
        meta: [
            {
                title: "Layers Catalog | Skewb Resources",
            },
            {
                property: "og:description",
                content: "Skewb Layers Catalog",
            },
        ],
    }),
});

function RouteComponent() {
    const optsCopy = {
        hideSolutionsInitially: false,
    };

    const [loadLayerSolutionsStatus, setLoadLayerSolutionsStatus] =
        useState("unloaded");

    const [layerSolutionsComplete, setLayerSolutionsComplete] = useState<Record<
        LayerCase,
        Record<number, string[]>
    > | null>(null);

    const [numGroupsToShow, setNumGroupsToShow] = useState(
        Object.fromEntries(
            layerCases.map((lc) => [
                lc,
                optsCopy.hideSolutionsInitially ? 0 : 1,
            ]),
        ) as Record<LayerCase, number>,
    );

    const [isShowShortestLength, setIsShowShortestLength] = useState(
        Object.fromEntries(layerCases.map((lc) => [lc, false])) as Record<
            LayerCase,
            boolean
        >,
    );

    const numGroupsTotal = Object.fromEntries(
        layerCases.map((lc) => [
            lc,
            Object.keys(layerSolutionsComplete?.[lc] || {}).length,
        ]),
    ) as Record<LayerCase, number>;

    const groupsToShow = Object.fromEntries(
        layerCases.map((lc) => [
            lc,
            Object.keys(layerSolutionsComplete?.[lc] || {})
                .map(Number)
                .slice(0, numGroupsToShow[lc]) as number[],
        ]),
    ) as Record<LayerCase, number[]>;

    return (
        <main className="page-wrap px-4 py-12">
            <section className="island-shell rounded-2xl p-6 sm:p-8 mb-8">
                <h1 className="display-title mb-3 text-4xl font-bold text-(--sea-ink) sm:text-5xl">
                    Skewb Layers Catalog
                </h1>
                <button
                    type="button"
                    className="p-1 rounded-full border border-(--line) hover:border-(--line-heavy) bg-(--surface) px-2.5 disabled:opacity-50"
                    onClick={async () => {
                        setLoadLayerSolutionsStatus("loading");
                        setLayerSolutionsComplete(
                            await preloadLayerSolutionsComplete(),
                        );
                        setLoadLayerSolutionsStatus("finished");
                    }}
                    disabled={loadLayerSolutionsStatus !== "unloaded"}
                >
                    {loadLayerSolutionsStatus === "unloaded"
                        ? "Load layer solutions"
                        : loadLayerSolutionsStatus === "loading"
                          ? "Loading..."
                          : loadLayerSolutionsStatus === "finished"
                            ? "Finished loading!"
                            : "Error"}
                </button>
                <div className="flex flex-wrap gap-x-10 gap-y-4">
                    {layerCases.map((lc, i) => (
                        <div className="w-60" key={lc}>
                            #{i + 1}: {lc}
                            <TagsView tags={layerCaseTags[lc]} />
                            <SkewbRenderer
                                state={layerCaseToSkewbState(
                                    lc,
                                ).toSkewbRendererState()}
                                options={null}
                            />
                            <div>
                                {!layerSolutionsComplete ? null : !optsCopy.hideSolutionsInitially ? null : isShowShortestLength[
                                      lc
                                  ] ? (
                                    <span>
                                        {
                                            Object.keys(
                                                layerSolutionsComplete[lc],
                                            )[0]
                                        }{" "}
                                        move
                                        {Object.keys(
                                            layerSolutionsComplete[lc],
                                        )[0] !== "1" && "s"}
                                        {", "}
                                        {
                                            layerSolutionsComplete[lc][
                                                Number(
                                                    Object.keys(
                                                        layerSolutionsComplete[
                                                            lc
                                                        ],
                                                    )[0],
                                                )
                                            ].length
                                        }
                                        {" optimal solution"}
                                        {layerSolutionsComplete[lc][
                                            Number(
                                                Object.keys(
                                                    layerSolutionsComplete[lc],
                                                )[0],
                                            )
                                        ].length !== 1 && "s"}
                                    </span>
                                ) : Object.keys(layerSolutionsComplete[lc])
                                      .length > 0 ? (
                                    <button
                                        type="button"
                                        className="p-1 rounded-full border border-(--line) hover:border-(--line-heavy) bg-(--surface) px-2.5"
                                        onClick={() =>
                                            setIsShowShortestLength((issl) => ({
                                                ...issl,
                                                [lc]: !issl[lc],
                                            }))
                                        }
                                    >
                                        Show hint
                                    </button>
                                ) : null}
                                <div>
                                    {groupsToShow[lc].map((g) => (
                                        <div key={g}>
                                            <span>{g}-movers: </span>
                                            {!layerSolutionsComplete
                                                ? null
                                                : layerSolutionsComplete[lc][
                                                      g
                                                  ].map((solution, i) => (
                                                      <Fragment
                                                          key={solution.toString()}
                                                      >
                                                          <AlgorithmView
                                                              alg={
                                                                  new RubikskewbAlg(
                                                                      solution,
                                                                  )
                                                              }
                                                          />
                                                          {layerSolutionsComplete &&
                                                              i <
                                                                  layerSolutionsComplete[
                                                                      lc
                                                                  ][g].length -
                                                                      1 &&
                                                              ", "}
                                                      </Fragment>
                                                  ))}
                                        </div>
                                    ))}
                                </div>
                                {numGroupsTotal[lc] > 0 && (
                                    <button
                                        type="button"
                                        className="p-1 rounded-full border border-(--line) hover:border-(--line-heavy) bg-(--surface) px-2.5"
                                        onClick={() =>
                                            setNumGroupsToShow((ngs) => ({
                                                ...ngs,
                                                [lc]:
                                                    numGroupsToShow[lc] >=
                                                    numGroupsTotal[lc]
                                                        ? 0
                                                        : numGroupsToShow[lc] +
                                                          1,
                                            }))
                                        }
                                    >
                                        {numGroupsToShow[lc] ===
                                        numGroupsTotal[lc]
                                            ? "Hide solutions"
                                            : numGroupsToShow[lc] === 0
                                              ? "Show solutions"
                                              : "Show longer solutions"}
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
