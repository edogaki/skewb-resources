import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import LayerSolutionView from "#/components/LayerSolutionView";
import SkewbEditor from "#/components/SkewbEditor";
import SkewbRenderer from "#/components/SkewbRenderer";
import { type LayerSolution, solveLayers } from "#/utils/skewbSolver";
import { SkewbState } from "#/utils/skewbState";

export const Route = createFileRoute("/solver")({
    component: RouteComponent,
});

function RouteComponent() {
    const [skewbState, setSkewbState] = useState(new SkewbState());
    const [isSolving, setIsSolving] = useState(false);
    const [layerSolution, setLayerSolution] = useState<LayerSolution | null>(
        null,
    );
    return (
        <main className="page-wrap px-4 py-12">
            <section className="island-shell rounded-2xl p-6 sm:p-8">
                {/* <p className="island-kicker mb-2">Solver</p> */}
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
                <div className="w-150">
                    <SkewbRenderer
                        state={skewbState.toSkewbRendererState()}
                        options={null}
                    />
                </div>
                <button
                    type="button"
                    className="mb-4 rounded-full border border-[rgba(23,58,64,0.2)] bg-[var(--sea-ink)] px-5 py-2.5 text-sm font-semibold text-[var(--foam)] no-underline transition-all hover:-translate-y-0.5 hover:border-[rgba(23,58,64,0.35)]"
                    onClick={() => {
                        setIsSolving(true);
                        setTimeout(() => {
                            solveLayers(skewbState).then((solution) => {
                                setLayerSolution(solution);
                                setIsSolving(false);
                            });
                        }, 500);
                    }}
                >
                    Solve for Layers!
                </button>
                {isSolving && <p className="mb-4">Solving layers...</p>}
                {layerSolution && (
                    <LayerSolutionView layerSolution={layerSolution} />
                )}
            </section>
        </main>
    );
}
