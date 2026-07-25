import type React from "react";
import { CubeOrientation } from "#/utils/renderer/skewbRenderer";
import {
    NSCaseButtonsViewType,
    type NSCaseTrainerOptions,
    NSCaseTrainerType,
} from "#/utils/trainer/nsCase";

function NSCaseTrainerOptionsEditor({
    options,
    setOptions,
}: {
    options: NSCaseTrainerOptions;
    setOptions: React.Dispatch<React.SetStateAction<NSCaseTrainerOptions>>;
}) {
    return (
        <form>
            <h3 className="mb-3 text-xl font-semibold text-(--sea-ink)">
                Options
            </h3>
            {(Object.values(NSCaseTrainerType) as NSCaseTrainerType[]).map(
                (tt) => (
                    <span key={tt}>
                        <input
                            id={`nsCaseTrainer-${tt}`}
                            type="radio"
                            name="nsCaseTrainerType"
                            value={tt}
                            className="mr-1"
                            checked={options.trainerType === tt}
                            onChange={() =>
                                setOptions((values) => ({
                                    ...values,
                                    trainerType: tt,
                                }))
                            }
                        />
                        <label htmlFor={`nsCaseTrainer-${tt}`}>{tt}</label>
                        <br />
                    </span>
                ),
            )}
            <br />
            {(
                Object.keys(CubeOrientation) as (keyof typeof CubeOrientation)[]
            ).map((k) => (
                <span key={k}>
                    <input
                        id={`nsCaseTrainer-${k}`}
                        type="radio"
                        name="cubeOrientation"
                        value={CubeOrientation[k]}
                        checked={
                            options.renderer.cubeOrientation ===
                            CubeOrientation[k]
                        }
                        className="mr-1"
                        onChange={() =>
                            setOptions((values) => ({
                                ...values,
                                renderer: {
                                    ...values.renderer,
                                    cubeOrientation: CubeOrientation[k],
                                },
                            }))
                        }
                    />
                    <label htmlFor={`nsCaseTrainer-${k}`}>
                        {CubeOrientation[k]}
                    </label>
                    <br />
                </span>
            ))}
            <br />
            {(
                Object.keys(
                    NSCaseButtonsViewType,
                ) as (keyof typeof NSCaseButtonsViewType)[]
            ).map((k) => (
                <span key={k}>
                    <input
                        id={`nsCaseTrainer-${k}`}
                        type="radio"
                        name="nsCaseButtonsViewType"
                        value={NSCaseButtonsViewType[k]}
                        checked={
                            options.buttonsViewType === NSCaseButtonsViewType[k]
                        }
                        className="mr-1"
                        onChange={() =>
                            setOptions((values) => ({
                                ...values,
                                buttonsViewType: NSCaseButtonsViewType[k],
                            }))
                        }
                    />
                    <label htmlFor={`nsCaseTrainer-${k}`}>
                        {NSCaseButtonsViewType[k]}
                    </label>
                    <br />
                </span>
            ))}
            <br />
            {options.buttonsViewType === NSCaseButtonsViewType.Type2 && (
                <>
                    <input
                        type="checkbox"
                        checked={options.type2ShowRenderedCaseInButton}
                        name="type2ShowRenderedCaseInButton"
                        id="nsCaseTrainer-type2ShowRenderedCaseInButton"
                        className="mr-1"
                        onChange={(e) =>
                            setOptions((values) => ({
                                ...values,
                                type2ShowRenderedCaseInButton: e.target.checked,
                            }))
                        }
                        disabled={
                            options.buttonsViewType !==
                            NSCaseButtonsViewType.Type2
                        }
                    />
                    <label htmlFor="nsCaseTrainer-type2ShowRenderedCaseInButton">
                        Show Mini Skewb inside button
                    </label>
                    <br />
                </>
            )}
            <br />
            <button
                name="isCaseEnabledMenuOn"
                type="button"
                className="rounded-full border border-(--line) bg-(--surface) text-sm  px-4 py-2 font-semibold text-(--sea-ink) no-underline transition hover:-translate-y-0.5 hover:border-(--line-heavy)"
                onClick={(e) => {
                    setOptions((values) => ({
                        ...values,
                        isCaseEnabledMenuOn: !values.isCaseEnabledMenuOn,
                    }));
                    e.currentTarget.blur();
                }}
            >
                {options.isCaseEnabledMenuOn
                    ? "Save Changes"
                    : "Choose Enabled Cases"}
            </button>
            <br />
        </form>
    );
}

export default NSCaseTrainerOptionsEditor;
