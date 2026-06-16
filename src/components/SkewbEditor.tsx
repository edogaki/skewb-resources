import { type Dispatch, type SetStateAction, useState } from "react";
import { WCAAlg } from "#/utils/alg";
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
    const [painterErrorMessage, setPainterErrorMessage] = useState("");
    return (
        <div className="flex flex-wrap gap-10">
            <div className="w-100">
                <h2 className="mb-2 text-lg font-semibold text-[var(--sea-ink)]">
                    Set state using WCA alg
                </h2>
                <p>Separate moves by spaces</p>
                <p className="text-red-400">{algErrorMessage}</p>
                <div>
                    <input
                        type="text"
                        placeholder="Alg"
                        className="w-full mr-3 mb-4 p-3 border rounded-md"
                        value={algText}
                        onChange={(e) => setAlgText(e.target.value)}
                    ></input>
                    <button
                        type="button"
                        className="mb-4 rounded-full border border-[rgba(23,58,64,0.2)] bg-white/50 px-5 py-2.5 text-sm font-semibold text-[var(--sea-ink)] no-underline transition hover:-translate-y-0.5 hover:border-[rgba(23,58,64,0.35)]"
                        onClick={() => {
                            setState(() => {
                                const newState = new SkewbState();
                                try {
                                    newState.applyAlg(new WCAAlg(algText));
                                    setAlgErrorMessage("");
                                    return newState;
                                } catch (err) {
                                    if (err instanceof Error) {
                                        setAlgErrorMessage(err.message);
                                    } else {
                                        console.error(
                                            "Unexpected error: ",
                                            err,
                                        );
                                    }
                                    return state;
                                }
                            });
                        }}
                    >
                        Apply Alg
                    </button>
                </div>
            </div>
            <div className="w-120">
                <h2 className="mb-2 text-lg font-semibold text-[var(--sea-ink)]">
                    Set state using Skewb Painter
                </h2>
                <button
                    type="button"
                    className="rounded-full border border-[rgba(23,58,64,0.2)] bg-white/50 px-5 py-2.5 text-sm font-semibold text-[var(--sea-ink)] no-underline transition hover:-translate-y-0.5 hover:border-[rgba(23,58,64,0.35)]"
                    onClick={() => {
                        setState(() => {
                            const newState = new SkewbState();
                            const msg =
                                newState.fromSkewbRendererState(
                                    skewbRendererState,
                                );
                            if (msg !== undefined) {
                                setPainterErrorMessage(msg);
                            } else {
                                setPainterErrorMessage("");
                            }
                            return newState;
                        });
                    }}
                >
                    Apply Painted Skewb
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
