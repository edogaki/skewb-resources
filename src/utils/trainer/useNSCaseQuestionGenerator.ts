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
        console.log(counter);
    }

    const randomRotation =
        CubeRotation[Math.floor(Math.random() * CubeRotation.length)];

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
