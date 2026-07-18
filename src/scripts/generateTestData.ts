import fs from "node:fs/promises";
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

fs.writeFile(
    "./test-data/testQuestions.json",
    JSON.stringify(questions, null, 2),
    "utf8",
);
