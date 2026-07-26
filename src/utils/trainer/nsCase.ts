import { Color, rotateColor } from "#/utils/renderer/color";
import {
    type CubeRotation,
    CubeYRotation,
    type CubeYRotationIndex,
} from "#/utils/renderer/math";
import type {
    RendererOptions,
    SkewbRendererState,
} from "#/utils/renderer/skewbRenderer";

export type CornerOrie = 0 | 1 | 2;

// biome-ignore format: keep layout intact
export const nsCases = [
    [{ centers: [Color.Blue, Color.Red, Color.Green, Color.Yellow, Color.Orange], corners: [2, 1] }, "1a"],
    [{ centers: [Color.Green, Color.Orange, Color.Blue, Color.Yellow, Color.Red], corners: [2, 1] }, "1b"],
    [{ centers: [Color.Yellow, Color.Orange, Color.Blue, Color.Red, Color.Green], corners: [2, 1] }, "2a"],
    [{ centers: [Color.Blue, Color.Red, Color.Yellow, Color.Orange, Color.Green], corners: [2, 1] }, "2b"],
    [{ centers: [Color.Blue, Color.Yellow, Color.Green, Color.Orange, Color.Red], corners: [2, 1] }, "1c"],
    [{ centers: [Color.Green, Color.Yellow, Color.Blue, Color.Red, Color.Orange], corners: [2, 1] }, "1d"],
    [{ centers: [Color.Green, Color.Orange, Color.Yellow, Color.Red, Color.Blue], corners: [2, 1] }, "2c"],
    [{ centers: [Color.Yellow, Color.Red, Color.Green, Color.Orange, Color.Blue], corners: [2, 1] }, "2d"],
    [{ centers: [Color.Orange, Color.Yellow, Color.Green, Color.Red, Color.Blue], corners: [2, 1] }, "3a"],
    [{ centers: [Color.Green, Color.Yellow, Color.Red, Color.Orange, Color.Blue], corners: [2, 1] }, "3b"],
    [{ centers: [Color.Green, Color.Blue, Color.Yellow, Color.Orange, Color.Red], corners: [2, 1] }, "4a"],
    [{ centers: [Color.Yellow, Color.Blue, Color.Green, Color.Red, Color.Orange], corners: [2, 1] }, "4b"],
    [{ centers: [Color.Blue, Color.Orange, Color.Red, Color.Yellow, Color.Green], corners: [2, 1] }, "3c"],
    [{ centers: [Color.Orange, Color.Red, Color.Blue, Color.Yellow, Color.Green], corners: [2, 1] }, "3d"],
    [{ centers: [Color.Yellow, Color.Red, Color.Blue, Color.Green, Color.Orange], corners: [2, 1] }, "4c"],
    [{ centers: [Color.Blue, Color.Orange, Color.Yellow, Color.Green, Color.Red], corners: [2, 1] }, "4d"],
    [{ centers: [Color.Orange, Color.Yellow, Color.Blue, Color.Green, Color.Red], corners: [2, 1] }, "5a"],
    [{ centers: [Color.Blue, Color.Yellow, Color.Red, Color.Green, Color.Orange], corners: [2, 1] }, "5b"],
    [{ centers: [Color.Yellow, Color.Orange, Color.Red, Color.Green, Color.Blue], corners: [2, 1] }, "6a"],
    [{ centers: [Color.Orange, Color.Red, Color.Yellow, Color.Green, Color.Blue], corners: [2, 1] }, "6b"],
    [{ centers: [Color.Green, Color.Blue, Color.Red, Color.Yellow, Color.Orange], corners: [2, 1] }, "5c"],
    [{ centers: [Color.Orange, Color.Blue, Color.Green, Color.Yellow, Color.Red], corners: [2, 1] }, "5d"],
    [{ centers: [Color.Orange, Color.Blue, Color.Yellow, Color.Red, Color.Green], corners: [2, 1] }, "6c"],
    [{ centers: [Color.Yellow, Color.Blue, Color.Red, Color.Orange, Color.Green], corners: [2, 1] }, "6d"],
    [{ centers: [Color.Green, Color.Orange, Color.Red, Color.Blue, Color.Yellow], corners: [2, 1] }, "7a"],
    [{ centers: [Color.Orange, Color.Red, Color.Green, Color.Blue, Color.Yellow], corners: [2, 1] }, "7b"],
    [{ centers: [Color.Blue, Color.Green, Color.Red, Color.Orange, Color.Yellow], corners: [2, 1] }, "7c"],
    [{ centers: [Color.Orange, Color.Green, Color.Blue, Color.Red, Color.Yellow], corners: [2, 1] }, "7d"],
    [{ centers: [Color.Green, Color.Blue, Color.Orange, Color.Red, Color.Yellow], corners: [2, 1] }, "8a"],
    [{ centers: [Color.Red, Color.Orange, Color.Blue, Color.Green, Color.Yellow], corners: [2, 1] }, "8b"],
    [{ centers: [Color.Red, Color.Blue, Color.Green, Color.Orange, Color.Yellow], corners: [2, 1] }, "8c"],
    [{ centers: [Color.Blue, Color.Red, Color.Orange, Color.Green, Color.Yellow], corners: [2, 1] }, "8d"],
    [{ centers: [Color.Red, Color.Blue, Color.Orange, Color.Yellow, Color.Green], corners: [2, 1] }, "9a"],
    [{ centers: [Color.Red, Color.Yellow, Color.Orange, Color.Green, Color.Blue], corners: [2, 1] }, "9b"],
    [{ centers: [Color.Orange, Color.Green, Color.Yellow, Color.Blue, Color.Red], corners: [2, 1] }, "10a"],
    [{ centers: [Color.Yellow, Color.Green, Color.Red, Color.Blue, Color.Orange], corners: [2, 1] }, "10b"],
    [{ centers: [Color.Blue, Color.Green, Color.Orange, Color.Yellow, Color.Red], corners: [2, 1] }, "11a"],
    [{ centers: [Color.Red, Color.Green, Color.Blue, Color.Yellow, Color.Orange], corners: [2, 1] }, "11b"],
    [{ centers: [Color.Red, Color.Orange, Color.Yellow, Color.Blue, Color.Green], corners: [2, 1] }, "12a"],
    [{ centers: [Color.Yellow, Color.Red, Color.Orange, Color.Blue, Color.Green], corners: [2, 1] }, "12b"],
    [{ centers: [Color.Red, Color.Yellow, Color.Green, Color.Blue, Color.Orange], corners: [2, 1] }, "11c"],
    [{ centers: [Color.Green, Color.Yellow, Color.Orange, Color.Blue, Color.Red], corners: [2, 1] }, "11d"],
    [{ centers: [Color.Yellow, Color.Green, Color.Orange, Color.Red, Color.Blue], corners: [2, 1] }, "12c"],
    [{ centers: [Color.Red, Color.Green, Color.Yellow, Color.Orange, Color.Blue], corners: [2, 1] }, "12d"],
    [{ centers: [Color.Yellow, Color.Green, Color.Blue, Color.Orange, Color.Red], corners: [2, 1] }, "13a"],
    [{ centers: [Color.Blue, Color.Green, Color.Yellow, Color.Red, Color.Orange], corners: [2, 1] }, "13b"],
    [{ centers: [Color.Yellow, Color.Orange, Color.Green, Color.Blue, Color.Red], corners: [2, 1] }, "13c"],
    [{ centers: [Color.Green, Color.Red, Color.Yellow, Color.Blue, Color.Orange], corners: [2, 1] }, "13d"],
    [{ centers: [Color.Blue, Color.Yellow, Color.Orange, Color.Red, Color.Green], corners: [2, 1] }, "14a"],
    [{ centers: [Color.Red, Color.Orange, Color.Green, Color.Yellow, Color.Blue], corners: [2, 1] }, "14b"],
    [{ centers: [Color.Red, Color.Yellow, Color.Blue, Color.Orange, Color.Green], corners: [2, 1] }, "14c"],
    [{ centers: [Color.Green, Color.Red, Color.Orange, Color.Yellow, Color.Blue], corners: [2, 1] }, "14d"],
    [{ centers: [Color.Orange, Color.Green, Color.Red, Color.Yellow, Color.Blue], corners: [2, 1] }, "15a"],
    [{ centers: [Color.Orange, Color.Yellow, Color.Red, Color.Blue, Color.Green], corners: [2, 1] }, "15b"],
    [{ centers: [Color.Red, Color.Blue, Color.Yellow, Color.Green, Color.Orange], corners: [2, 1] }, "135"],
    [{ centers: [Color.Yellow, Color.Blue, Color.Orange, Color.Green, Color.Red], corners: [2, 1] }, "136"],
    [{ centers: [Color.Orange, Color.Blue, Color.Red, Color.Green, Color.Yellow], corners: [2, 1] }, "16"],
    [{ centers: [Color.Blue, Color.Orange, Color.Green, Color.Red, Color.Yellow], corners: [2, 1] }, "17a"],
    [{ centers: [Color.Green, Color.Red, Color.Blue, Color.Orange, Color.Yellow], corners: [2, 1] }, "17b"],
    [{ centers: [Color.Red, Color.Green, Color.Orange, Color.Blue, Color.Yellow], corners: [2, 1] }, "17d"],
    [{ centers: [Color.Blue, Color.Yellow, Color.Green, Color.Orange, Color.Red], corners: [2, 0] }, "18a"],
    [{ centers: [Color.Green, Color.Orange, Color.Yellow, Color.Red, Color.Blue], corners: [2, 0] }, "18b"],
    [{ centers: [Color.Green, Color.Yellow, Color.Blue, Color.Red, Color.Orange], corners: [2, 0] }, "18c"],
    [{ centers: [Color.Blue, Color.Red, Color.Yellow, Color.Orange, Color.Green], corners: [2, 0] }, "18d"],
    [{ centers: [Color.Blue, Color.Red, Color.Green, Color.Yellow, Color.Orange], corners: [2, 0] }, "18e"],
    [{ centers: [Color.Yellow, Color.Orange, Color.Blue, Color.Red, Color.Green], corners: [2, 0] }, "18f"],
    [{ centers: [Color.Green, Color.Orange, Color.Blue, Color.Yellow, Color.Red], corners: [2, 0] }, "18g"],
    [{ centers: [Color.Yellow, Color.Red, Color.Green, Color.Orange, Color.Blue], corners: [2, 0] }, "18h"],
    [{ centers: [Color.Green, Color.Blue, Color.Yellow, Color.Orange, Color.Red], corners: [2, 0] }, "19a"],
    [{ centers: [Color.Green, Color.Yellow, Color.Red, Color.Orange, Color.Blue], corners: [2, 0] }, "19b"],
    [{ centers: [Color.Blue, Color.Orange, Color.Yellow, Color.Green, Color.Red], corners: [2, 0] }, "19c"],
    [{ centers: [Color.Orange, Color.Yellow, Color.Green, Color.Red, Color.Blue], corners: [2, 0] }, "19d"],
    [{ centers: [Color.Yellow, Color.Red, Color.Blue, Color.Green, Color.Orange], corners: [2, 0] }, "19e"],
    [{ centers: [Color.Orange, Color.Red, Color.Blue, Color.Yellow, Color.Green], corners: [2, 0] }, "19f"],
    [{ centers: [Color.Yellow, Color.Blue, Color.Green, Color.Red, Color.Orange], corners: [2, 0] }, "19g"],
    [{ centers: [Color.Blue, Color.Orange, Color.Red, Color.Yellow, Color.Green], corners: [2, 0] }, "19h"],
    [{ centers: [Color.Orange, Color.Red, Color.Yellow, Color.Green, Color.Blue], corners: [2, 0] }, "20a"],
    [{ centers: [Color.Green, Color.Blue, Color.Red, Color.Yellow, Color.Orange], corners: [2, 0] }, "20b"],
    [{ centers: [Color.Orange, Color.Yellow, Color.Blue, Color.Green, Color.Red], corners: [2, 0] }, "20c"],
    [{ centers: [Color.Yellow, Color.Blue, Color.Red, Color.Orange, Color.Green], corners: [2, 0] }, "20d"],
    [{ centers: [Color.Blue, Color.Yellow, Color.Red, Color.Green, Color.Orange], corners: [2, 0] }, "20e"],
    [{ centers: [Color.Yellow, Color.Orange, Color.Red, Color.Green, Color.Blue], corners: [2, 0] }, "20f"],
    [{ centers: [Color.Orange, Color.Blue, Color.Yellow, Color.Red, Color.Green], corners: [2, 0] }, "20g"],
    [{ centers: [Color.Orange, Color.Blue, Color.Green, Color.Yellow, Color.Red], corners: [2, 0] }, "20h"],
    [{ centers: [Color.Blue, Color.Red, Color.Orange, Color.Green, Color.Yellow], corners: [2, 0] }, "21a"],
    [{ centers: [Color.Red, Color.Orange, Color.Blue, Color.Green, Color.Yellow], corners: [2, 0] }, "21b"],
    [{ centers: [Color.Orange, Color.Green, Color.Blue, Color.Red, Color.Yellow], corners: [2, 0] }, "21c"],
    [{ centers: [Color.Orange, Color.Red, Color.Green, Color.Blue, Color.Yellow], corners: [2, 0] }, "21d"],
    [{ centers: [Color.Green, Color.Blue, Color.Orange, Color.Red, Color.Yellow], corners: [2, 0] }, "21e"],
    [{ centers: [Color.Red, Color.Blue, Color.Green, Color.Orange, Color.Yellow], corners: [2, 0] }, "21f"],
    [{ centers: [Color.Blue, Color.Green, Color.Red, Color.Orange, Color.Yellow], corners: [2, 0] }, "21g"],
    [{ centers: [Color.Green, Color.Orange, Color.Red, Color.Blue, Color.Yellow], corners: [2, 0] }, "21h"],
    [{ centers: [Color.Yellow, Color.Green, Color.Red, Color.Blue, Color.Orange], corners: [2, 0] }, "22a"],
    [{ centers: [Color.Red, Color.Blue, Color.Orange, Color.Yellow, Color.Green], corners: [2, 0] }, "22b"],
    [{ centers: [Color.Red, Color.Yellow, Color.Orange, Color.Green, Color.Blue], corners: [2, 0] }, "22c"],
    [{ centers: [Color.Orange, Color.Green, Color.Yellow, Color.Blue, Color.Red], corners: [2, 0] }, "22d"],
    [{ centers: [Color.Red, Color.Yellow, Color.Green, Color.Blue, Color.Orange], corners: [2, 0] }, "23a"],
    [{ centers: [Color.Red, Color.Orange, Color.Yellow, Color.Blue, Color.Green], corners: [2, 0] }, "23b"],
    [{ centers: [Color.Yellow, Color.Green, Color.Orange, Color.Red, Color.Blue], corners: [2, 0] }, "23c"],
    [{ centers: [Color.Blue, Color.Green, Color.Orange, Color.Yellow, Color.Red], corners: [2, 0] }, "23d"],
    [{ centers: [Color.Green, Color.Yellow, Color.Orange, Color.Blue, Color.Red], corners: [2, 0] }, "23e"],
    [{ centers: [Color.Red, Color.Green, Color.Yellow, Color.Orange, Color.Blue], corners: [2, 0] }, "23f"],
    [{ centers: [Color.Red, Color.Green, Color.Blue, Color.Yellow, Color.Orange], corners: [2, 0] }, "23g"],
    [{ centers: [Color.Yellow, Color.Red, Color.Orange, Color.Blue, Color.Green], corners: [2, 0] }, "23h"],
    [{ centers: [Color.Blue, Color.Yellow, Color.Orange, Color.Red, Color.Green], corners: [2, 0] }, "24a"],
    [{ centers: [Color.Blue, Color.Green, Color.Yellow, Color.Red, Color.Orange], corners: [2, 0] }, "24b"],
    [{ centers: [Color.Red, Color.Orange, Color.Green, Color.Yellow, Color.Blue], corners: [2, 0] }, "24c"],
    [{ centers: [Color.Yellow, Color.Orange, Color.Green, Color.Blue, Color.Red], corners: [2, 0] }, "24d"],
    [{ centers: [Color.Yellow, Color.Green, Color.Blue, Color.Orange, Color.Red], corners: [2, 0] }, "25a"],
    [{ centers: [Color.Red, Color.Yellow, Color.Blue, Color.Orange, Color.Green], corners: [2, 0] }, "25b"],
    [{ centers: [Color.Green, Color.Red, Color.Orange, Color.Yellow, Color.Blue], corners: [2, 0] }, "25c"],
    [{ centers: [Color.Green, Color.Red, Color.Yellow, Color.Blue, Color.Orange], corners: [2, 0] }, "25d"],
    [{ centers: [Color.Yellow, Color.Blue, Color.Orange, Color.Green, Color.Red], corners: [2, 0] }, "26a"],
    [{ centers: [Color.Orange, Color.Yellow, Color.Red, Color.Blue, Color.Green], corners: [2, 0] }, "26b"],
    [{ centers: [Color.Orange, Color.Green, Color.Red, Color.Yellow, Color.Blue], corners: [2, 0] }, "26c"],
    [{ centers: [Color.Red, Color.Blue, Color.Yellow, Color.Green, Color.Orange], corners: [2, 0] }, "26d"],
    [{ centers: [Color.Red, Color.Green, Color.Orange, Color.Blue, Color.Yellow], corners: [2, 0] }, "27"],
    [{ centers: [Color.Orange, Color.Blue, Color.Red, Color.Green, Color.Yellow], corners: [2, 0] }, "28"],
    [{ centers: [Color.Blue, Color.Orange, Color.Green, Color.Red, Color.Yellow], corners: [2, 0] }, "29a"],
    [{ centers: [Color.Green, Color.Red, Color.Blue, Color.Orange, Color.Yellow], corners: [2, 0] }, "29b"],
    [{ centers: [Color.Yellow, Color.Green, Color.Blue, Color.Orange, Color.Red], corners: [0, 0] }, "30a"],
    [{ centers: [Color.Blue, Color.Green, Color.Yellow, Color.Red, Color.Orange], corners: [0, 0] }, "30b"],
    [{ centers: [Color.Orange, Color.Green, Color.Red, Color.Yellow, Color.Blue], corners: [0, 0] }, "31"],
    [{ centers: [Color.Blue, Color.Green, Color.Red, Color.Orange, Color.Yellow], corners: [0, 0] }, "H-U L"],
    [{ centers: [Color.Orange, Color.Green, Color.Blue, Color.Red, Color.Yellow], corners: [0, 0] }, "H-U R"],
    [{ centers: [Color.Yellow, Color.Green, Color.Red, Color.Blue, Color.Orange], corners: [0, 0] }, "V-U"],
    [{ centers: [Color.Blue, Color.Orange, Color.Green, Color.Red, Color.Yellow], corners: [0, 0] }, "32"],
    [{ centers: [Color.Orange, Color.Blue, Color.Red, Color.Green, Color.Yellow], corners: [0, 0] }, "33"],
    [{ centers: [Color.Blue, Color.Green, Color.Orange, Color.Yellow, Color.Red], corners: [0, 0] }, "34a"],
    [{ centers: [Color.Yellow, Color.Green, Color.Orange, Color.Red, Color.Blue], corners: [0, 0] }, "34b"],
    [{ centers: [Color.Blue, Color.Orange, Color.Yellow, Color.Green, Color.Red], corners: [0, 0] }, "35a"],
    [{ centers: [Color.Green, Color.Blue, Color.Yellow, Color.Orange, Color.Red], corners: [0, 0] }, "35b"],
    [{ centers: [Color.Orange, Color.Blue, Color.Yellow, Color.Red, Color.Green], corners: [0, 0] }, "36a"],
    [{ centers: [Color.Orange, Color.Red, Color.Yellow, Color.Green, Color.Blue], corners: [0, 0] }, "36b"],
    [{ centers: [Color.Blue, Color.Red, Color.Yellow, Color.Orange, Color.Green], corners: [0, 0] }, "37a"],
    [{ centers: [Color.Green, Color.Orange, Color.Yellow, Color.Red, Color.Blue], corners: [0, 0] }, "37b"],
    [{ centers: [Color.Red, Color.Green, Color.Orange, Color.Blue, Color.Yellow], corners: [0, 0] }, "137a"],
] as const;

export type NSCaseCore = (typeof nsCases)[number][0];

export type NSCase = (typeof nsCases)[number][1];

export const nsCasesReverseMap = new Map<NSCase, NSCaseCore>(
    nsCases.map(([nscc, nsc]) => [nsc, nscc]),
);

export const NSCaseTrainerType = {
    EntireCube: "Entire Cube Visible",
    OneLookingMode: "1-Looking Mode",
    Pseudo2: "Pseudo 2-Sided Recognition",
} as const;
export type NSCaseTrainerType =
    (typeof NSCaseTrainerType)[keyof typeof NSCaseTrainerType];

export const NSCaseButtonsViewType = {
    Type1: "Buttons View Type 1",
    Type2: "Buttons View Type 2",
} as const;
export type NSCaseButtonsViewType =
    (typeof NSCaseButtonsViewType)[keyof typeof NSCaseButtonsViewType];

export const NSCaseCentersShown = {
    HorizontalU: "Show Horizontal U centers (LFR)",
    O: "Show O centers (FRU)",
    VerticalU: "Show Vertical U centers (FUB)",
    Random: "Show random centers subset",
} as const;
export type NSCaseCentersShown =
    (typeof NSCaseCentersShown)[keyof typeof NSCaseCentersShown];

export const nonRandomNSCaseCentersShown = Object.values(
    NSCaseCentersShown,
).filter((v) => v !== NSCaseCentersShown.Random) as NSCaseCentersShown[];

export interface NSCaseTrainerOptions {
    trainerType: NSCaseTrainerType;
    buttonsViewType: NSCaseButtonsViewType;
    type2ShowRenderedCaseInButton: boolean;
    renderer: RendererOptions;
    caseEnabled: Partial<Record<NSCase, boolean>>;
    isCaseEnabledMenuOn: boolean;
    centersShown: NSCaseCentersShown;
    altNames: Partial<Record<NSCase, string>>;
}

export interface NSCaseTrainerQuestion {
    caseCore: NSCaseCore;
    randomYRotationIndex: CubeYRotationIndex;
    randomRotation: CubeRotation;
    randomCentersShown: [number, number, number];
    randomCornersShown: [number, number];
    answer: NSCase;
}

const uCornerColors: Color[][] = [
    [Color.Yellow, Color.Green, Color.Red],
    [Color.Yellow, Color.Orange, Color.Green],
    [Color.Yellow, Color.Blue, Color.Orange],
    [Color.Yellow, Color.Red, Color.Blue],
];

export function nsCaseTrainerQuestionToSkewbRendererState(
    nsCaseTrainerQuestion: NSCaseTrainerQuestion,
    options: NSCaseTrainerOptions,
) {
    const {
        caseCore,
        randomYRotationIndex,
        randomRotation,
        randomCentersShown,
        randomCornersShown,
    } = nsCaseTrainerQuestion;

    const yRotator = Object.fromEntries(
        Object.values(Color).map((c) => [
            c,
            rotateColor(c, CubeYRotation[randomYRotationIndex]),
        ]),
    ) as Record<Color, Color>;

    const yRotatedCenters = [
        yRotator[caseCore.centers[(4 - randomYRotationIndex + 0) % 4]],
        yRotator[caseCore.centers[(4 - randomYRotationIndex + 1) % 4]],
        yRotator[caseCore.centers[(4 - randomYRotationIndex + 2) % 4]],
        yRotator[caseCore.centers[(4 - randomYRotationIndex + 3) % 4]],
        yRotator[caseCore.centers[4]],
    ];

    const cornerOries = [
        caseCore.corners[0],
        caseCore.corners[1],
        3 - caseCore.corners[0],
        3 - caseCore.corners[1],
    ];

    const yRotatedCorners = [
        cornerOries[(4 - randomYRotationIndex + 0) % 4],
        cornerOries[(4 - randomYRotationIndex + 1) % 4],
        cornerOries[(4 - randomYRotationIndex + 2) % 4],
        cornerOries[(4 - randomYRotationIndex + 3) % 4],
    ];

    const uCorners = [
        [
            ...uCornerColors[0].slice(-yRotatedCorners[0]),
            ...uCornerColors[0].slice(0, -yRotatedCorners[0]),
        ],
        [
            ...uCornerColors[1].slice(-yRotatedCorners[1]),
            ...uCornerColors[1].slice(0, -yRotatedCorners[1]),
        ],
        [
            ...uCornerColors[2].slice(-yRotatedCorners[2]),
            ...uCornerColors[2].slice(0, -yRotatedCorners[2]),
        ],
        [
            ...uCornerColors[3].slice(-yRotatedCorners[3]),
            ...uCornerColors[3].slice(0, -yRotatedCorners[3]),
        ],
    ];

    const stickerRotator = Object.fromEntries(
        Object.values(Color).map((c) => [c, rotateColor(c, randomRotation)]),
    ) as Record<Color, Color>;

    return [
        stickerRotator[
            options.trainerType === NSCaseTrainerType.EntireCube ||
            (options.trainerType === NSCaseTrainerType.OneLookingMode &&
                uCorners[3][1] === Color.Yellow &&
                randomCornersShown.includes(3))
                ? uCorners[3][1]
                : Color.Gray
        ],
        stickerRotator[
            options.trainerType === NSCaseTrainerType.EntireCube ||
            (options.trainerType === NSCaseTrainerType.OneLookingMode &&
                uCorners[0][2] === Color.Yellow &&
                randomCornersShown.includes(0))
                ? uCorners[0][2]
                : Color.Gray
        ],
        stickerRotator[
            options.trainerType === NSCaseTrainerType.EntireCube ||
            options.trainerType === NSCaseTrainerType.OneLookingMode
                ? Color.Red
                : Color.Gray
        ],
        stickerRotator[
            options.trainerType === NSCaseTrainerType.EntireCube ||
            options.trainerType === NSCaseTrainerType.OneLookingMode
                ? Color.Red
                : Color.Gray
        ],
        stickerRotator[
            options.trainerType === NSCaseTrainerType.EntireCube ||
            (options.trainerType === NSCaseTrainerType.Pseudo2 &&
                yRotatedCenters[0] === Color.Yellow) ||
            (options.trainerType === NSCaseTrainerType.OneLookingMode &&
                randomCentersShown.includes(0))
                ? yRotatedCenters[0]
                : Color.Gray
        ],

        stickerRotator[
            options.trainerType === NSCaseTrainerType.EntireCube ||
            (options.trainerType === NSCaseTrainerType.OneLookingMode &&
                uCorners[0][1] === Color.Yellow &&
                randomCornersShown.includes(0)) ||
            options.trainerType === NSCaseTrainerType.Pseudo2
                ? uCorners[0][1]
                : Color.Gray
        ],
        stickerRotator[
            options.trainerType === NSCaseTrainerType.EntireCube ||
            (options.trainerType === NSCaseTrainerType.OneLookingMode &&
                uCorners[1][2] === Color.Yellow &&
                randomCornersShown.includes(1)) ||
            options.trainerType === NSCaseTrainerType.Pseudo2
                ? uCorners[1][2]
                : Color.Gray
        ],
        stickerRotator[
            options.trainerType === NSCaseTrainerType.EntireCube ||
            options.trainerType === NSCaseTrainerType.Pseudo2
                ? Color.Green
                : Color.Gray
        ],
        stickerRotator[Color.Green],
        stickerRotator[
            options.trainerType === NSCaseTrainerType.EntireCube ||
            options.trainerType === NSCaseTrainerType.Pseudo2 ||
            (options.trainerType === NSCaseTrainerType.OneLookingMode &&
                randomCentersShown.includes(1))
                ? yRotatedCenters[1]
                : Color.Gray
        ],

        stickerRotator[Color.White],
        stickerRotator[Color.White],
        stickerRotator[Color.White],
        stickerRotator[Color.White],
        stickerRotator[Color.White],

        stickerRotator[
            options.trainerType === NSCaseTrainerType.EntireCube ||
            (options.trainerType === NSCaseTrainerType.OneLookingMode &&
                uCorners[3][0] === Color.Yellow &&
                randomCornersShown.includes(3))
                ? uCorners[3][0]
                : Color.Gray
        ],
        stickerRotator[
            options.trainerType === NSCaseTrainerType.EntireCube ||
            (options.trainerType === NSCaseTrainerType.OneLookingMode &&
                uCorners[2][0] === Color.Yellow &&
                randomCornersShown.includes(2))
                ? uCorners[2][0]
                : Color.Gray
        ],
        stickerRotator[
            options.trainerType === NSCaseTrainerType.EntireCube ||
            (options.trainerType === NSCaseTrainerType.OneLookingMode &&
                uCorners[1][0] === Color.Yellow &&
                randomCornersShown.includes(1))
                ? uCorners[1][0]
                : Color.Gray
        ],
        stickerRotator[
            options.trainerType === NSCaseTrainerType.EntireCube ||
            (options.trainerType === NSCaseTrainerType.OneLookingMode &&
                uCorners[0][0] === Color.Yellow &&
                randomCornersShown.includes(0))
                ? uCorners[0][0]
                : Color.Gray
        ],
        stickerRotator[
            options.trainerType === NSCaseTrainerType.EntireCube ||
            (options.trainerType === NSCaseTrainerType.Pseudo2 &&
                yRotatedCenters[4] === Color.Yellow) ||
            (options.trainerType === NSCaseTrainerType.OneLookingMode &&
                randomCentersShown.includes(4))
                ? yRotatedCenters[4]
                : Color.Gray
        ],

        stickerRotator[
            options.trainerType === NSCaseTrainerType.EntireCube ||
            (options.trainerType === NSCaseTrainerType.OneLookingMode &&
                uCorners[1][1] === Color.Yellow &&
                randomCornersShown.includes(1)) ||
            options.trainerType === NSCaseTrainerType.Pseudo2
                ? uCorners[1][1]
                : Color.Gray
        ],
        stickerRotator[
            options.trainerType === NSCaseTrainerType.EntireCube ||
            (options.trainerType === NSCaseTrainerType.OneLookingMode &&
                uCorners[2][2] === Color.Yellow &&
                randomCornersShown.includes(2)) ||
            options.trainerType === NSCaseTrainerType.Pseudo2
                ? uCorners[2][2]
                : Color.Gray
        ],
        stickerRotator[
            options.trainerType === NSCaseTrainerType.EntireCube ||
            options.trainerType === NSCaseTrainerType.Pseudo2
                ? Color.Orange
                : Color.Gray
        ],
        stickerRotator[
            options.trainerType === NSCaseTrainerType.EntireCube ||
            options.trainerType === NSCaseTrainerType.Pseudo2
                ? Color.Orange
                : Color.Gray
        ],
        stickerRotator[
            options.trainerType === NSCaseTrainerType.EntireCube ||
            options.trainerType === NSCaseTrainerType.Pseudo2 ||
            (options.trainerType === NSCaseTrainerType.OneLookingMode &&
                randomCentersShown.includes(2))
                ? yRotatedCenters[2]
                : Color.Gray
        ],

        stickerRotator[
            options.trainerType === NSCaseTrainerType.EntireCube ||
            (options.trainerType === NSCaseTrainerType.OneLookingMode &&
                uCorners[2][1] === Color.Yellow &&
                randomCornersShown.includes(2))
                ? uCorners[2][1]
                : Color.Gray
        ],
        stickerRotator[
            options.trainerType === NSCaseTrainerType.EntireCube ||
            (options.trainerType === NSCaseTrainerType.OneLookingMode &&
                uCorners[3][2] === Color.Yellow &&
                randomCornersShown.includes(3))
                ? uCorners[3][2]
                : Color.Gray
        ],
        stickerRotator[
            options.trainerType === NSCaseTrainerType.EntireCube ||
            options.trainerType === NSCaseTrainerType.OneLookingMode
                ? Color.Blue
                : Color.Gray
        ],
        stickerRotator[
            options.trainerType === NSCaseTrainerType.EntireCube
                ? Color.Blue
                : Color.Gray
        ],
        stickerRotator[
            options.trainerType === NSCaseTrainerType.EntireCube ||
            (options.trainerType === NSCaseTrainerType.Pseudo2 &&
                yRotatedCenters[3] === Color.Yellow) ||
            (options.trainerType === NSCaseTrainerType.OneLookingMode &&
                randomCentersShown.includes(3))
                ? yRotatedCenters[3]
                : Color.Gray
        ],
    ] as readonly Color[] as SkewbRendererState;
}

const piColumn = [
    ["Pi + Swirl Perm", ["1a", "1b", "2a", "2b", "1c", "1d", "2c", "2d"]],
    ["Pi + Wat Perm", ["3a", "3b", "4a", "4b", "3c", "3d", "4c", "4d"]],
    ["Pi + X Perm", ["5a", "5b", "6a", "6b", "5c", "5d", "6c", "6d"]],
    [
        "Pi + Horizontal U Perm",
        ["7a", "7b", "7c", "7d", "8a", "8b", "8c", "8d"],
    ],
    ["Pi + Vertical U Perm", ["9a", "9b", "10a", "10b"]],
    ["Pi + O Perm", ["11a", "11b", "12a", "12b", "11c", "11d", "12c", "12d"]],
    [
        "Pi + Z Perm Conjugate",
        ["13a", "13b", "13c", "13d", "14a", "14b", "14c", "14d"],
    ],
    ["Pi + Triple Sledge", ["15a", "15b", "135", "136"]],
    ["Pi + H or Z Perm and Pure", ["16", "17a", "17b", "17d"]],
] as const;

const peanutColumn = [
    [
        "Peanut + Swirl Perm",
        ["18a", "18b", "18c", "18d", "18e", "18f", "18g", "18h"],
    ],
    [
        "Peanut + Wat Perm",
        ["19a", "19b", "19c", "19d", "19e", "19f", "19g", "19h"],
    ],
    [
        "Peanut + X Perm",
        ["20a", "20b", "20c", "20d", "20e", "20f", "20g", "20h"],
    ],
    [
        "Peanut + Horizontal U Perm",
        ["21a", "21b", "21c", "21d", "21e", "21f", "21g", "21h"],
    ],
    ["Peanut + Vertical U Perm", ["22a", "22b", "22c", "22d"]],
    [
        "Peanut + O Perm",
        ["23a", "23b", "23c", "23d", "23e", "23f", "23g", "23h"],
    ],
    [
        "Peanut + Z Perm Conjugate",
        ["24a", "24b", "24c", "24d", "25a", "25b", "25c", "25d"],
    ],
    ["Peanut + Triple Sledge", ["26a", "26b", "26c", "26d"]],
    ["Peanut + H or Z Perm and Pure", ["27", "28", "29a", "29b"]],
] as const;

const pureColumn = [
    [
        "L4C",
        ["30a", "30b", "31", "H-U L", "H-U R", "V-U", "32", "33", "34a", "34b"],
    ],
    ["L5C", ["35a", "35b", "36a", "36b", "37a", "37b"]],
    ["L0C", ["137a"]],
] as const;

export const nsCaseButtonsLayout = [
    ["Pi", piColumn],
    ["Peanut", peanutColumn],
    ["Pure", pureColumn],
] as const;

export type NSCaseSet = (typeof nsCaseButtonsLayout)[number][1][number][0];
