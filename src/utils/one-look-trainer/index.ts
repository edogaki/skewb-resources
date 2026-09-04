export type CustomPreset = {
    key: string;
    text: string;
};

export type OneLookTrainerOptions = {
    layerSolutionAlgsText: string;
    showSkewbVisualizerByDefault: boolean;
    skewbVisualizerType: "2d" | "3d";
    customPresets: CustomPreset[];
};

export const defaultOneLookTrainerOptions: OneLookTrainerOptions = {
    layerSolutionAlgsText: "",
    showSkewbVisualizerByDefault: false,
    skewbVisualizerType: "2d",
    customPresets: [],
};
