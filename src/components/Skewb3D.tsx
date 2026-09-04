import { TwistyPlayer } from "cubing/twisty";
import { useEffect, useRef } from "react";
import type { WCAAlg } from "#/utils/solver/alg";

const player = new TwistyPlayer({
    puzzle: "skewb",
    background: "none",
    controlPanel: "none",
});

export default function Skewb3D({ setupAlg }: { setupAlg: WCAAlg }) {
    const divRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (!divRef.current) return;
        divRef.current.innerHTML = "";
        divRef.current.appendChild(player);
        return () => {};
    }, []);
    useEffect(() => {
        player.experimentalSetupAlg = setupAlg.toString();
    }, [setupAlg]);
    return <div ref={divRef}></div>;
}
