import { KTransformation } from "cubing/kpuzzle";
import { puzzles } from "cubing/puzzles";
import { TwistyPlayer } from "cubing/twisty";
import { useEffect, useMemo, useRef } from "react";
import type { SkewbRenderer3DState } from "#/utils/renderer/skewbRenderer3D";

const dFaces = new Set([10, 11, 12, 13, 14]);

function SkewbRenderer3D({ state }: { state: SkewbRenderer3DState }) {
    const twistyRef = useRef<HTMLDivElement>(null);
    const player = useMemo(
        () =>
            new TwistyPlayer({
                puzzle: "skewb",
                hintFacelets: "floating",
                experimentalSetupAlg: "x2",
                cameraLatitude: 20,
                cameraLongitude: 35,
                controlPanel: "none",
            }),
        [],
    );
    useEffect(() => {
        async function setupPlayer() {
            if (!twistyRef.current) return;

            const kpuzzle = await puzzles.skewb.kpuzzle();
            //player.experimentalSprite =
            //"https://experiments.cubing.net/cubing.js/twisty/mkbhd-sprite-red.png";
            let transformation = kpuzzle.algToTransformation(
                `z2 ${state.rotationAlg}`,
            );
            const newTransformation = new KTransformation(
                kpuzzle,
                state.transformationData,
            );
            transformation?.applyTransformation(newTransformation);
            player.experimentalModel.setupTransformation.set(transformation);

            // player.jumpToEnd();
            player.experimentalStickeringMaskOrbits = state.mask;

            if (twistyRef.current.children.length === 0) {
                twistyRef.current.replaceChildren(player);
            }
        }
        setupPlayer();
    }, [state, player]);
    return <div className="skewb-box" ref={twistyRef}></div>;
}

export default SkewbRenderer3D;
