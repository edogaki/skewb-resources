import { useEffect, useLayoutEffect, useState } from "react";
import { nonWhiteColors } from "#/utils/renderer/color";
import { CubeRotation, shuffleArray } from "#/utils/renderer/math";
import { CubeOrientation } from "#/utils/renderer/skewbRenderer";
import {
    CenterPerm,
    type NSCenterTrainerOptions,
    type NSCenterTrainerState,
    NSCenterTrainerType,
    nsCenterTrainerStateToCenterPerm,
    nsCenterTrainerStateToSkewbRendererState,
} from "#/utils/trainer/skewbUtils";
import { Sound, setIsMuted } from "#/utils/trainer/sounds";
import { useLocalStorage } from "#/utils/trainer/useLocalStorage";
import SkewbRenderer from "../SkewbRenderer";
import NSCenterTrainerAnswerButtons from "./NSCenterTrainerAnswerButtons";
import OptionsEditor from "./NSCenterTrainerOptionsEditor";

function generateNSCenters() {
    const centers = nonWhiteColors.slice();
    shuffleArray(centers, true);
    const randomRotation =
        CubeRotation[Math.floor(Math.random() * CubeRotation.length)];
    const state: NSCenterTrainerState = {
        centers: centers,
        rotation: randomRotation,
    } as NSCenterTrainerState;
    return state;
}

const isErrorButtonInitialState = Object.fromEntries(
    Object.keys(CenterPerm).map((k) => [k, false]),
) as Record<keyof typeof CenterPerm, boolean>;

function NSCenterTrainer({ isMuted }: { isMuted: boolean }) {
    const [options, setOptions] = useLocalStorage<NSCenterTrainerOptions>(
        "nsCenterTrainerOptions",
        {
            trainerType: NSCenterTrainerType.HorizontalU,
            showRightCornerColors: true,
            renderer: {
                cubeOrientation: CubeOrientation.UpDown,
            },
            isKeyBindChangerOn: false,
        },
        true,
    );
    const [nsCenterState, setNSCenterState] = useState(generateNSCenters());
    const centerPerm = nsCenterTrainerStateToCenterPerm(nsCenterState);

    const [isErrorButton, setIsErrorButton] = useState(
        isErrorButtonInitialState,
    );

    const [answeredCorrectButton, setAnsweredCorrectButton] = useState<
        keyof typeof CenterPerm | null
    >(null);

    const [correctQuestions, setCorrectQuestions] = useState(0);
    const [totalQuestions, setTotalQuestions] = useState(0);

    function newState() {
        setNSCenterState(generateNSCenters());
        setIsErrorButton(isErrorButtonInitialState);
    }

    function selectCenterPerm(k: keyof typeof CenterPerm) {
        if (CenterPerm[k] === centerPerm) {
            Sound.correct.play();
            if (Object.values(isErrorButton).every((v) => v === false)) {
                setCorrectQuestions((q) => q + 1);
                setTotalQuestions((q) => q + 1);
            }
            setAnsweredCorrectButton(k);
            newState();
        } else {
            Sound.wrong.play();
            if (Object.values(isErrorButton).every((v) => v === false)) {
                setTotalQuestions((q) => q + 1);
            }
            setIsErrorButton((obj) => {
                return { ...obj, [k]: true };
            });
            setAnsweredCorrectButton(null);
        }
    }

    useEffect(() => {
        if (!answeredCorrectButton) return;
        const id = setTimeout(() => {
            setAnsweredCorrectButton(null);
        }, 300);
        return () => clearTimeout(id);
    }, [answeredCorrectButton]);

    // biome-ignore lint/correctness/useExhaustiveDependencies: changing options need to reverse state for better ui
    useLayoutEffect(() => {
        newState();
    }, [options.renderer, options.showRightCornerColors, options.trainerType]);

    useEffect(() => {
        setIsMuted(isMuted);
    }, [isMuted]);

    return (
        <>
            <h2 className="mb-3 text-2xl font-semibold text-(--sea-ink)">
                NS Center Trainer
            </h2>
            <div className="flex flex-wrap gap-x-20 gap-y-10 content-around">
                <div className="flex-none w-100">
                    <div>
                        {`${correctQuestions}/${totalQuestions} answered correctly`}
                    </div>
                    <button
                        type="button"
                        className="rounded-full border border-(--line)  bg-(--surface) text-sm  px-4 py-2 font-semibold text-(--sea-ink) no-underline transition hover:-translate-y-0.5 hover:border-(--line-heavy)"
                        onClick={async () => {
                            Sound.wrong.play();
                            if (
                                Object.values(isErrorButton).every(
                                    (v) => v === false,
                                )
                            ) {
                                setTotalQuestions((q) => q + 1);
                            }
                            setIsErrorButton((obj) => {
                                return Object.fromEntries(
                                    (
                                        Object.keys(obj) as Array<
                                            keyof typeof CenterPerm
                                        >
                                    ).map((k) =>
                                        CenterPerm[k] === centerPerm
                                            ? [k, false]
                                            : [k, true],
                                    ),
                                ) as Record<keyof typeof CenterPerm, boolean>;
                            });
                            setAnsweredCorrectButton(null);
                        }}
                    >
                        I give up
                    </button>
                    <SkewbRenderer
                        state={nsCenterTrainerStateToSkewbRendererState(
                            nsCenterState,
                            options,
                        )}
                        options={options.renderer}
                    />
                </div>
                <div className="flex-none w-60">
                    <NSCenterTrainerAnswerButtons
                        options={options}
                        selectCenterPerm={selectCenterPerm}
                        isErrorButton={isErrorButton}
                        answeredCorrectButton={answeredCorrectButton}
                    />
                </div>
                <div className="flex-[1_0_auto] w-80">
                    <a
                        target="_blank"
                        href="https://www.youtube.com/watch?v=Sju93bAA5Wo&list=PLBdW0Yy1iGy4i4yhUsmYVnNsmpmFvR9gO&index=23"
                        rel="noopener"
                    >
                        Video on center recognition by Elias Malomgré
                    </a>
                    <br />
                    <br />
                    <a
                        target="_blank"
                        href="https://docs.google.com/spreadsheets/d/1HcICTLEa15KYq-9FwdQqencTq9m9xHZiSsSZxGsRoTk"
                        rel="noopener"
                    >
                        My SA/NS center recognition doc that lists all possible
                        cases and easy-to-mistake ones
                    </a>
                    <OptionsEditor options={options} setOptions={setOptions} />
                </div>
            </div>
        </>
    );
}

export default NSCenterTrainer;
