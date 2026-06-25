import { createFileRoute } from "@tanstack/react-router";
import NSCenterTrainer from "#/components/trainer/NSCenterTrainer";
import { useLocalStorage } from "#/utils/trainer/useLocalStorage";

interface GlobalOptions {
    isMuted: boolean;
}

export const Route = createFileRoute("/trainer")({
    component: RouteComponent,
});

function RouteComponent() {
    const [globalOptions, setGlobalOptions] = useLocalStorage<GlobalOptions>(
        "globalOptions",
        {
            isMuted: false,
        },
        true,
    );
    return (
        <main className="page-wrap px-4 py-12">
            <section className="island-shell rounded-2xl p-6 sm:p-8 mb-8">
                <div className="flex">
                    <h1 className="display-title mb-3 text-4xl font-bold text-(--sea-ink) sm:text-5xl">
                        Skewb Trainer
                    </h1>
                    <button
                        type="button"
                        className="ml-auto rounded-full border border-(--line)  bg-(--surface) text-sm  px-4 py-2 font-semibold text-(--sea-ink) no-underline transition hover:-translate-y-0.5 hover:border-(--line-heavy)"
                        onClick={() => {
                            setGlobalOptions((opts) => {
                                return { ...opts, isMuted: !opts.isMuted };
                            });
                        }}
                    >
                        {globalOptions.isMuted ? "Unmute" : "Mute"}
                    </button>
                </div>
                <NSCenterTrainer isMuted={globalOptions.isMuted} />
            </section>
        </main>
    );
}
