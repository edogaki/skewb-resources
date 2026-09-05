import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useOnInView } from "react-intersection-observer";
import Accordion from "#/components/Accordion";
import CopyLayerSolutionsToClipboard from "#/components/layers-catalog/CopyLayerSolutionsToClipboard";
import LayerCaseFilter from "#/components/layers-catalog/LayerCaseFilter";
import LayerCaseSort from "#/components/layers-catalog/LayerCaseSort";
import LayerCasesStats from "#/components/layers-catalog/LayerCasesStats";
import LayerCaseView from "#/components/layers-catalog/LayerCaseView";
import SaveAsPresetInOneLookTrainer from "#/components/layers-catalog/SaveAsPresetInOneLookTrainer";
import { layerCases } from "#/utils/layers-catalog/layerCases.gen";
import { layerSolutionsComplete } from "#/utils/layers-catalog/layerSolutionsComplete.gen";
import type { SortBy } from "#/utils/layers-catalog/sortMethods";

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

const limitPerScroll = 60;

function RouteComponent() {
    const [layerCasesToShow, setLayerCasesToShow] = useState(
        layerCases.slice(),
    );

    const [sortBy, setSortBy] = useState<SortBy>({
        category: "Case ID",
        order: "asc",
    });

    const [layerCasesToShowLimit, setLayerCasesToShowLimit] =
        useState(limitPerScroll);

    useEffect(() => {
        if (layerCasesToShow.length > limitPerScroll)
            setLayerCasesToShowLimit(limitPerScroll);
    }, [layerCasesToShow]);

    const inViewRef = useOnInView(
        (inView, _entry) => {
            if (inView) {
                // Do something with the element that came into view
                setLayerCasesToShowLimit((l) => l + limitPerScroll);
            } else {
            }
        },
        {
            threshold: 0,
            triggerOnce: false,
        },
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
                            setLayerCasesToShow={setLayerCasesToShow}
                            sortBy={sortBy}
                        ></LayerCaseFilter>
                    </Accordion>
                    <div className="flex justify-between flex-wrap">
                        <LayerCasesStats layerCasesToShow={layerCasesToShow} />
                        <LayerCaseSort
                            setLayerCasesToShow={setLayerCasesToShow}
                            sortBy={sortBy}
                            setSortBy={setSortBy}
                        />
                    </div>
                    <CopyLayerSolutionsToClipboard
                        layerCasesToShow={layerCasesToShow}
                    />
                    <SaveAsPresetInOneLookTrainer
                        layerCasesToShow={layerCasesToShow}
                    ></SaveAsPresetInOneLookTrainer>
                    <div className="flex flex-wrap gap-x-10 gap-y-4">
                        {layerCasesToShow
                            .slice(0, layerCasesToShowLimit)
                            .map((lc, i) => (
                                <LayerCaseView
                                    key={lc}
                                    layerCase={lc}
                                    index={i + 1}
                                    layerSolutionsComplete={
                                        layerSolutionsComplete
                                    }
                                />
                            ))}
                        {layerCasesToShowLimit < layerCasesToShow.length && (
                            <div
                                className="w-full text-3xl text-center text-(--line)"
                                ref={inViewRef}
                            ></div>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}
