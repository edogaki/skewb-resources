import { TwistyPlayer } from "cubing/twisty";
import { useEffect, useMemo, useRef } from "react";

export default function SkewbPlayer({ alg }: { alg: string }) {
    const twistyPlayer = useMemo(
        () =>
            new TwistyPlayer({
                puzzle: "skewb",
            }),
        [],
    );
    const playerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const player = playerRef.current;
        if (player) {
            player.appendChild(twistyPlayer);
        }
    }, [twistyPlayer]);

    useEffect(() => {
        twistyPlayer.alg = alg;
    }, [twistyPlayer, alg]);

    return (
        <div
            style={{ width: "100%", maxWidth: "400px", margin: "0 auto" }}
            ref={playerRef}
        ></div>
    );
}
