import { Link } from "@tanstack/react-router";
import { type Dispatch, type SetStateAction, useState } from "react";
import type { OneLookTrainerOptions } from "#/utils/one-look-trainer";
import { generateRandomOneLookCase } from "#/utils/one-look-trainer/generator";
import { SkewbMatrixState } from "#/utils/skewb-matrix/SkewbMatrixState";
import { RubikskewbAlg, type WCAAlg } from "#/utils/solver/alg";
import SkewbRenderer from "../SkewbRenderer";
import OneLookTrainerOptionsView from "./OneLookTrainerOptionsView";
import Presets from "./Presets";

function createAlgsFromText(text: string): RubikskewbAlg[] {
    const algs = text.split("\n").map((algText) => {
        const algTextSanitized = algText.trim();
        if (algTextSanitized.length === 0) return null;
        if (
            algTextSanitized.startsWith("#") ||
            algTextSanitized.startsWith("//")
        )
            return null;
        try {
            return new RubikskewbAlg(algTextSanitized);
        } catch {
            throw new Error(`Invalid alg: ${algText}`);
        }
    });
    return algs.filter((a) => a !== null);
}

export default function OneLookTrainer({
    options,
    setOptions,
}: {
    options: OneLookTrainerOptions;
    setOptions: Dispatch<SetStateAction<OneLookTrainerOptions>>;
}) {
    const [skewbState, setSkewbState] = useState<SkewbMatrixState>(
        new SkewbMatrixState(),
    );
    const [scrambleAlg, setScrambleAlg] = useState<WCAAlg>();
    const [errorMessage, setErrorMessage] = useState("");
    const [isShowSkewbRenderer, setIsShowSkewbRenderer] = useState(true);

    return (
        <>
            <div className="flex flex-wrap gap-10">
                <form
                    onSubmit={async (e) => {
                        e.preventDefault();
                        try {
                            const { state, scrambleAlg } =
                                await generateRandomOneLookCase(
                                    createAlgsFromText(
                                        options.layerSolutionAlgsText,
                                    ),
                                );
                            setIsShowSkewbRenderer(
                                options.showSkewbVisualizerByDefault,
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
                    <div className="flex flex-col gap-2 w-100">
                        <div className="space-y-2">
                            <p>Input layer solutions in rubikskewb notation.</p>
                            <p>
                                A scramble with one of the layer solutions,
                                randomly chosen, will be generated.
                            </p>
                            <p>
                                Rotation moves (x, y, z, etc.) at the start and
                                end of the alg will be disregarded.
                            </p>
                            <p>
                                {/** biome-ignore lint/suspicious/noCommentText: this is meant to be text not a comment */}
                                Lines starting with "#" or "//" are also
                                ignored.
                            </p>
                            <textarea
                                className="border border-(--line) w-full h-50"
                                value={options?.layerSolutionAlgsText}
                                onChange={(e) =>
                                    setOptions((o) => ({
                                        ...o,
                                        layerSolutionAlgsText: e.target.value,
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
                                type="submit"
                                className="rounded-full border border-(--line) hover:border-(--line-heavy) bg-(--surface) px-5 py-2.5 text-sm font-semibold text-(--sea-ink) no-underline transition hover:-translate-y-0.5 disabled:opacity-50"
                            >
                                Generate One Look Case
                            </button>
                        </div>
                    </div>
                </form>
                <div className="flex flex-col gap-2 w-100">
                    <h3 className="mb-3 text-xl font-semibold text-(--sea-ink)">
                        Scramble: {scrambleAlg?.toString()}
                    </h3>
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
                    <div className={`${isShowSkewbRenderer ? "" : "blur-2xl"}`}>
                        {skewbState && (
                            <SkewbRenderer
                                state={skewbState.toSkewbRendererState()}
                                options={null}
                            />
                        )}
                    </div>
                </div>
            </div>
            <OneLookTrainerOptionsView
                options={options}
                setOptions={setOptions}
            />
            <Presets
                setLayerSolutionsAlgText={(text) => {
                    setOptions((o) => ({
                        ...o,
                        layerSolutionAlgsText: text,
                    }));
                }}
            ></Presets>
        </>
    );
}
