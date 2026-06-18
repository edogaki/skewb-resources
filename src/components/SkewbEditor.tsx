import { type Dispatch, type SetStateAction, useState } from "react";
import { RubikskewbAlg, WCAAlg } from "#/utils/alg";
import { Color } from "#/utils/renderer/color";
import type { SkewbRendererState } from "#/utils/renderer/skewbRenderer";
import { SkewbState } from "#/utils/skewbState";
import SkewbPainter from "./SkewbPainter";

export default function SkewbEditor({
    state,
    setState,
}: {
    state: SkewbState;
    setState: Dispatch<SetStateAction<SkewbState>>;
}) {
    const [skewbRendererState, setSkewbRendererState] =
        useState<SkewbRendererState>(
            Array.from({ length: 30 }).fill(Color.White) as SkewbRendererState,
        );
    const [algText, setAlgText] = useState("");
    const [algErrorMessage, setAlgErrorMessage] = useState("");
    const [rubikskewbAlgText, setRubikskewbAlgText] = useState("");
    const [rubikskewbAlgErrorMessage, setRubikskewbAlgErrorMessage] =
        useState("");
    const [painterErrorMessage, setPainterErrorMessage] = useState("");
    return (
        <div className="flex flex-wrap gap-10">
            <div className="w-100">
                <h2 className="mb-2 text-lg font-semibold text-[var(--sea-ink)]">
                    Set state using alg
                </h2>
                <p className="text-red-400">{algErrorMessage}</p>
                <div>
                    <input
                        type="text"
                        placeholder="WCA Alg, e.g. U R U L R' U' B' U'"
                        className="w-full mr-3 mb-4 p-3 border rounded-md"
                        value={algText}
                        onChange={(e) => setAlgText(e.target.value)}
                    ></input>
                    <button
                        type="button"
                        className="mb-4 rounded-full border border-[rgba(23,58,64,0.2)] bg-white/50 px-5 py-2.5 text-sm font-semibold text-[var(--sea-ink)] no-underline transition hover:-translate-y-0.5 hover:border-[rgba(23,58,64,0.35)]"
                        onClick={() => {
                            const newState = new SkewbState();
                            try {
                                newState.applyWCAAlg(new WCAAlg(algText));
                                setAlgErrorMessage("");
                                setState(newState);
                            } catch (err) {
                                if (err instanceof Error) {
                                    setAlgErrorMessage(err.message);
                                } else {
                                    console.error("Unexpected error: ", err);
                                }
                            }
                        }}
                    >
                        Apply WCA Alg
                    </button>
                </div>
                <br></br>
                <p className="text-red-400">{rubikskewbAlgErrorMessage}</p>
                <div>
                    <input
                        type="text"
                        placeholder="Rubikskewb Alg, e.g. r' R r R' z b B' b' B"
                        className="w-full mr-3 mb-4 p-3 border rounded-md"
                        value={rubikskewbAlgText}
                        onChange={(e) => setRubikskewbAlgText(e.target.value)}
                    ></input>
                    <button
                        type="button"
                        className="mb-4 rounded-full border border-[rgba(23,58,64,0.2)] bg-white/50 px-5 py-2.5 text-sm font-semibold text-[var(--sea-ink)] no-underline transition hover:-translate-y-0.5 hover:border-[rgba(23,58,64,0.35)]"
                        onClick={() => {
                            const newState = new SkewbState();
                            try {
                                newState.applyRubikskewbAlg(
                                    new RubikskewbAlg(rubikskewbAlgText),
                                );
                                setRubikskewbAlgErrorMessage("");
                                setState(newState);
                            } catch (err) {
                                if (err instanceof Error) {
                                    setRubikskewbAlgErrorMessage(err.message);
                                } else {
                                    console.error("Unexpected error: ", err);
                                }
                            }
                        }}
                    >
                        Apply Rubikskewb Alg
                    </button>
                </div>
            </div>
            <div className="w-120">
                <h2 className="mb-2 text-lg font-semibold text-[var(--sea-ink)]">
                    Or, set state using Skewb Painter
                </h2>
                <button
                    type="button"
                    className="rounded-full border border-[rgba(23,58,64,0.2)] bg-white/50 px-5 py-2.5 text-sm font-semibold text-[var(--sea-ink)] no-underline transition hover:-translate-y-0.5 hover:border-[rgba(23,58,64,0.35)]"
                    onClick={() => {
                        const newState = new SkewbState();
                        const msg = newState.fromSkewbRendererState(
                            skewbRendererState,
                            true,
                        );
                        if (msg !== undefined) {
                            setPainterErrorMessage(msg);
                            return;
                        }
                        setState(newState);
                        setPainterErrorMessage("");
                    }}
                >
                    Apply Painted Skewb
                </button>
                <button
                    type="button"
                    className="rounded-full border border-[rgba(23,58,64,0.2)] bg-white/50 px-5 py-2.5 text-sm font-semibold text-[var(--sea-ink)] no-underline transition hover:-translate-y-0.5 hover:border-[rgba(23,58,64,0.35)]"
                    onClick={() => {
                        const newState = new SkewbState();
                        newState.fromSkewbRendererState(
                            skewbRendererState,
                            false,
                        );
                        setState(newState);
                        setPainterErrorMessage("");
                    }}
                >
                    Apply Painted Skewb (Unrestricted Coloring)
                </button>
                <p className="text-red-400">{painterErrorMessage}</p>
                <SkewbPainter
                    skewbRendererState={skewbRendererState}
                    setSkewbRendererState={setSkewbRendererState}
                ></SkewbPainter>
            </div>
        </div>
    );
}
