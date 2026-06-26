import { type Dispatch, type SetStateAction, useState } from "react";
import { Color } from "#/utils/renderer/color";
import type { SkewbRendererState } from "#/utils/renderer/skewbRenderer";
import { RubikskewbAlg, WCAAlg } from "#/utils/solver/alg";
import { SkewbState } from "#/utils/solver/skewbState";
import Accordion from "../Accordion";
import SkewbPainter from "./SkewbPainter";

const noApplyButton = true;

export default function SkewbEditor({
    // skewb,
    setState,
}: {
    // state: SkewbState;
    setState: Dispatch<SetStateAction<SkewbState>>;
}) {
    const [skewbRendererState, setSkewbRendererState] =
        useState<SkewbRendererState>(
            Array.from({ length: 30 }).fill(Color.Gray) as SkewbRendererState,
        );
    const [algText, setAlgText] = useState("");
    const [algErrorMessage, setAlgErrorMessage] = useState("");
    const [rubikskewbAlgText, setRubikskewbAlgText] = useState("");
    const [rubikskewbAlgErrorMessage, setRubikskewbAlgErrorMessage] =
        useState("");
    const [painterErrorMessage, setPainterErrorMessage] = useState("");

    return (
        <div className="flex flex-wrap gap-x-10 gap-y-4">
            <div className="flex-initial basis-120">
                <Accordion title="Set state using alg" defaultIsOpen={true}>
                    <p className="text-red-400">{algErrorMessage}</p>
                    <div>
                        <div className="flex items-center mb-2">
                            <input
                                autoComplete="off"
                                type="text"
                                placeholder="WCA Alg, e.g. U R U L R' U' B' U'"
                                className="w-full mr-2 p-3 border rounded-md border-(--line)"
                                value={algText}
                                onChange={(e) => setAlgText(e.target.value)}
                            ></input>
                            <div className="shrink-0">
                                <button
                                    type="button"
                                    className=" rounded-full border border-(--line) hover:border-(--line-heavy) bg-(--surface) text-sm  px-5 py-2.5 font-semibold text-(--sea-ink) no-underline transition hover:-translate-y-0.5"
                                    onClick={() => {
                                        try {
                                            setAlgText(
                                                new WCAAlg(algText)
                                                    .invert()
                                                    .toString(),
                                            );
                                            setAlgErrorMessage("");
                                        } catch (err) {
                                            if (err instanceof Error) {
                                                setAlgErrorMessage(err.message);
                                            } else {
                                                console.error(
                                                    "Unexpected error: ",
                                                    err,
                                                );
                                            }
                                        }
                                    }}
                                >
                                    Invert
                                </button>
                            </div>
                        </div>
                        <button
                            type="button"
                            className="rounded-full border border-(--line) hover:border-(--line-heavy) bg-(--surface) px-5 py-2.5 text-sm font-semibold text-(--sea-ink) no-underline transition hover:-translate-y-0.5"
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
                                        console.error(
                                            "Unexpected error: ",
                                            err,
                                        );
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
                        <div className="flex items-center mb-2">
                            <input
                                autoComplete="off"
                                type="text"
                                placeholder="Rubikskewb Alg, e.g. r' R r R' z b B' b' B"
                                className="w-full mr-2 p-3 border rounded-md border-(--line)"
                                value={rubikskewbAlgText}
                                onChange={(e) =>
                                    setRubikskewbAlgText(e.target.value)
                                }
                            ></input>
                            <div className="shrink-0">
                                <button
                                    type="button"
                                    className=" rounded-full border border-(--line) hover:border-(--line-heavy) bg-(--surface) text-sm  px-5 py-2.5 font-semibold text-(--sea-ink) no-underline transition hover:-translate-y-0.5"
                                    onClick={() => {
                                        try {
                                            setRubikskewbAlgText(
                                                new RubikskewbAlg(
                                                    rubikskewbAlgText,
                                                )
                                                    .invert()
                                                    .toString(),
                                            );
                                            setRubikskewbAlgErrorMessage("");
                                        } catch (err) {
                                            if (err instanceof Error) {
                                                setRubikskewbAlgErrorMessage(
                                                    err.message,
                                                );
                                            } else {
                                                console.error(
                                                    "Unexpected error: ",
                                                    err,
                                                );
                                            }
                                        }
                                    }}
                                >
                                    Invert
                                </button>
                            </div>
                        </div>
                        <button
                            type="button"
                            className="mb-4 rounded-full border border-(--line) hover:border-(--line-heavy) bg-(--surface) px-5 py-2.5 text-sm font-semibold text-(--sea-ink) no-underline transition hover:-translate-y-0.5"
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
                                        setRubikskewbAlgErrorMessage(
                                            err.message,
                                        );
                                    } else {
                                        console.error(
                                            "Unexpected error: ",
                                            err,
                                        );
                                    }
                                }
                            }}
                        >
                            Apply Rubikskewb Alg
                        </button>
                    </div>
                </Accordion>
            </div>
            <div className="flex-initial basis-120">
                <Accordion
                    title="Or, set state using Skewb Painter"
                    defaultIsOpen={false}
                >
                    {!noApplyButton && (
                        <>
                            <button
                                type="button"
                                className="mb-2 rounded-full border border-(--line) hover:border-(--line-heavy) bg-(--surface) px-5 py-2.5 text-sm font-semibold text-(--sea-ink) no-underline transition hover:-translate-y-0.5"
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
                                className="mb-2 rounded-full border border-(--line) hover:border-(--line-heavy) bg-(--surface) px-5 py-2.5 text-sm font-semibold text-(--sea-ink) no-underline transition hover:-translate-y-0.5"
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
                            <p className="text-red-400">
                                {painterErrorMessage}
                            </p>
                        </>
                    )}
                    <SkewbPainter
                        skewbRendererState={skewbRendererState}
                        setSkewbRendererState={(
                            v: SetStateAction<SkewbRendererState>,
                        ) => {
                            setSkewbRendererState(v);
                            if (noApplyButton) {
                                const newSkewbRendererState =
                                    typeof v === "function"
                                        ? v(skewbRendererState)
                                        : v;
                                const newState = new SkewbState();
                                newState.fromSkewbRendererState(
                                    newSkewbRendererState,
                                    false,
                                );
                                setState(newState);
                            }
                        }}
                    ></SkewbPainter>
                </Accordion>
            </div>
        </div>
    );
}
