import { useEffect, useRef } from "react";
import { skewbStateRenderer } from "#/utils/skewb-matrix/three";
import type { WCAAlg } from "#/utils/solver/alg";

export default function Skewb3D({ setupAlg }: { setupAlg: WCAAlg }) {
    const skewbStateRendererRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!skewbStateRendererRef.current) return;
        skewbStateRendererRef.current.innerHTML = "";
        skewbStateRendererRef.current.appendChild(
            skewbStateRenderer.renderer.domElement,
        );
        return () => {
            if (!skewbStateRendererRef.current) return;
            skewbStateRendererRef.current.removeChild(
                skewbStateRenderer.renderer.domElement,
            );
            skewbStateRendererRef.current.innerHTML = "";
        };
    }, []);

    useEffect(() => {
        skewbStateRenderer.setFromWCAAlg(setupAlg);
        skewbStateRenderer.resetGroupRotation();
    }, [setupAlg]);

    return (
        <div>
            <div ref={skewbStateRendererRef} />
        </div>
    );
}
