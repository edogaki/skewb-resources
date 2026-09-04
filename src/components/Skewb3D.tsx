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
    return <div ref={divRef}></div>;
}
