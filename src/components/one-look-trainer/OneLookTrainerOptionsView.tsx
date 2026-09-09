import type { Dispatch, SetStateAction } from "react";
import type { OneLookTrainerOptions } from "#/utils/one-look-trainer";
import { Color } from "#/utils/renderer/color";

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
            <div className="flex flex-col gap-2">
                <div>
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
                <div>
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
                    <label htmlFor="skewbVisualizerType">
                        Skewb Visualizer
                    </label>
                </div>
                <div>
                    <select
                        className="mr-1 border border-(--line) px-3 py-2 rounded-lg"
                        id="layerColor"
                        value={options.layerColor}
                        onChange={(e) =>
                            setOptions((o) => ({
                                ...o,
                                layerColor: e.target
                                    .value as OneLookTrainerOptions["layerColor"],
                            }))
                        }
                    >
                        <option value="random">Random</option>
                        <option value={Color.White}>White</option>
                        <option value={Color.Red}>Red</option>
                        <option value={Color.Green}>Green</option>
                        <option value={Color.Orange}>Orange</option>
                        <option value={Color.Blue}>Blue</option>
                        <option value={Color.Yellow}>Yellow</option>
                    </select>
                    <label htmlFor="layerColor">Layer Color</label>
                </div>
                <div className={`mb-2`}>
                    <input
                        type="checkbox"
                        id="doLayersInOrder"
                        checked={options.doLayersInOrder}
                        onChange={(e) =>
                            setOptions((o) => ({
                                ...o,
                                doLayersInOrder: e.target.checked,
                            }))
                        }
                        className="mr-1"
                    />
                    <label htmlFor="doLayersInOrder">
                        Do layers in order (resets on textbox edit)
                    </label>
                </div>
            </div>
        </div>
    );
}
