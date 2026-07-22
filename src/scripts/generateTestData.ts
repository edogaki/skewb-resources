import fs from "node:fs";
import { CubeOrientation } from "#/utils/renderer/skewbRenderer";
import {
    type NSCenterTrainerOptions,
    NSCenterTrainerType,
    nsCenterTrainerStateToCenterPerm,
} from "#/utils/trainer/skewbUtils";
import { generateRandomQuestion } from "#/utils/trainer/useQuestionGenerator";

const options: NSCenterTrainerOptions = {
    trainerType: NSCenterTrainerType.HorizontalU,
    showRightCornerColors: true,
    showRandomUCorners: true,
    renderer: {
        cubeOrientation: CubeOrientation.UpDown,
    },
    isKeyBindChangerOn: false,
};
const questions = Array.from({ length: 200 }, () => {
    const question = generateRandomQuestion(options);
    return {
        question,
        correctAnswer: nsCenterTrainerStateToCenterPerm(question),
    };
});

const code = `import type { CenterPerm, NSCenterTrainerState } from '#/utils/trainer/skewbUtils';

export const testQuestions: {
    question: NSCenterTrainerState,
    correctAnswer: CenterPerm,
}[] = ${JSON.stringify(questions, null, 2)};
`;

fs.writeFileSync("./src/test-data/testQuestions.gen.ts", code, "utf8");
