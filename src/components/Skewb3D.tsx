import { TwistyPlayer } from "cubing/twisty";
import { useEffect, useMemo, useRef } from "react";
import type { WCAAlg } from "#/utils/solver/alg";

export default function Skewb3D({ setupAlg }: { setupAlg: WCAAlg }) {
    const player = useMemo(
        () =>
            new TwistyPlayer({
                puzzle: "skewb",
                background: "none",
                controlPanel: "none",
            }),
        [],
    );
    const divRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (!divRef.current) return;
        divRef.current.innerHTML = "";
        divRef.current.appendChild(player);
        return () => {
            if (!divRef.current) return;
            divRef.current.removeChild(player);
            divRef.current.innerHTML = "";
        };
    }, [player]);
    useEffect(() => {
        if (!divRef.current) return;
        player.experimentalSetupAlg = setupAlg.toString();
    }, [setupAlg, player]);
    return (
        <div className="relative w-full">
            <button
                type="button"
                className="absolute left-0 top-1/2 hover:font-bold text-9xl -translate-y-1/2 z-100"
                onClick={async () => {
                    const orbitCoordinates =
                        await player.experimentalModel.twistySceneModel.orbitCoordinates.get();
                    const longitude = orbitCoordinates.longitude;
                    if (-45 < longitude && longitude <= 45) {
                        player.experimentalAddMove("z'");
                    } else if (45 < longitude && longitude <= 135) {
                        player.experimentalAddMove("x'");
                    } else if (135 < longitude || longitude <= -135) {
                        player.experimentalAddMove("z");
                    } else if (-135 < longitude || longitude <= -45) {
                        player.experimentalAddMove("x");
                    }
                }}
            >
                ⤹
            </button>
            <div ref={divRef} className="w-full flex justify-center"></div>
            <button
                type="button"
                className="absolute right-0 top-1/2 hover:font-bold text-9xl -translate-y-1/2 z-100"
                onClick={async () => {
                    const orbitCoordinates =
                        await player.experimentalModel.twistySceneModel.orbitCoordinates.get();
                    const longitude = orbitCoordinates.longitude;
                    if (-45 < longitude && longitude <= 45) {
                        player.experimentalAddMove("z");
                    } else if (45 < longitude && longitude <= 135) {
                        player.experimentalAddMove("x");
                    } else if (135 < longitude || longitude <= -135) {
                        player.experimentalAddMove("z'");
                    } else if (-135 < longitude || longitude <= -45) {
                        player.experimentalAddMove("x'");
                    }
                }}
            >
                ⤸
            </button>
        </div>
    );
}
