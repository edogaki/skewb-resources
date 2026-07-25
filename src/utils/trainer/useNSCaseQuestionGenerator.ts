import { useState } from "react";
import { Color } from "../renderer/color";
import { CubeRotation, type CubeYRotationIndex } from "../renderer/math";
import {
    type NSCaseCore,
    type NSCaseTrainerOptions,
    type NSCaseTrainerQuestion,
    NSCaseTrainerType,
    nsCases,
} from "./nsCase";

export function generateRandomNSCaseQuestion(options: NSCaseTrainerOptions) {
    const randomYRotationIndex = Math.floor(
        Math.random() * 4,
    ) as CubeYRotationIndex;

    let nsCase = nsCases[Math.floor(Math.random() * nsCases.length)];

    if (options.trainerType === NSCaseTrainerType.Pseudo2) {
        while (
            nsCase[0].centers[(4 - randomYRotationIndex + 1) % 4] ===
                Color.Yellow ||
            nsCase[0].centers[(4 - randomYRotationIndex + 2) % 4] ===
                Color.Yellow
        ) {
            nsCase = nsCases[Math.floor(Math.random() * nsCases.length)];
        }
    }

    const caseCore: NSCaseCore = nsCase[0];

    const randomRotation =
        CubeRotation[Math.floor(Math.random() * CubeRotation.length)];

    const answer = nsCase[1];

    const question: NSCaseTrainerQuestion = {
        caseCore,
        randomYRotationIndex,
        randomRotation,
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
