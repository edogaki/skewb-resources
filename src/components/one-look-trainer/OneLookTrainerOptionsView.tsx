import type { Dispatch, SetStateAction } from "react";
import type { OneLookTrainerOptions } from "#/utils/one-look-trainer";

export default function OneLookTrainerOptionsView({
    options,
    setOptions,
}: {
    options: OneLookTrainerOptions;
    setOptions: Dispatch<SetStateAction<OneLookTrainerOptions>>;
}) {
    return (
        <div>
            <h2 className="mb-3 text-2xl font-semibold text-(--sea-ink)">
                Options
            </h2>
            <div className={`mb-2`}>
                <input
                    type="checkbox"
                    id="showSkewbVisualizerByDefault"
                    checked={options.showSkewbVisualizerByDefault}
                    onChange={(e) =>
                        setOptions((o) => ({
                            ...o,
                            showSkewbVisualizerByDefault: e.target.checked,
                        }))
                    }
                    className="mr-1"
                />
                <label htmlFor="showSkewbVisualizerByDefault">
                    Show Skewb Visualizer by default
                </label>
            </div>
        </div>
    );
}
