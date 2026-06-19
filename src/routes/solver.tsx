import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import Accordion from "#/components/Accordion";
import LayerSolutionsView from "#/components/solver/LayerSolutionsView";
import SkewbEditor from "#/components/solver/SkewbEditor";
import SkewbRenderer from "#/components/solver/SkewbRenderer";
import SolverOptionsView from "#/components/solver/SolverOptionsView";
import type { RubikskewbAlg } from "#/utils/alg";
import {
    type LayerSolutions,
    type SolverOptions,
    solveLayers,
} from "#/utils/skewbSolver";
import { CenterPiece, SkewbState } from "#/utils/skewbState";

export const Route = createFileRoute("/solver")({
    component: RouteComponent,
});

function RouteComponent() {
    const [skewbState, setSkewbState] = useState(new SkewbState());
    const [isSolving, setIsSolving] = useState(false);
    // const [isStartedSolving, setIsStartedSolving] = useState(false);
    const [layerSolutions, setLayerSolutions] = useState<LayerSolutions | null>(
        null,
    );
    const [options, setOptions] = useState<SolverOptions>({
        startSolvingImmediately: false,
    });
    const [solverErrorMessage, setSolverErrorMessage] = useState("");

    const startSolving = () => {
        if (skewbState.uniqueColorCenters().length < 1) {
            setSolverErrorMessage("Solver error: no unique centers!");
            setIsSolving(false);
            return;
        }
        setIsSolving(true);
        setLayerSolutions(null);
    };

    // biome-ignore lint/correctness/useExhaustiveDependencies: should not start solving if options changed
    useEffect(() => {
        if (skewbState) {
            setLayerSolutions(null);
            setSolverErrorMessage("");
            if (options.startSolvingImmediately) {
                startSolving();
            }
        }
    }, [skewbState]);

    useEffect(() => {
        if (!isSolving) return;
        const abortFunction = solveLayers(
            skewbState,
            (c, solution) => {
                setLayerSolutions((ls) =>
                    ls
                        ? {
                              ...ls,
                              [c]: [...ls[c], solution],
                          }
                        : (Object.fromEntries(
                              CenterPiece.map((_c) => [
                                  _c,
                                  _c === c
                                      ? [solution]
                                      : ([] as RubikskewbAlg[]),
                              ]),
                          ) as Record<CenterPiece, RubikskewbAlg[]>),
                );
            },
            () => {
                setIsSolving(false);
            },
        );
        return abortFunction;
    }, [isSolving, skewbState]);

    return (
        <main className="page-wrap px-4 py-12">
            <section className="island-shell rounded-2xl p-6 sm:p-8 mb-8">
                <h1 className="display-title mb-3 text-4xl font-bold text-(--sea-ink) sm:text-5xl">
                    Skewb Layer Solver
                </h1>
                <div className="flex flex-wrap gap-x-10 gap-y-4">
                    <SkewbEditor /* state={skewbState} */
                        setState={setSkewbState}
                    />
                    {/*
                <SkewbPlayer alg="R U R' U'" />
                */}
                    <div className="flex flex-col gap-4">
                        <Accordion title="Your Cube" defaultIsOpen={true}>
                            <div className="w-120 max-w-full">
                                <SkewbRenderer
                                    state={skewbState.toSkewbRendererState()}
                                    options={null}
                                />
                            </div>
                        </Accordion>
                        <div className="w-120">
                            <button
                                type="button"
                                className={`${options.startSolvingImmediately && "hidden"} mb-4 rounded-full border border-[rgba(23,58,64,0.2)] bg-(--sea-ink) px-5 py-2.5 text-sm font-semibold text-(--foam) no-underline transition-all hover:-translate-y-0.5 hover:border-[rgba(23,58,64,0.35)]`}
                                onClick={startSolving}
                            >
                                Solve for Layers!
                            </button>
                            <p className="text-red-400">{solverErrorMessage}</p>
                            {isSolving && (
                                <p className="mb-4">Solving layers...</p>
                            )}
                            {layerSolutions && (
                                <LayerSolutionsView
                                    layerSolutions={layerSolutions}
                                    pieceColors={skewbState.pieceColors}
                                    skewbState={skewbState}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <section className="island-shell rounded-2xl p-6 sm:p-8">
                <SolverOptionsView options={options} setOptions={setOptions} />
            </section>
        </main>
    );
}
