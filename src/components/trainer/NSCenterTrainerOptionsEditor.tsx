import type React from "react";
import { CubeOrientation } from "#/utils/renderer/skewbRenderer";
import {
    type NSCenterTrainerOptions,
    NSCenterTrainerType,
} from "#/utils/trainer/skewbUtils";

function NSCenterTrainerOptionsEditor({
    options,
    setOptions,
}: {
    options: NSCenterTrainerOptions;
    setOptions: React.Dispatch<React.SetStateAction<NSCenterTrainerOptions>>;
}) {
    return (
        <form>
            <h3 className="mb-3 text-xl font-semibold text-(--sea-ink)">
                Options
            </h3>
            {(Object.values(NSCenterTrainerType) as NSCenterTrainerType[]).map(
                (tt) => (
                    <span key={tt}>
                        <input
                            id={`nsCenterTrainer-${tt}`}
                            type="radio"
                            name="nsCenterTrainerType"
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
                        <label htmlFor={`nsCenterTrainer-${tt}`}>{tt}</label>
                        <br />
                    </span>
                ),
            )}
            <br />
            <input
                type="checkbox"
                checked={options.showRightCornerColors}
                name="showRightCornerColors"
                id="nsCenterTrainer-showRightCornerColors"
                className="mr-1"
                onChange={(e) =>
                    setOptions((values) => ({
                        ...values,
                        showRightCornerColors: e.target.checked,
                    }))
                }
            />
            <label htmlFor="nsCenterTrainer-showRightCornerColors">
                Show Right Corner Colors
            </label>
            <br />
            <br />
            {(
                Object.keys(CubeOrientation) as (keyof typeof CubeOrientation)[]
            ).map((k) => (
                <span key={k}>
                    <input
                        id={`nsCenterTrainer-${k}`}
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
                    <label htmlFor={`nsCenterTrainer-${k}`}>
                        {CubeOrientation[k]}
                    </label>
                    <br />
                </span>
            ))}
            <br />
            <button
                name="isKeyBindChangerOn"
                type="button"
                className="rounded-full border border-(--line) bg-(--surface) text-sm  px-4 py-2 font-semibold text-(--sea-ink) no-underline transition hover:-translate-y-0.5 hover:border-(--line-heavy)"
                onClick={(e) => {
                    setOptions((values) => ({
                        ...values,
                        isKeyBindChangerOn: !values.isKeyBindChangerOn,
                    }));
                    e.currentTarget.blur();
                }}
            >
                {options.isKeyBindChangerOn ? "Save Changes" : "Show Keybinds"}
            </button>
            <br />
        </form>
    );
}

export default NSCenterTrainerOptionsEditor;
