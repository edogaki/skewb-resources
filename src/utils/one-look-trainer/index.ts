import type { Color } from "../renderer/color";
import { presets } from "./presets";

export type CustomPreset = {
    key: string;
    text: string;
};

export type OneLookTrainerOptions = {
    layerSolutionAlgsText: string;
    showSkewbVisualizerByDefault: boolean;
    skewbVisualizerType: "2d" | "3d";
    customPresets: CustomPreset[];
    layerColor: "random" | Color;
};

export const defaultOneLookTrainerOptions: OneLookTrainerOptions = {
    layerSolutionAlgsText: presets[0],
    showSkewbVisualizerByDefault: false,
    skewbVisualizerType: "2d",
    customPresets: [],
    layerColor: "random",
};
