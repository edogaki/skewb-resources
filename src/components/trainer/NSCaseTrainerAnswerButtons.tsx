import { Fragment } from "react/jsx-runtime";
import {
    type NSCase,
    type NSCaseTrainerOptions,
    nsCaseButtonsLayout,
} from "#/utils/trainer/nsCase";
import NSCaseTrainerAnswerButton from "./NSCaseTrainerAnswerButton";

function NSCaseTrainerAnswerButtons({
    options,
    selectAnswer,
    isErrorButton,
    answeredCorrectButton,
}: {
    options: NSCaseTrainerOptions;
    selectAnswer: (nsc: NSCase) => void;
    isErrorButton: Record<NSCase, boolean>;
    answeredCorrectButton: NSCase | null;
}) {
    return (
        <div className="flex flex-wrap gap-5">
            {nsCaseButtonsLayout.map(([columnName, column]) => (
                <div key={columnName}>
                    <div className="flex gap-1 w-67 flex-wrap">
                        {column.map(([caseType, cases]) => (
                            <Fragment key={caseType}>
                                <div className="w-full mt-1">{caseType}</div>
                                {cases.map((c) => (
                                    <div key={c} className="w-16">
                                        <NSCaseTrainerAnswerButton
                                            name={c}
                                            isError={isErrorButton[c]}
                                            isCorrect={
                                                answeredCorrectButton === c
                                            }
                                            onClick={() => selectAnswer(c)}
                                        />
                                    </div>
                                ))}
                            </Fragment>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default NSCaseTrainerAnswerButtons;
