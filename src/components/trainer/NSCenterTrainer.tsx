import { type Dispatch, type SetStateAction, useEffect, useState } from "react";
import {
    CenterPerm,
    type NSCenterTrainerOptions,
    nsCenterTrainerStateToCenterPerm,
    nsCenterTrainerStateToSkewbRendererState,
} from "#/utils/trainer/skewbUtils";
import { Sound, setIsMuted } from "#/utils/trainer/sounds";
import { useQuestionGenerator } from "#/utils/trainer/useQuestionGenerator";
import SkewbRenderer from "../SkewbRenderer";
import NSCenterTrainerAnswerButtons from "./NSCenterTrainerAnswerButtons";
import OptionsEditor from "./NSCenterTrainerOptionsEditor";

const isErrorButtonInitialState = Object.fromEntries(
    Object.keys(CenterPerm).map((k) => [k, false]),
) as Record<keyof typeof CenterPerm, boolean>;

function NSCenterTrainer({
    isMuted,
    options,
    setOptions,
}: {
    isMuted: boolean;
    options: NSCenterTrainerOptions;
    setOptions: Dispatch<SetStateAction<NSCenterTrainerOptions>>;
}) {
    const [currentQuestion, generateNextQuestion] =
        useQuestionGenerator(options);

    const correctAnswer = nsCenterTrainerStateToCenterPerm(currentQuestion);

    const [isErrorButton, setIsErrorButton] = useState(
        isErrorButtonInitialState,
    );

    const [answeredCorrectButton, setAnsweredCorrectButton] = useState<
        keyof typeof CenterPerm | null
    >(null);

    const [correctQuestions, setCorrectQuestions] = useState(0);
    const [totalQuestions, setTotalQuestions] = useState(0);

    function newState() {
        generateNextQuestion();
        setIsErrorButton(isErrorButtonInitialState);
    }

    function selectCenterPerm(k: keyof typeof CenterPerm) {
        if (CenterPerm[k] === correctAnswer) {
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
                                    (
                                        Object.keys(obj) as Array<
                                            keyof typeof CenterPerm
                                        >
                                    ).map((k) =>
                                        CenterPerm[k] === correctAnswer
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
                            currentQuestion,
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
