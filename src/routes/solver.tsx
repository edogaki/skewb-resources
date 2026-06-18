import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import LayerSolutionsView from "#/components/LayerSolutionsView";
import SkewbEditor from "#/components/SkewbEditor";
import SkewbRenderer from "#/components/SkewbRenderer";
import SolverOptionsView from "#/components/SolverOptionsView";
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

    const startSolving = () => {
        setIsSolving(true);
        setLayerSolutions(null);
    };

    // biome-ignore lint/correctness/useExhaustiveDependencies: should not start solving if options changed
    useEffect(() => {
        if (skewbState) {
            setLayerSolutions(null);
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
                <h1 className="display-title mb-3 text-4xl font-bold text-[var(--sea-ink)] sm:text-5xl">
                    Layer Solver
                </h1>
                {/*
                <p className="m-0 max-w-3xl text-base leading-8 text-[var(--sea-ink-soft)]">
                    Yo
                </p>
                */}
                <SkewbEditor state={skewbState} setState={setSkewbState} />
                {/*
                <SkewbPlayer alg="R U R' U'" />
                */}
                <h2 className="mb-3 text-2xl font-semibold text-[var(--sea-ink)]">
                    Your Cube
                </h2>
                <div className="w-100 max-w-full">
                    <SkewbRenderer
                        state={skewbState.toSkewbRendererState()}
                        options={null}
                    />
                </div>
                <button
                    type="button"
                    className={`${options.startSolvingImmediately && "hidden"} mb-4 rounded-full border border-[rgba(23,58,64,0.2)] bg-[var(--sea-ink)] px-5 py-2.5 text-sm font-semibold text-[var(--foam)] no-underline transition-all hover:-translate-y-0.5 hover:border-[rgba(23,58,64,0.35)]`}
                    onClick={startSolving}
                >
                    Solve for Layers!
                </button>
                {isSolving && <p className="mb-4">Solving layers...</p>}
                {layerSolutions && (
                    <LayerSolutionsView
                        layerSolutions={layerSolutions}
                        pieceColors={skewbState.pieceColors}
                    />
                )}
            </section>
            <section className="island-shell rounded-2xl p-6 sm:p-8">
                <SolverOptionsView options={options} setOptions={setOptions} />
            </section>
        </main>
    );
}
