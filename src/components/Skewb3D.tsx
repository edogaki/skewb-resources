import { useEffect, useRef } from "react";
import { skewbStateRenderer } from "#/utils/skewb-matrix/three";
import type { WCAAlg } from "#/utils/solver/alg";

export default function Skewb3D({ setupAlg }: { setupAlg: WCAAlg }) {
    const skewbStateRendererContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!skewbStateRendererContainerRef.current) return;
        skewbStateRenderer.mount(skewbStateRendererContainerRef.current);
        return () => {
            skewbStateRenderer.unmount();
        };
    }, []);

    useEffect(() => {
        skewbStateRenderer.setFromWCAAlg(setupAlg);
        skewbStateRenderer.resetGroupRotation();
    }, [setupAlg]);

    return (
        <div
            className="relative w-full h-auto aspect-square max-w-80"
            ref={skewbStateRendererContainerRef}
        ></div>
    );
}
