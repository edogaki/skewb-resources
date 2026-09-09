import type { Color } from "../renderer/color";
import { rubikskewbTurnToStateRotation } from "../skewb-matrix/SkewbMatrixState";
import { RubikskewbAlg } from "../solver/alg";
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
    doLayersInOrder: boolean;
};

export const defaultOneLookTrainerOptions: OneLookTrainerOptions = {
    layerSolutionAlgsText: presets[0],
    showSkewbVisualizerByDefault: false,
    skewbVisualizerType: "2d",
    customPresets: [],
    layerColor: "random",
    doLayersInOrder: false,
};

export function createSanitizedAlgsFromText(
    text: string,
): { lineNum: number; alg: RubikskewbAlg }[] {
    const algs = text.split("\n").map((algText, lineNum) => {
        const algTextSanitized = algText.trim();
        if (algTextSanitized.length === 0) return null;
        if (
            algTextSanitized.startsWith("#") ||
            algTextSanitized.startsWith("//")
        )
            return null;
        try {
            const alg = new RubikskewbAlg(algTextSanitized);
            // remove all rotations at the start
            while (rubikskewbTurnToStateRotation[alg.turns[0]]) {
                alg.turns.splice(0, 1);
            }
            // remove all rotations at the end
            while (rubikskewbTurnToStateRotation[alg.turns[alg.turns.length]]) {
                alg.turns.pop();
            }
            return { lineNum, alg };
        } catch {
            throw new Error(`Invalid alg: ${algText}`);
        }
    });
    return algs.filter((a) => a !== null);
}

export function getSelectionRangeOfNthLine(text: string, lineNum: number) {
    let startIndex = 0;
    for (let i = 0; i < lineNum; i++) {
        startIndex = text.indexOf("\n", startIndex) + 1;
        if (startIndex === 0) return { startIndex: null, endIndex: null };
    }
    let endIndex = text.indexOf("\n", startIndex) + 1;
    if (endIndex === 0) endIndex = text.length;
    return { startIndex, endIndex };
}
