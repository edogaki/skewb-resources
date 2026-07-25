import { type Dispatch, Fragment, type SetStateAction, useState } from "react";
import {
    type NSCase,
    type NSCaseSet,
    type NSCaseTrainerOptions,
    nsCaseButtonsLayout,
    nsCases,
    nsCasesInfo,
} from "#/utils/trainer/nsCase";
import NSCaseTrainerRenderedCase from "./NSCaseTrainerRenderedCase";

function NSCaseTrainerCaseEnabledMenu({
    options,
    setOptions,
}: {
    options: NSCaseTrainerOptions;
    setOptions: Dispatch<SetStateAction<NSCaseTrainerOptions>>;
}) {
    const [selectedSet, setSelectedSet] =
        useState<NSCaseSet>("Pi + Swirl Perm");
    const [selectedSetCases, setSelectedSetCases] = useState<readonly NSCase[]>(
        nsCaseButtonsLayout[0][1][0][1],
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
                                className={`w-full rounded-full border border-(--line) ${cases.every((nsc) => options.caseEnabled[nsc]) ? "bg-(--lagoon)" : cases.some((nsc) => options.caseEnabled[nsc]) ? "bg-(--lagoon-light)" : "bg-(--surface)"} text-sm  px-0 py-2 ${selectedSet === caseSet ? "font-extrabold border-(--line-heavy)" : "font-semibold"} text-(--sea-ink) no-underline transition hover:-translate-y-0.5 hover:border-(--line-heavy)`}
                                onClick={() => {
                                    setSelectedSet(caseSet);
                                    setSelectedSetCases(cases);
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
            <div className="flex gap-2 flex-col">
                <div className="flex gap-1 w-111 flex-wrap">
                    {selectedSet &&
                        selectedSetCases.map((c) => (
                            <div key={c} className="w-55">
                                <input
                                    type="checkbox"
                                    checked={options.caseEnabled[c]}
                                    name={`caseEnabled-${c}`}
                                    id={`nsCaseTrainer-caseEnabled-${c}`}
                                    className="mr-1"
                                    onChange={(e) =>
                                        setOptions((values) => ({
                                            ...values,
                                            caseEnabled: {
                                                ...values.caseEnabled,
                                                [c]: e.target.checked,
                                            },
                                        }))
                                    }
                                />
                                <label htmlFor={`caseEnabled-${c}`}>
                                    {`${c}: ${nsCasesInfo.get(c)?.altName}`}
                                    <div className="w-full flex justify-center-safe">
                                        <div className="w-[60%]">
                                            <NSCaseTrainerRenderedCase
                                                name={c}
                                            />
                                        </div>
                                    </div>
                                </label>
                            </div>
                        ))}
                </div>
                <button
                    type="button"
                    className={`w-full rounded-full border border-(--line) bg-(--surface) text-sm  px-0 py-2 font-semibold text-(--sea-ink) no-underline transition hover:-translate-y-0.5 hover:border-(--line-heavy)`}
                    onClick={() =>
                        setOptions((values) => ({
                            ...values,
                            caseEnabled: {
                                ...values.caseEnabled,
                                ...(Object.fromEntries(
                                    selectedSetCases.map((nsc) => [nsc, true]),
                                ) as Record<NSCase, boolean>),
                            },
                        }))
                    }
                >
                    Enable All Cases In This Set
                </button>
                <button
                    type="button"
                    className={`w-full rounded-full border border-(--line) bg-(--surface) text-sm  px-0 py-2 font-semibold text-(--sea-ink) no-underline transition hover:-translate-y-0.5 hover:border-(--line-heavy)`}
                    onClick={() =>
                        setOptions((values) => ({
                            ...values,
                            caseEnabled: {
                                ...values.caseEnabled,
                                ...(Object.fromEntries(
                                    selectedSetCases.map((nsc) => [nsc, false]),
                                ) as Record<NSCase, boolean>),
                            },
                        }))
                    }
                >
                    Disable All Cases In This Set
                </button>
                <button
                    type="button"
                    className={`w-full rounded-full border border-(--line) bg-(--surface) text-sm  px-0 py-2 font-semibold text-(--sea-ink) no-underline transition hover:-translate-y-0.5 hover:border-(--line-heavy)`}
                    onClick={() =>
                        setOptions((values) => ({
                            ...values,
                            caseEnabled: Object.fromEntries(
                                nsCases.map(([_nscc, nsc]) => [nsc, true]),
                            ) as Record<NSCase, boolean>,
                        }))
                    }
                >
                    Enable All Cases
                </button>
                <button
                    type="button"
                    className={`w-full rounded-full border border-(--line) bg-(--surface) text-sm  px-0 py-2 font-semibold text-(--sea-ink) no-underline transition hover:-translate-y-0.5 hover:border-(--line-heavy)`}
                    onClick={() =>
                        setOptions((values) => ({
                            ...values,
                            caseEnabled: Object.fromEntries(
                                nsCases.map(([_nscc, nsc]) => [nsc, false]),
                            ) as Record<NSCase, boolean>,
                        }))
                    }
                >
                    Disable All Cases
                </button>
            </div>
        </div>
    );
}

export default NSCaseTrainerCaseEnabledMenu;
