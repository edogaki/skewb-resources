import { ClientOnly } from "@tanstack/react-router";
import {
    type Dispatch,
    type SetStateAction,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";
import {
    createSanitizedAlgsFromText,
    getSelectionRangeOfNthLine,
    type OneLookTrainerOptions,
} from "#/utils/one-look-trainer";
import { generateRandomOneLookCase } from "#/utils/one-look-trainer/generator";
import { SkewbMatrixState } from "#/utils/skewb-matrix/skewbMatrixState";
import { WCAAlg } from "#/utils/solver/alg";
import Skewb3D from "../Skewb3D";
import SkewbRenderer from "../SkewbRenderer";
import CustomPresets from "./CustomPresets";
import OneLookTrainerOptionsView from "./OneLookTrainerOptionsView";
import Presets from "./Presets";

export default function OneLookTrainer({
    options,
    setOptions,
}: {
    options: OneLookTrainerOptions;
    setOptions: Dispatch<SetStateAction<OneLookTrainerOptions>>;
}) {
    const [errorMessage, setErrorMessage] = useState("");

    const sanitizedAlgsWithLineNumber = useMemo(() => {
        try {
            setErrorMessage("");
            return createSanitizedAlgsFromText(options.layerSolutionAlgsText);
        } catch (err) {
            if (err instanceof Error) {
                setErrorMessage(err.message);
            }
            return [];
        }
    }, [options.layerSolutionAlgsText]);

    const sanitizedAlgs = useMemo(
        () => sanitizedAlgsWithLineNumber.map((o) => o.alg),
        [sanitizedAlgsWithLineNumber],
    );

    const numAlgs = sanitizedAlgs.length;
    const [nextLayerAlgIndex, setNextLayerAlgIndex] = useState<number | null>(
        null,
    );

    const [skewbState, setSkewbState] = useState<SkewbMatrixState>(
        new SkewbMatrixState(),
    );
    const [scrambleAlg, setScrambleAlg] = useState<WCAAlg>(new WCAAlg(""));
    const [isShowSkewbRenderer, setIsShowSkewbRenderer] = useState(true);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    // biome-ignore lint/correctness/useExhaustiveDependencies: need to reset next layer index when textbox is edited
    useEffect(() => {
        if (options.doLayersInOrder) {
            setNextLayerAlgIndex(0);
        } else {
            setNextLayerAlgIndex(null);
        }
    }, [options.doLayersInOrder, sanitizedAlgs]);
    return (
        <>
            <div className="flex flex-wrap gap-10">
                <form
                    className="max-w-full"
                    onSubmit={async (e) => {
                        e.preventDefault();
                        if (errorMessage !== "") return;
                        const { state, scrambleAlg: scr } =
                            await generateRandomOneLookCase(
                                sanitizedAlgs,
                                options.layerColor,
                                nextLayerAlgIndex,
                            );
                        setIsShowSkewbRenderer(
                            options.showSkewbVisualizerByDefault,
                        );
                        setSkewbState(state);
                        setScrambleAlg(scr);
                        setErrorMessage("");
                        if (
                            textareaRef.current &&
                            nextLayerAlgIndex !== null &&
                            sanitizedAlgsWithLineNumber.length > 0
                        ) {
                            const { lineNum } =
                                sanitizedAlgsWithLineNumber[nextLayerAlgIndex];
                            const { startIndex, endIndex } =
                                getSelectionRangeOfNthLine(
                                    options.layerSolutionAlgsText,
                                    lineNum,
                                );
                            if (startIndex !== null && endIndex !== null) {
                                textareaRef.current.focus({
                                    preventScroll: true,
                                });
                                textareaRef.current.setSelectionRange(
                                    startIndex,
                                    endIndex,
                                );
                            }
                        }
                        setNextLayerAlgIndex((n) =>
                            n === null ? null : (n + 1) % numAlgs,
                        );
                    }}
                >
                    <div className="flex flex-col gap-2 w-100 max-w-full">
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
                            {nextLayerAlgIndex !== null && numAlgs > 0 && (
                                <p className="text-sm text-(--sea-ink-softer)">
                                    Next generated scramble will be from layer
                                    case {nextLayerAlgIndex + 1}/{numAlgs}.
                                </p>
                            )}
                            <textarea
                                ref={textareaRef}
                                className="border border-(--line) w-full h-50 outline-none"
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
                                spellCheck="false"
                            ></textarea>
                            <p className="text-red-400">{errorMessage}</p>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="rounded-full border border-(--line) hover:border-(--line-heavy) bg-(--sea-ink) px-5 py-2.5 text-sm font-semibold text-(--foam) no-underline transition hover:-translate-y-0.5 disabled:opacity-50"
                            >
                                Generate One Look Case
                            </button>
                        </div>
                    </div>
                </form>
                <div className="flex flex-col gap-2 w-100 max-w-full">
                    <h3 className="mb-3 text-xl font-semibold text-(--sea-ink)">
                        Scramble: {scrambleAlg.toString()}
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
                        {skewbState &&
                            (options.skewbVisualizerType === "3d" ? (
                                <ClientOnly>
                                    <Skewb3D setupAlg={scrambleAlg} />
                                </ClientOnly>
                            ) : (
                                <SkewbRenderer
                                    state={skewbState.toSkewbRendererState()}
                                    options={null}
                                />
                            ))}
                    </div>
                </div>
            </div>
            <OneLookTrainerOptionsView
                options={options}
                setOptions={setOptions}
            />
            <CustomPresets
                setLayerSolutionsAlgText={(text) => {
                    setOptions((o) => ({
                        ...o,
                        layerSolutionAlgsText:
                            typeof text === "function"
                                ? text(o.layerSolutionAlgsText)
                                : text,
                    }));
                }}
                customPresets={options.customPresets}
                setCustomPresets={(customPresets) => {
                    setOptions((o) => ({
                        ...o,
                        customPresets:
                            typeof customPresets === "function"
                                ? customPresets(o.customPresets)
                                : customPresets,
                    }));
                }}
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
