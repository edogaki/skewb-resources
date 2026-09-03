import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import OneLookTrainerOptionsView from "#/components/one-look-trainer/OneLookTrainerOptionsView";
import SkewbRenderer from "#/components/SkewbRenderer";
import TopMessage from "#/components/TopMessage";
import {
    defaultOneLookTrainerOptions,
    type OneLookTrainerOptions,
} from "#/utils/one-look-trainer";
import {
    generateRandomNSCase,
    generateRandomOneLookCase,
} from "#/utils/one-look-trainer/generator";
import { SkewbMatrixState } from "#/utils/skewb-matrix/SkewbMatrixState";
import {
    getShortSolutionStates,
    isShortSolutionStatesPreloaded,
} from "#/utils/skewb-matrix/solver";
import { RubikskewbAlg, WCAAlg } from "#/utils/solver/alg";
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
                content: "Skewb One Look Trainer.",
            },
        ],
    }),
});

function createAlgsFromText(text: string): RubikskewbAlg[] {
    const algs = text.split("\n").map((algText) => {
        const algTextSanitized = algText.trim();
        if (algTextSanitized.length === 0) return null;
        try {
            return new RubikskewbAlg(algTextSanitized);
        } catch {
            throw new Error(`Invalid alg: ${algText}`);
        }
    });
    return algs.filter((a) => a !== null);
}

function RouteComponent() {
    getShortSolutionStates();
    const [skewbState, setSkewbState] = useState<SkewbMatrixState>(
        new SkewbMatrixState(),
    );
    const [scrambleAlg, setScrambleAlg] = useState<WCAAlg>();
    const [errorMessage, setErrorMessage] = useState("");
    const [options, setOptions] = useLocalStorage<OneLookTrainerOptions>(
        "oneLookTrainerOptions",
        defaultOneLookTrainerOptions,
        true,
    );

    const [isShowSkewbRenderer, setIsShowSkewbRenderer] = useState(true);
    return (
        <main className="page-wrap px-4 py-12">
            <section className="island-shell rounded-2xl p-6 sm:p-8 mb-8">
                <div className="flex flex-col gap-2">
                    <h1 className="display-title mb-3 text-4xl font-bold text-(--sea-ink) sm:text-5xl">
                        Skewb One Look Trainer
                    </h1>
                    <div className="flex gap-10">
                        <div className="flex flex-col gap-2 w-100">
                            <div>
                                <p>
                                    Input layer solutions in rubikskewb
                                    notation.
                                </p>
                                <p>
                                    A scramble with one of the layer solutions,
                                    randomly chosen, will be generated.
                                </p>
                                <p>
                                    Rotation moves (x, y, z, etc.) at the start
                                    and end of the alg will be disregarded.
                                </p>
                                <textarea
                                    className="border border-(--line) w-full h-50"
                                    value={options?.layerSolutionAlgsText}
                                    onChange={(e) =>
                                        setOptions((o) => ({
                                            ...o,
                                            layerSolutionAlgsText:
                                                e.target.value,
                                        }))
                                    }
                                    placeholder={
                                        "Layer solution algs, e.g.:\nR\nR'\nR r' R'\nr' R r"
                                    }
                                ></textarea>
                                <p className="text-red-400">{errorMessage}</p>
                            </div>
                            <div>
                                <button
                                    type="button"
                                    className="rounded-full border border-(--line) hover:border-(--line-heavy) bg-(--surface) px-5 py-2.5 text-sm font-semibold text-(--sea-ink) no-underline transition hover:-translate-y-0.5 disabled:opacity-50"
                                    onClick={async () => {
                                        try {
                                            const { state, scrambleAlg } =
                                                await generateRandomOneLookCase(
                                                    createAlgsFromText(
                                                        options?.layerSolutionAlgsText ||
                                                            "",
                                                    ),
                                                );
                                            setIsShowSkewbRenderer(
                                                options?.showSkewbVisualizerByDefault ||
                                                    false,
                                            );
                                            setSkewbState(state);
                                            setScrambleAlg(scrambleAlg);
                                            setErrorMessage("");
                                        } catch (error) {
                                            if (error instanceof Error) {
                                                setErrorMessage(error.message);
                                            } else {
                                                throw error;
                                            }
                                        }
                                    }}
                                >
                                    Generate One Look Case
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 w-100">
                            <div className="w-100">
                                Scramble: {scrambleAlg?.toString()}
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    checked={isShowSkewbRenderer}
                                    name="isShowSkewbRenderer"
                                    id="isShowSkewbRenderer"
                                    className="mr-1"
                                    onChange={(e) =>
                                        setIsShowSkewbRenderer(e.target.checked)
                                    }
                                    autoComplete="off"
                                />
                                <label htmlFor="isShowSkewbRenderer">
                                    Show Skewb Visualizer
                                </label>
                            </div>
                            <div
                                className={`w-100 ${isShowSkewbRenderer ? "" : "blur-2xl"}`}
                            >
                                {skewbState && (
                                    <SkewbRenderer
                                        state={skewbState.toSkewbRendererState()}
                                        options={null}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="island-shell rounded-2xl p-6 sm:p-8">
                <OneLookTrainerOptionsView
                    options={options ?? defaultOneLookTrainerOptions}
                    setOptions={setOptions}
                />
            </section>
        </main>
    );
}
