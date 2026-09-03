import { createFileRoute } from "@tanstack/react-router";
import OneLookTrainer from "#/components/one-look-trainer/OneLookTrainer";
import {
    defaultOneLookTrainerOptions,
    type OneLookTrainerOptions,
} from "#/utils/one-look-trainer";
import { getShortSolutionStates } from "#/utils/skewb-matrix/solver";
import { useLocalStorage } from "#/utils/trainer/useLocalStorage";

export const Route = createFileRoute("/one-look-trainer")({
    component: RouteComponent,
    head: () => ({
        meta: [
            {
                title: "One Look Trainer | Skewb Resources",
            },
            {
                property: "og:description",
                content:
                    "Skewb One Look Trainer. Generates scrambles with layer algs inputted by user.",
            },
        ],
    }),
});

function RouteComponent() {
    getShortSolutionStates();
    const [options, setOptions] = useLocalStorage<OneLookTrainerOptions>(
        "oneLookTrainerOptions",
        defaultOneLookTrainerOptions,
        true,
    );

    return (
        <main className="page-wrap px-4 py-12">
            <section className="island-shell rounded-2xl p-6 sm:p-8 mb-8">
                <div className="flex flex-col gap-2">
                    <h1 className="display-title mb-3 text-4xl font-bold text-(--sea-ink) sm:text-5xl">
                        Skewb One Look Trainer
                    </h1>
                    {options ? (
                        <OneLookTrainer
                            options={options}
                            setOptions={setOptions}
                        />
                    ) : (
                        "Loading..."
                    )}
                </div>
            </section>
        </main>
    );
}
