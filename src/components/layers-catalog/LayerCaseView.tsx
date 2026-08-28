import { Fragment, useState } from "react";
import {
    layerCaseNum,
    layerCaseToSkewbState,
} from "#/utils/layers-catalog/layerCaseMethods";
import type { LayerCase } from "#/utils/layers-catalog/layerCases.gen";
import { layerCaseTags } from "#/utils/layers-catalog/layerCaseTags.gen";
import { pluralize } from "#/utils/methods";
import { RubikskewbAlg } from "#/utils/solver/alg";
import SkewbRenderer from "../SkewbRenderer";
import AlgorithmView from "../solver/AlgorithmView";
import TagsViewForCase from "./TagsViewForCase";

export default function LayerCaseView({
    layerCase,
    layerSolutionsComplete,
}: {
    layerCase: LayerCase;
    layerSolutionsComplete: Record<LayerCase, Record<number, string[]>> | null;
}) {
    const lc = layerCase;

    const optsCopy = {
        hideSolutionsInitially: false,
    };

    const [numGroupsToShow, setNumGroupsToShow] = useState(
        optsCopy.hideSolutionsInitially ? 0 : 1,
    );

    const [isShowShortestLength, setIsShowShortestLength] = useState(false);

    const numGroupsTotal = Object.keys(
        layerSolutionsComplete?.[lc] || {},
    ).length;

    const groupsToShow = Object.keys(layerSolutionsComplete?.[lc] || {})
        .map(Number)
        .slice(0, numGroupsToShow) as number[];

    return (
        <div className="w-60" key={lc}>
            #{layerCaseNum[lc]}: {lc}
            <TagsViewForCase layerCase={lc} caseTags={layerCaseTags[lc]} />
            <SkewbRenderer
                state={layerCaseToSkewbState(lc).toSkewbRendererState()}
                options={null}
            />
            <div>
                {!layerSolutionsComplete ? null : !optsCopy.hideSolutionsInitially ? null : isShowShortestLength ? (
                    <span>
                        {Object.keys(layerSolutionsComplete[lc])[0]}
                        {pluralize(
                            " move",
                            Number(Object.keys(layerSolutionsComplete[lc])[0]),
                        )}
                        {", "}
                        {
                            layerSolutionsComplete[lc][
                                Number(
                                    Object.keys(layerSolutionsComplete[lc])[0],
                                )
                            ].length
                        }
                        {pluralize(
                            " optimal solution",
                            layerSolutionsComplete[lc][
                                Number(
                                    Object.keys(layerSolutionsComplete[lc])[0],
                                )
                            ].length,
                        )}
                    </span>
                ) : Object.keys(layerSolutionsComplete[lc]).length > 0 ? (
                    <button
                        type="button"
                        className="p-1 rounded-full border border-(--line) hover:border-(--line-heavy) bg-(--surface) px-2.5"
                        onClick={() => setIsShowShortestLength((issl) => !issl)}
                    >
                        Show hint
                    </button>
                ) : null}
                <div>
                    {groupsToShow.map((g) => (
                        <div key={g}>
                            <span>{g}-movers: </span>
                            {!layerSolutionsComplete
                                ? null
                                : layerSolutionsComplete[lc][g].map(
                                      (solution, i) => (
                                          <Fragment key={solution.toString()}>
                                              <AlgorithmView
                                                  alg={
                                                      new RubikskewbAlg(
                                                          solution,
                                                      )
                                                  }
                                                  includeTags={true}
                                              />
                                              {layerSolutionsComplete &&
                                                  i <
                                                      layerSolutionsComplete[
                                                          lc
                                                      ][g].length -
                                                          1 &&
                                                  ", "}
                                          </Fragment>
                                      ),
                                  )}
                        </div>
                    ))}
                </div>
                {numGroupsTotal > (optsCopy.hideSolutionsInitially ? 0 : 1) && (
                    <button
                        type="button"
                        className="p-1 rounded-full border border-(--line) hover:border-(--line-heavy) bg-(--surface) px-2.5"
                        onClick={() =>
                            setNumGroupsToShow((ngs) =>
                                ngs >= numGroupsTotal
                                    ? optsCopy.hideSolutionsInitially
                                        ? 0
                                        : 1
                                    : ngs + 1,
                            )
                        }
                    >
                        {numGroupsToShow === numGroupsTotal
                            ? "Hide solutions"
                            : numGroupsToShow === 0
                              ? "Show solutions"
                              : "Show longer solutions"}
                    </button>
                )}
            </div>
        </div>
    );
}
