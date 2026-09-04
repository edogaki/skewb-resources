export type OneLookTrainerOptions = {
    layerSolutionAlgsText: string;
    showSkewbVisualizerByDefault: boolean;
    skewbVisualizerType: "2d" | "3d";
};

export const defaultOneLookTrainerOptions: OneLookTrainerOptions = {
    layerSolutionAlgsText: "",
    showSkewbVisualizerByDefault: false,
    skewbVisualizerType: "2d",
};
