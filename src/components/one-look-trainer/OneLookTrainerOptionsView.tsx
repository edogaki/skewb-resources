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
            <select
                className="mr-1 border border-(--line) px-3 py-2 rounded-lg"
                id="skewbVisualizerType"
                value={options.skewbVisualizerType}
                onChange={(e) =>
                    setOptions((o) => ({
                        ...o,
                        skewbVisualizerType: e.target
                            .value as OneLookTrainerOptions["skewbVisualizerType"],
                    }))
                }
            >
                <option value="2d">2D</option>
                <option value="3d">3D</option>
            </select>
            <label htmlFor="skewbVisualizerType">Skewb Visualizer</label>
        </div>
    );
}
