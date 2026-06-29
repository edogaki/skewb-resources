import { useEffect, useLayoutEffect, useState } from "react";
import { Color, nonWhiteColors } from "#/utils/renderer/color";
import { CubeRotation, shuffleArray } from "#/utils/renderer/math";
import { CubeOrientation } from "#/utils/renderer/skewbRenderer";
import {
    CenterPerm,
    type NSCenterTrainerOptions,
    type NSCenterTrainerState,
    NSCenterTrainerType,
    nonRandomNSCenterTrainerTypes,
    nsCenterTrainerStateToCenterPerm,
    nsCenterTrainerStateToSkewbRendererState,
} from "#/utils/trainer/skewbUtils";
import { Sound, setIsMuted } from "#/utils/trainer/sounds";
import { useLocalStorage } from "#/utils/trainer/useLocalStorage";
import SkewbRenderer from "../SkewbRenderer";
import NSCenterTrainerAnswerButtons from "./NSCenterTrainerAnswerButtons";
import OptionsEditor from "./NSCenterTrainerOptionsEditor";

function generateNSCenterTrainerState(options: NSCenterTrainerOptions) {
    const centers = nonWhiteColors.slice();
    shuffleArray(centers, true);
    const randomRotation =
        CubeRotation[Math.floor(Math.random() * CubeRotation.length)];
    const chosenTrainerType =
        options.trainerType === NSCenterTrainerType.Random
            ? nonRandomNSCenterTrainerTypes[
                  Math.floor(
                      Math.random() * nonRandomNSCenterTrainerTypes.length,
                  )
              ]
            : options.trainerType;
    const uCorners: Color[][] = [
        [Color.Yellow, Color.Green, Color.Red],
        [Color.Yellow, Color.Orange, Color.Green],
        [Color.Yellow, Color.Blue, Color.Orange],
        [Color.Yellow, Color.Red, Color.Blue],
    ];
    const randomNums = [
        Math.floor(Math.random() * 3),
        Math.floor(Math.random() * 3),
        0,
        0,
    ];
    [randomNums[2], randomNums[3]] = [3 - randomNums[0], 3 - randomNums[1]];
    uCorners[0] = [
        ...uCorners[0].slice(-randomNums[0]),
        ...uCorners[0].slice(0, -randomNums[0]),
    ];
    uCorners[1] = [
        ...uCorners[1].slice(-randomNums[1]),
        ...uCorners[1].slice(0, -randomNums[1]),
    ];
    uCorners[2] = [
        ...uCorners[2].slice(-randomNums[2]),
        ...uCorners[2].slice(0, -randomNums[2]),
    ];
    uCorners[3] = [
        ...uCorners[3].slice(-randomNums[3]),
        ...uCorners[3].slice(0, -randomNums[3]),
    ];

    const state: NSCenterTrainerState = {
        centers: centers,
        rotation: randomRotation,
        chosenTrainerType,
        uCorners,
    } as NSCenterTrainerState;
    return state;
}

const isErrorButtonInitialState = Object.fromEntries(
    Object.values(CenterPerm).map((cp) => [cp, false]),
) as Record<CenterPerm, boolean>;

function NSCenterTrainer({ isMuted }: { isMuted: boolean }) {
    const [options, setOptions] = useLocalStorage<NSCenterTrainerOptions>(
        "nsCenterTrainerOptions",
        {
            trainerType: NSCenterTrainerType.HorizontalU,
            showRightCornerColors: true,
            showRandomUCorners: false,
            renderer: {
                cubeOrientation: CubeOrientation.UpDown,
            },
            isKeyBindChangerOn: false,
        },
        true,
    );
    const [nsCenterState, setNSCenterState] = useState(
        generateNSCenterTrainerState(options),
    );
    const centerPerm = nsCenterTrainerStateToCenterPerm(nsCenterState);

    const [isErrorButton, setIsErrorButton] = useState(
        isErrorButtonInitialState,
    );

    const [answeredCorrectButton, setAnsweredCorrectButton] =
        useState<CenterPerm | null>(null);

    const [correctQuestions, setCorrectQuestions] = useState(0);
    const [totalQuestions, setTotalQuestions] = useState(0);

    function newState() {
        setNSCenterState(generateNSCenterTrainerState(options));
        setIsErrorButton(isErrorButtonInitialState);
    }

    function selectCenterPerm(cp: CenterPerm) {
        if (cp === centerPerm) {
            Sound.correct.play();
            if (Object.values(isErrorButton).every((v) => v === false)) {
                setCorrectQuestions((q) => q + 1);
                setTotalQuestions((q) => q + 1);
            }
            setAnsweredCorrectButton(cp);
            newState();
        } else {
            Sound.wrong.play();
            if (Object.values(isErrorButton).every((v) => v === false)) {
                setTotalQuestions((q) => q + 1);
            }
            setIsErrorButton((obj) => {
                return { ...obj, [cp]: true };
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
            <div className="flex flex-wrap gap-x-20 gap-y-4 content-around">
                <div className="flex-initial w-100">
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
                                    (Object.keys(obj) as Array<CenterPerm>).map(
                                        (cp) =>
                                            cp === centerPerm
                                                ? [cp, false]
                                                : [cp, true],
                                    ),
                                ) as Record<CenterPerm, boolean>;
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
                <div className="flex-initial w-80">
                    <NSCenterTrainerAnswerButtons
                        options={options}
                        selectCenterPerm={selectCenterPerm}
                        isErrorButton={isErrorButton}
                        answeredCorrectButton={answeredCorrectButton}
                    />
                </div>
                <div className="flex-[1_1_auto] w-80">
                    <p className="mb-2">
                        <a
                            target="_blank"
                            href="https://www.youtube.com/watch?v=Sju93bAA5Wo&list=PLBdW0Yy1iGy4i4yhUsmYVnNsmpmFvR9gO&index=23"
                            rel="noopener"
                            className="underline"
                        >
                            Video on center recognition by Elias Malomgré
                        </a>
                    </p>
                    <p className="mb-2">
                        <a
                            target="_blank"
                            href="https://docs.google.com/spreadsheets/d/1HcICTLEa15KYq-9FwdQqencTq9m9xHZiSsSZxGsRoTk"
                            rel="noopener"
                            className="underline"
                        >
                            My SA/NS center recognition doc that lists all
                            possible cases and easy-to-mistake ones
                        </a>
                    </p>
                    <OptionsEditor options={options} setOptions={setOptions} />
                </div>
            </div>
        </>
    );
}

export default NSCenterTrainer;
