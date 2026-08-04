import type { KTransformationData } from "cubing/kpuzzle";

type FaceletMeshStickeringMask =
    | "regular"
    | "dim"
    | "oriented"
    | "experimentalOriented2"
    | "ignored"
    | "invisible"
    | "mystery";
type FaceletStickeringMask = {
    mask: FaceletMeshStickeringMask;
    hintMask?: FaceletMeshStickeringMask;
};
type PieceStickeringMask = {
    facelets: (FaceletMeshStickeringMask | FaceletStickeringMask | null)[];
};
type OrbitStickeringMask = { pieces: (PieceStickeringMask | null)[] };
export type StickeringMask = {
    specialBehaviour?: "picture";
    name?: string;
    orbits: Record<string, OrbitStickeringMask>;
};

export interface SkewbRenderer3DState {
    transformationData: KTransformationData;
    yRotation: number;
    rotationAlg: string;
    mask: StickeringMask;
}
