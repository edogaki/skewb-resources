import {
    CenterPiece,
    rubikskewbTurnToStateRotation,
    SkewbMatrixState,
} from "../skewb-matrix/SkewbMatrixState";
import { solveSkewb } from "../skewb-matrix/solver";
import { RubikskewbAlg, type WCAAlg } from "../solver/alg";
import type { IntFrom0To } from "../solver/helperTypes";
import type { OneLookTrainerOptions } from ".";

export function generateRandomNSCase(
    layerColor: OneLookTrainerOptions["layerColor"],
) {
    const randomVars: [
        IntFrom0To<6>,
        IntFrom0To<3>,
        IntFrom0To<3>,
        IntFrom0To<5>,
        IntFrom0To<4>,
        IntFrom0To<3>,
        IntFrom0To<4>,
    ] = [
        Math.floor(Math.random() * 6) as IntFrom0To<6>,
        Math.floor(Math.random() * 3) as IntFrom0To<3>,
        Math.floor(Math.random() * 3) as IntFrom0To<3>,
        Math.floor(Math.random() * 5) as IntFrom0To<5>,
        Math.floor(Math.random() * 4) as IntFrom0To<4>,
        Math.floor(Math.random() * 3) as IntFrom0To<3>,
        Math.floor(Math.random() * 4) as IntFrom0To<4>,
    ];

    const randomLayerCenter = randomVars[0];
    const randomCornerOrie1 = randomVars[1];
    const randomCornerOrie2 = randomVars[2];
    const randomCenterPerm = [randomVars[3], randomVars[4], randomVars[5]];
    const randomZRotation = randomVars[6];

    const state = new SkewbMatrixState();
    const chosenLayerCenter =
        layerColor === "random"
            ? randomLayerCenter
            : CenterPiece.find(
                  (cp) => state.centerPieceColors[cp] === layerColor,
              );

    if (chosenLayerCenter === undefined) {
        throw new Error(
            `color ${layerColor} not found in state centerPieceColors ${Object.entries(state.centerPieceColors)}!`,
        );
    }

    const { cornerPieceLocations, centerPieceLocations } =
        state.getL2LPieceLocations(chosenLayerCenter);

    state.turnCornerPiece(cornerPieceLocations[0], randomCornerOrie1);
    state.turnCornerPiece(cornerPieceLocations[1], randomCornerOrie2);
    state.turnCornerPiece(cornerPieceLocations[2], 3 - randomCornerOrie1);
    state.turnCornerPiece(cornerPieceLocations[3], 3 - randomCornerOrie2);

    const origCenterPieces = state.centerPieces.slice();
    const origCenters = centerPieceLocations.slice();

    const shuffledCenters: CenterPiece[] = [];
    let parity = 0;
    for (let i = 0; i < 3; i++) {
        parity += randomCenterPerm[i];
        shuffledCenters.push(centerPieceLocations[randomCenterPerm[i]]);
        centerPieceLocations.splice(randomCenterPerm[i], 1);
    }
    shuffledCenters.push(centerPieceLocations[parity % 2]);
    shuffledCenters.push(centerPieceLocations[(parity + 1) % 2]);

    for (let i = 0; i < shuffledCenters.length; i++) {
        state.centerPieces[shuffledCenters[i]] =
            origCenterPieces[origCenters[i]];
    }

    state.rotateCenterToAxis(chosenLayerCenter, 0b000001);

    state.applyRubikskewbAlg(
        [
            new RubikskewbAlg(""),
            new RubikskewbAlg("z"),
            new RubikskewbAlg("z2"),
            new RubikskewbAlg("z'"),
        ][randomZRotation],
    );

    return state;
}

export async function generateRandomOneLookCase(
    layerAlgs: RubikskewbAlg[],
    layerColor: OneLookTrainerOptions["layerColor"],
) {
    let state: SkewbMatrixState;
    let scrambleAlg: WCAAlg;
    do {
        state = generateRandomNSCase(layerColor);
        const randomLayerAlg =
            layerAlgs.length === 0
                ? new RubikskewbAlg("")
                : layerAlgs[
                      Math.floor(Math.random() * layerAlgs.length)
                  ].clone();

        // remove all rotations at the start & end
        while (rubikskewbTurnToStateRotation[randomLayerAlg.turns[0]]) {
            randomLayerAlg.turns.splice(0, 1);
        }
        while (
            rubikskewbTurnToStateRotation[
                randomLayerAlg.turns[randomLayerAlg.turns.length]
            ]
        ) {
            randomLayerAlg.turns.pop();
        }

        state.applyRubikskewbAlg(randomLayerAlg.invert());

        state.standardizeForWCA();
        scrambleAlg = (await solveSkewb(state)).invert();
    } while (scrambleAlg.turns.length < 7);

    return {
        state,
        scrambleAlg,
    };
}
