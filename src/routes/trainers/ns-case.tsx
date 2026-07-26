import { ClientOnly, createFileRoute } from "@tanstack/react-router";
import NSCaseTrainer from "#/components/trainer/NSCaseTrainer";
import { CubeOrientation } from "#/utils/renderer/skewbRenderer";
import {
    type NSCase,
    NSCaseButtonsViewType,
    NSCaseCentersShown,
    type NSCaseTrainerOptions,
    NSCaseTrainerType,
    nsCases,
} from "#/utils/trainer/nsCase";
import { useLocalStorage } from "#/utils/trainer/useLocalStorage";

export const Route = createFileRoute("/trainers/ns-case")({
    component: RouteComponent,
});

interface GlobalOptions {
    isMuted: boolean;
}

const nsCaseTrainerOptionsDefault: NSCaseTrainerOptions = {
    trainerType: NSCaseTrainerType.EntireCube,
    buttonsViewType: NSCaseButtonsViewType.Type1,
    type2ShowRenderedCaseInButton: true,
    renderer: {
        cubeOrientation: CubeOrientation.UpDown,
    },
    caseEnabled: Object.fromEntries(
        nsCases.map(([_nscc, nsc]) => [nsc, true]),
    ) as Record<NSCase, boolean>,
    isCaseEnabledMenuOn: false,
    centersShown: NSCaseCentersShown.HorizontalU,
    altNames: {},
};

function RouteComponent() {
    const [globalOptions, setGlobalOptions] = useLocalStorage<GlobalOptions>(
        "globalOptions",
        {
            isMuted: false,
        },
        true,
    );

    const [nsCaseTrainerOptions, setNSCaseTrainerOptions] =
        useLocalStorage<NSCaseTrainerOptions>(
            "nsCaseTrainerOptions",
            nsCaseTrainerOptionsDefault,
            true,
        );

    return (
        <main className="page-wrap px-4 py-12">
            <section className="island-shell rounded-2xl p-6 sm:p-8 mb-8">
                <div className="flex items-center">
                    <h1 className="display-title mb-3 text-4xl font-bold text-(--sea-ink) sm:text-4xl">
                        NS Case Trainer
                    </h1>
                    <button
                        type="button"
                        className="flex-none ml-auto rounded-full border border-(--line)  bg-(--surface) text-sm  px-4 py-2 font-semibold text-(--sea-ink) no-underline transition hover:-translate-y-0.5 hover:border-(--line-heavy)"
                        onClick={() => {
                            setGlobalOptions((opts) => {
                                if (!opts) return opts;
                                return { ...opts, isMuted: !opts.isMuted };
                            });
                        }}
                    >
                        {globalOptions?.isMuted ? "Unmute" : "Mute"}
                    </button>
                </div>
                {nsCaseTrainerOptions && (
                    <ClientOnly>
                        <NSCaseTrainer
                            options={nsCaseTrainerOptions}
                            setOptions={setNSCaseTrainerOptions}
                        />
                    </ClientOnly>
                )}
            </section>
        </main>
    );
}
