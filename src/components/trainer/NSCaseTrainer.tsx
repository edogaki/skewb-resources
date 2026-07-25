import { type Dispatch, type SetStateAction, useEffect, useState } from "react";
import {
    type NSCase,
    NSCaseButtonsViewType,
    type NSCaseTrainerOptions,
    nsCases,
    nsCaseTrainerQuestionToSkewbRendererState,
} from "#/utils/trainer/nsCase";
import { Sound } from "#/utils/trainer/sounds";
import { useNSCaseQuestionGenerator } from "#/utils/trainer/useNSCaseQuestionGenerator";
import SkewbRenderer from "../SkewbRenderer";
import NSCaseTrainerAnswerButtons from "./NSCaseTrainerAnswerButtons";
import NSCaseTrainerAnswerButtonsAlt from "./NSCaseTrainerAnswerButtonsAlt";
import NSCaseTrainerAnswerButtonTooltip from "./NSCaseTrainerAnswerButtonTooltip";
import NSCaseTrainerOptionsEditor from "./NSCaseTrainerOptionsEditor";

const isErrorButtonInitialState = Object.fromEntries(
    nsCases.map((k) => [k[1], false]),
) as Record<NSCase, boolean>;

function NSCaseTrainer({
    options,
    setOptions,
}: {
    options: NSCaseTrainerOptions;
    setOptions: Dispatch<SetStateAction<NSCaseTrainerOptions>>;
}) {
    const [currentQuestion, generateNextQuestion] =
        useNSCaseQuestionGenerator(options);

    const correctAnswer = currentQuestion.answer;

    const [isErrorButton, setIsErrorButton] = useState(
        isErrorButtonInitialState,
    );

    const [answeredCorrectButton, setAnsweredCorrectButton] =
        useState<NSCase | null>(null);

    const [correctQuestions, setCorrectQuestions] = useState(0);
    const [totalQuestions, setTotalQuestions] = useState(0);

    function newQuestion() {
        setIsShowAnswer(false);
        generateNextQuestion();
        setIsErrorButton(isErrorButtonInitialState);
    }

    function selectAnswer(nsc: NSCase) {
        if (nsc === correctAnswer) {
            Sound.correct.play();
            if (Object.values(isErrorButton).every((v) => v === false)) {
                setCorrectQuestions((q) => q + 1);
                setTotalQuestions((q) => q + 1);
            }
            setAnsweredCorrectButton(nsc);
            newQuestion();
        } else {
            Sound.wrong.play();
            if (Object.values(isErrorButton).every((v) => v === false)) {
                setTotalQuestions((q) => q + 1);
            }
            setIsErrorButton((obj) => {
                return { ...obj, [nsc]: true };
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

    const [isShowAnswer, setIsShowAnswer] = useState(false);

    return (
        <>
            <h2 className="mb-3 text-2xl font-semibold text-(--sea-ink)">
                NS Case Trainer
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
                            setIsShowAnswer(true);
                            Sound.wrong.play();
                            if (
                                Object.values(isErrorButton).every(
                                    (v) => v === false,
                                )
                            ) {
                                setTotalQuestions((q) => q + 1);
                            }
                            setIsErrorButton((obj) => {
                                const x = Object.fromEntries(
                                    (Object.keys(obj) as Array<NSCase>).map(
                                        (nsc) =>
                                            nsc === correctAnswer
                                                ? [nsc, false]
                                                : [nsc, true],
                                    ),
                                ) as Record<NSCase, boolean>;
                                return x;
                            });
                            setAnsweredCorrectButton(null);
                        }}
                    >
                        Show answer
                    </button>
                    <SkewbRenderer
                        state={nsCaseTrainerQuestionToSkewbRendererState(
                            currentQuestion,
                            options,
                        )}
                        options={options.renderer}
                    />
                    {isShowAnswer && (
                        <div className="w-80">
                            <NSCaseTrainerAnswerButtonTooltip
                                name={correctAnswer}
                                closeTooltip={() => {}}
                            />
                        </div>
                    )}
                </div>
                {options.buttonsViewType === NSCaseButtonsViewType.Type1 ? (
                    <NSCaseTrainerAnswerButtons
                        options={options}
                        selectAnswer={selectAnswer}
                        isErrorButton={isErrorButton}
                        answeredCorrectButton={answeredCorrectButton}
                    />
                ) : options.buttonsViewType === NSCaseButtonsViewType.Type2 ? (
                    <NSCaseTrainerAnswerButtonsAlt
                        options={options}
                        selectAnswer={selectAnswer}
                        isErrorButton={isErrorButton}
                        answeredCorrectButton={answeredCorrectButton}
                    />
                ) : null}
                <div className="flex-initial w-100">
                    <NSCaseTrainerOptionsEditor
                        options={options}
                        setOptions={setOptions}
                    />
                </div>
            </div>
        </>
    );
}

export default NSCaseTrainer;
