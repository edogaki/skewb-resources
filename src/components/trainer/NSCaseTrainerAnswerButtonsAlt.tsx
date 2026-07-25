import { useState } from "react";
import {
    type NSCase,
    type NSCaseSet,
    type NSCaseTrainerOptions,
    nsCaseButtonsLayout,
    nsCasesInfo,
} from "#/utils/trainer/nsCase";
import NSCaseTrainerAnswerButton from "./NSCaseTrainerAnswerButton";

function NSCaseTrainerAnswerButtonsAlt({
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
    const [selectedSet, setSelectedSet] = useState<NSCaseSet | null>(null);
    const [selectedSetCases, setSelectedSetCases] = useState<readonly NSCase[]>(
        [],
    );
    return (
        <div className="flex flex-wrap gap-5">
            {nsCaseButtonsLayout.map(([columnName, column]) => (
                <div key={columnName}>
                    <div className="flex gap-1 w-42 flex-wrap">
                        <div className="w-full text-center">{columnName}</div>
                        {column.map(([caseSet, cases]) => (
                            <button
                                key={caseSet}
                                type="button"
                                className={`w-full rounded-full border border-(--line) ${cases.every((nsc) => isErrorButton[nsc]) ? "bg-(--error-bg)" : "bg-(--surface)"} text-sm  px-0 py-2 ${selectedSet === caseSet ? "font-extrabold border-(--line-heavy)" : "font-semibold"} text-(--sea-ink) no-underline transition hover:-translate-y-0.5 hover:border-(--line-heavy)`}
                                onClick={() => {
                                    setSelectedSet(caseSet);
                                    setSelectedSetCases(
                                        cases,
                                        /*
                                            .slice()
                                            .sort(
                                                (c1, c2) =>
                                                    nsCasesInfo
                                                        .get(c1)
                                                        ?.altName.localeCompare(
                                                            nsCasesInfo.get(c2)
                                                                ?.altName || "",
                                                        ) || 0,
                                            ),
                                        */
                                    );
                                }}
                            >
                                {caseSet
                                    .replace("Pi + ", "")
                                    .replace("Peanut + ", "")}
                            </button>
                        ))}
                    </div>
                </div>
            ))}
            <div>
                <div className="flex gap-1 w-111 flex-wrap">
                    {selectedSet &&
                        selectedSetCases.map((c) => (
                            <div key={c} className="w-55">
                                <NSCaseTrainerAnswerButton
                                    name={c}
                                    isError={isErrorButton[c]}
                                    isCorrect={answeredCorrectButton === c}
                                    onClick={() => selectAnswer(c)}
                                    useAltName={true}
                                    showSkewbRenderer={
                                        options.type2ShowRenderedCaseInButton
                                    }
                                ></NSCaseTrainerAnswerButton>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}

export default NSCaseTrainerAnswerButtonsAlt;
