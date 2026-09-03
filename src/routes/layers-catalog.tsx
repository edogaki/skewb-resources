import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import Accordion from "#/components/Accordion";
import CopyLayerSolutionsToClipboard from "#/components/layers-catalog/CopyLayerSolutionsToClipboard";
import LayerCaseFilter from "#/components/layers-catalog/LayerCaseFilter";
import LayerCasesStats from "#/components/layers-catalog/LayerCasesStats";
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
                property: "og:title",
                content: "Layers Catalog | Skewb Resources",
            },
            {
                property: "og:description",
                content:
                    "Skewb Layers Catalog. A list of all layer cases, with solutions & other info. Includes sort and filter functions.",
            },
        ],
    }),
});

function RouteComponent() {
    const [layerCasesToShow, setLayerCasesToShow] = useState(
        layerCases.slice(),
    );

    return (
        <main className="page-wrap px-4 py-12">
            <section className="island-shell rounded-2xl p-6 sm:p-8 mb-8">
                <div className="flex flex-col gap-2">
                    <h1 className="display-title mb-3 text-4xl font-bold text-(--sea-ink) sm:text-5xl">
                        Skewb Layers Catalog
                    </h1>
                    <Accordion title="Show/Hide Filters" defaultIsOpen={false}>
                        <LayerCaseFilter
                            layerCasesToShow={layerCasesToShow}
                            setLayerCasesToShow={setLayerCasesToShow}
                        ></LayerCaseFilter>
                    </Accordion>
                    <LayerCasesStats layerCasesToShow={layerCasesToShow} />
                    <CopyLayerSolutionsToClipboard
                        layerCasesToShow={layerCasesToShow}
                    />
                    <div className="flex flex-wrap gap-x-10 gap-y-4">
                        {layerCasesToShow.map((lc, i) => (
                            <LayerCaseView
                                key={lc}
                                layerCase={lc}
                                index={i + 1}
                                layerSolutionsComplete={layerSolutionsComplete}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
