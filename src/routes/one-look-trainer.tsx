import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import SkewbRenderer from "#/components/SkewbRenderer";
import { SkewbMatrixState } from "#/utils/skewb-matrix/SkewbMatrixState";
import { WCAAlg } from "#/utils/solver/alg";

export const Route = createFileRoute("/one-look-trainer")({
    component: RouteComponent,
    head: () => ({
        meta: [
            {
                title: "One Look Trainer | Skewb Resources",
            },
            {
                property: "og:description",
                content: "Skewb One Look Trainer.",
            },
        ],
    }),
});

function RouteComponent() {
    const [skewbState, setSkewbState] = useState(
        new SkewbMatrixState().applyWCAAlg(
            new WCAAlg("R L' R' U' B U' B R' U'"),
        ),
    );
    return (
        <main className="page-wrap px-4 py-12">
            <section className="island-shell rounded-2xl p-6 sm:p-8 mb-8">
                <div className="flex flex-col gap-2">
                    <h1 className="display-title mb-3 text-4xl font-bold text-(--sea-ink) sm:text-5xl">
                        Skewb One Look Trainer
                    </h1>
                </div>
                <SkewbRenderer
                    state={skewbState.toSkewbRendererState()}
                    options={null}
                />
            </section>
        </main>
    );
}
