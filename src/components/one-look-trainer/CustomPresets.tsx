import { Link } from "@tanstack/react-router";
import { type Dispatch, type SetStateAction, useRef, useState } from "react";
import type { CustomPreset } from "#/utils/one-look-trainer";
import DropdownButton from "../DropdownButton";

export default function CustomPresets({
    setLayerSolutionsAlgText,
    customPresets,
    setCustomPresets,
}: {
    setLayerSolutionsAlgText: Dispatch<SetStateAction<string>>;
    customPresets: CustomPreset[];
    setCustomPresets: Dispatch<SetStateAction<CustomPreset[]>>;
}) {
    const [focusPreset, setFocusPreset] = useState<string>();
    const parentDivRef = useRef<HTMLDivElement>(null);
    return (
        <div className="flex flex-col gap-2" ref={parentDivRef}>
            <h2 className="mb-1 text-2xl font-semibold text-(--sea-ink)">
                My Lists
            </h2>
            <div>
                Create your own lists here or in{" "}
                <Link to="/layers-catalog" className="underline">
                    Layers Catalog
                </Link>
                .
            </div>
            <div className="flex flex-col gap-10 mb-3">
                <div className="flex flex-wrap gap-10">
                    {customPresets?.map((preset, presetOrder) => (
                        <div
                            key={preset.key}
                            className="relative w-60 h-40 border border-(--line) rounded-2xl shadow-xl "
                        >
                            <div className="absolute right-2 bottom-3 flex flex-col gap-1 items-end w-auto">
                                <div>
                                    <button
                                        type="button"
                                        className="rounded-full border border-(--line) hover:border-(--line-heavy) bg-(--surface) px-4 py-2 text-sm font-semibold text-(--sea-ink) no-underline transition hover:-translate-y-0.5 disabled:opacity-50 shadow-md"
                                        onClick={() => {
                                            setLayerSolutionsAlgText(
                                                preset.text,
                                            );
                                            const headers =
                                                document.getElementsByTagName(
                                                    "h1",
                                                );
                                            const header = headers[0];
                                            if (header?.scrollIntoView) {
                                                header.scrollIntoView();
                                            }
                                        }}
                                    >
                                        Use
                                    </button>
                                </div>
                                <div>
                                    <DropdownButton
                                        className="rounded-full border border-(--line) hover:border-(--line-heavy) bg-(--surface) px-4 py-2 text-sm font-semibold text-(--sea-ink) no-underline transition hover:-translate-y-0.5 disabled:opacity-50 shadow-md"
                                        buttonContent="Options..."
                                    >
                                        <div>
                                            Change position:{" "}
                                            <DropdownButton
                                                className="rounded-full border border-(--line) hover:border-(--line-heavy) bg-(--surface) px-4 py-2 text-sm font-semibold text-(--sea-ink) no-underline transition hover:-translate-y-0.5 disabled:opacity-50 shadow-md"
                                                buttonContent={presetOrder + 1}
                                            >
                                                <div className="max-h-40 overflow-scroll p-2">
                                                    {Array.from(
                                                        {
                                                            length: customPresets.length,
                                                        },
                                                        (_, i) => i,
                                                    ).map((i) => (
                                                        <button
                                                            key={i}
                                                            type="button"
                                                            className={`block w-full border border-transparent ${i === presetOrder && "bg-(--foam)"} hover:bg-(--sand) p-2`}
                                                            onClick={() => {
                                                                setCustomPresets(
                                                                    (cps) => {
                                                                        const newCps =
                                                                            [
                                                                                ...cps.slice(
                                                                                    0,
                                                                                    presetOrder,
                                                                                ),
                                                                                ...cps.slice(
                                                                                    presetOrder +
                                                                                        1,
                                                                                ),
                                                                            ];
                                                                        newCps.splice(
                                                                            i,
                                                                            0,
                                                                            cps[
                                                                                presetOrder
                                                                            ],
                                                                        );
                                                                        return newCps;
                                                                    },
                                                                );
                                                                // close all dropdowns by firing click event
                                                                parentDivRef.current?.click();
                                                            }}
                                                        >
                                                            {i + 1}
                                                        </button>
                                                    ))}
                                                </div>
                                            </DropdownButton>
                                        </div>
                                        <button
                                            type="button"
                                            className="rounded-full border border-(--line) hover:border-(--line-heavy) bg-(--surface) px-4 py-2 text-sm font-semibold text-(--sea-ink) no-underline transition hover:-translate-y-0.5 disabled:opacity-50 shadow-md"
                                            onClick={() => {
                                                const preview = preset.text
                                                    .slice(0, 50)
                                                    .split("\n")
                                                    .slice(0, 3)
                                                    .join("\n");
                                                if (
                                                    confirm(
                                                        `Delete this custom preset?${preview ? `\n\n${preview}` : ""}${preview !== preset.text ? " ..." : ""}`,
                                                    ) === true
                                                ) {
                                                    setCustomPresets((cps) =>
                                                        cps.filter(
                                                            (cp) =>
                                                                cp.key !==
                                                                preset.key,
                                                        ),
                                                    );
                                                }
                                            }}
                                        >
                                            Delete
                                        </button>
                                    </DropdownButton>
                                </div>
                            </div>
                            <div className="h-full">
                                <textarea
                                    ref={(el) => {
                                        if (focusPreset === preset.key) {
                                            el?.focus();
                                            setFocusPreset(undefined);
                                        }
                                    }}
                                    className="h-full w-full resize-none p-3 rounded-2xl"
                                    value={preset.text}
                                    onChange={(e) =>
                                        setCustomPresets((cps) =>
                                            cps.map((cp) =>
                                                cp.key === preset.key
                                                    ? {
                                                          ...preset,
                                                          text: e.target.value,
                                                      }
                                                    : cp,
                                            ),
                                        )
                                    }
                                    spellCheck={false}
                                ></textarea>
                            </div>
                        </div>
                    ))}
                    <button
                        type="button"
                        className="relative w-60 h-40 border border-(--line) hover:border-(--line-heavy) rounded-2xl shadow-xl "
                        onClick={() => {
                            const uuid = crypto.randomUUID();
                            setCustomPresets((cp) =>
                                cp.concat([{ key: uuid, text: "" }]),
                            );
                            setFocusPreset(uuid);
                        }}
                    >
                        <div className="p-3 h-full">
                            <div className="h-full border-(--line) border-dashed border-5 rounded-2xl text-(--line) flex flex-col items-center justify-center">
                                <div className="text-5xl">+</div>
                                <div className="text-xl">Add</div>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}
