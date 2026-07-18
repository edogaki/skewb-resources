import { useState } from "react";
import { testQuestions } from "#/test-data/testQuestions";
import { Color, nonWhiteColors } from "#/utils/renderer/color";
import { CubeRotation, shuffleArray } from "#/utils/renderer/math";
import {
    type NSCenterTrainerOptions,
    type NSCenterTrainerState,
    NSCenterTrainerType,
    nonRandomNSCenterTrainerTypes,
} from "./skewbUtils";

export function generateRandomQuestion(options: NSCenterTrainerOptions) {
    const centers = nonWhiteColors.slice();
    shuffleArray(centers, true);
    const randomRotation =
        CubeRotation[Math.floor(Math.random() * CubeRotation.length)];
    const chosenTrainerType =
        options.trainerType === NSCenterTrainerType.Random
            ? nonRandomNSCenterTrainerTypes[
                  Math.floor(
                      Math.random() * nonRandomNSCenterTrainerTypes.length,
                  )
              ]
            : options.trainerType;
    const uCorners: Color[][] = [
        [Color.Yellow, Color.Green, Color.Red],
        [Color.Yellow, Color.Orange, Color.Green],
        [Color.Yellow, Color.Blue, Color.Orange],
        [Color.Yellow, Color.Red, Color.Blue],
    ];
    const randomNums = [
        Math.floor(Math.random() * 3),
        Math.floor(Math.random() * 3),
        0,
        0,
    ];
    [randomNums[2], randomNums[3]] = [3 - randomNums[0], 3 - randomNums[1]];
    uCorners[0] = [
        ...uCorners[0].slice(-randomNums[0]),
        ...uCorners[0].slice(0, -randomNums[0]),
    ];
    uCorners[1] = [
        ...uCorners[1].slice(-randomNums[1]),
        ...uCorners[1].slice(0, -randomNums[1]),
    ];
    uCorners[2] = [
        ...uCorners[2].slice(-randomNums[2]),
        ...uCorners[2].slice(0, -randomNums[2]),
    ];
    uCorners[3] = [
        ...uCorners[3].slice(-randomNums[3]),
        ...uCorners[3].slice(0, -randomNums[3]),
    ];

    const state: NSCenterTrainerState = {
        centers: centers,
        rotation: randomRotation,
        chosenTrainerType,
        uCorners,
    } as NSCenterTrainerState;
    return state;
}

function useRandomQuestionGenerator(options: NSCenterTrainerOptions) {
    const [currentQuestion, setCurrentQuestion] = useState(
        generateRandomQuestion(options),
    );

    function generateNextQuestion() {
        setCurrentQuestion(generateRandomQuestion(options));
    }

    return [currentQuestion, generateNextQuestion] as const;
}

function useTestQuestionGenerator(options: NSCenterTrainerOptions) {
    const [generatorState, setGeneratorState] = useState({
        i: 0,
        currentQuestion: testQuestions[0].question,
    });

    function generateNextQuestion() {
        setGeneratorState((state) => ({
            i: state.i + 1,
            currentQuestion:
                state.i + 1 < 200
                    ? testQuestions[state.i + 1].question
                    : generateRandomQuestion(options),
        }));
    }

    return [generatorState.currentQuestion, generateNextQuestion] as const;
}

export const useQuestionGenerator =
    import.meta.env.VITE_API_TEST_MODE === "true"
        ? useTestQuestionGenerator
        : useRandomQuestionGenerator;
