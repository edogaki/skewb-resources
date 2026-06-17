import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import SkewbEditor from "#/components/SkewbEditor";
import SkewbRenderer from "#/components/SkewbRenderer";
import { RubikskewbAlg, WCAAlg } from "#/utils/alg";
import { SkewbState } from "#/utils/skewbState";

export const Route = createFileRoute("/solver")({
    component: RouteComponent,
});

function RouteComponent() {
    const [skewbState, setSkewbState] = useState(
        new SkewbState().applyRubikskewbAlg(
            new RubikskewbAlg("F f' F' f l L' l' L"),
        ),
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
                <div className="w-150">
                    <SkewbRenderer
                        state={skewbState.toSkewbRendererState()}
                        options={null}
                    />
                </div>
                <SkewbEditor state={skewbState} setState={setSkewbState} />
                {/*
                <SkewbPlayer alg="R U R' U'" />
                */}
            </section>
        </main>
    );
}
