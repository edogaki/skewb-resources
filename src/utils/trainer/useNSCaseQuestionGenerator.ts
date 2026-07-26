import { useState } from "react";
import { Color } from "../renderer/color";
import {
    CubeRotation,
    type CubeYRotationIndex,
    pickRandomNElements,
} from "../renderer/math";
import {
    NSCaseCentersShown,
    type NSCaseTrainerOptions,
    type NSCaseTrainerQuestion,
    NSCaseTrainerType,
    nsCases,
} from "./nsCase";

export function generateRandomNSCaseQuestion(options: NSCaseTrainerOptions) {
    let enabledNSCases = nsCases.filter(
        ([_nscc, nsc]) => options.caseEnabled[nsc],
    );
    if (enabledNSCases.length === 0) {
        enabledNSCases = [nsCases[nsCases.length - 1]];
    }

    let randomYRotationIndex = Math.floor(
        Math.random() * 4,
    ) as CubeYRotationIndex;

    let [caseCore, answer] =
        enabledNSCases[Math.floor(Math.random() * enabledNSCases.length)];

    if (options.trainerType === NSCaseTrainerType.Pseudo2) {
        let counter = 0;
        while (
            caseCore.centers[(4 - randomYRotationIndex + 1) % 4] ===
                Color.Yellow ||
            caseCore.centers[(4 - randomYRotationIndex + 2) % 4] ===
                Color.Yellow
        ) {
            [caseCore, answer] =
                enabledNSCases[
                    Math.floor(Math.random() * enabledNSCases.length)
                ];
            randomYRotationIndex = Math.floor(
                Math.random() * 4,
            ) as CubeYRotationIndex;
            counter++;
            if (counter > 10000) break;
        }
    }

    const randomRotation =
        CubeRotation[Math.floor(Math.random() * CubeRotation.length)];

    let randomCentersShown = [0, 1, 2];
    switch (options.centersShown) {
        case NSCaseCentersShown.HorizontalU:
            randomCentersShown = pickRandomNElements([0, 1, 2, 3], 3);
            break;
        case NSCaseCentersShown.O: {
            const randomMiddleCenter = Math.floor(Math.random() * 4);
            randomCentersShown = [
                4,
                randomMiddleCenter,
                (randomMiddleCenter + 1) % 4,
            ];
            break;
        }
        case NSCaseCentersShown.VerticalU: {
            const randomMiddleCenter = Math.floor(Math.random() * 4);
            randomCentersShown = [
                4,
                randomMiddleCenter,
                (randomMiddleCenter + 2) % 4,
            ];
            break;
        }
        case NSCaseCentersShown.Random:
            randomCentersShown = pickRandomNElements([0, 1, 2, 3, 4], 3);
            break;
    }

    const randomCornersShown = [
        Math.floor(Math.random() * 2) * 2, // random number 0 or 2
        Math.floor(Math.random() * 2) * 2 + 1, // random number 1 or 3
    ];

    const question: NSCaseTrainerQuestion = {
        caseCore,
        randomYRotationIndex,
        randomRotation,
        randomCentersShown,
        randomCornersShown,
        answer,
    } as NSCaseTrainerQuestion;
    return question;
}

function useRandomQuestionGenerator(options: NSCaseTrainerOptions) {
    const [currentQuestion, setCurrentQuestion] = useState(
        generateRandomNSCaseQuestion(options),
    );

    function generateNextQuestion() {
        setCurrentQuestion(generateRandomNSCaseQuestion(options));
    }

    return [currentQuestion, generateNextQuestion] as const;
}

export const useNSCaseQuestionGenerator = useRandomQuestionGenerator;
