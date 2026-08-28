import { createFileRoute } from "@tanstack/react-router";
import LayerCaseView from "#/components/layers-catalog/LayerCaseView";
import { layerCases } from "#/utils/layers-catalog/layerCases.gen";
import { layerSolutionsComplete } from "#/utils/layers-catalog/layerSolutionsComplete.gen";

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
    return (
        <main className="page-wrap px-4 py-12">
            <section className="island-shell rounded-2xl p-6 sm:p-8 mb-8">
                <h1 className="display-title mb-3 text-4xl font-bold text-(--sea-ink) sm:text-5xl">
                    Skewb Layers Catalog
                </h1>
                <div className="flex flex-wrap gap-x-10 gap-y-4">
                    {layerCases.map((lc) => (
                        <LayerCaseView
                            key={lc}
                            layerCase={lc}
                            layerSolutionsComplete={layerSolutionsComplete}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}
