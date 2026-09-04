import { type Dispatch, type SetStateAction, useState } from "react";
import type { CustomPreset } from "#/utils/one-look-trainer";

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
    return (
        <div>
            <h2 className="mb-3 text-2xl font-semibold text-(--sea-ink)">
                Custom Presets
            </h2>
            <div className="flex flex-col gap-10">
                <div className="flex flex-wrap gap-10">
                    {customPresets?.map((preset) => (
                        <div
                            key={preset.key}
                            className="relative w-60 h-40 border border-(--line) rounded-2xl shadow-xl "
                        >
                            <div className="absolute right-2 top-3 flex flex-col gap-1 items-end">
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
                                    <button
                                        type="button"
                                        className="rounded-full border border-(--line) hover:border-(--line-heavy) bg-(--surface) px-4 py-2 text-sm font-semibold text-(--sea-ink) no-underline transition hover:-translate-y-0.5 disabled:opacity-50 shadow-md"
                                        onClick={() => {
                                            setCustomPresets((cps) =>
                                                cps.filter(
                                                    (cp) =>
                                                        cp.key !== preset.key,
                                                ),
                                            );
                                        }}
                                    >
                                        Delete
                                    </button>
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
                                ></textarea>
                            </div>
                        </div>
                    ))}
                    <button
                        type="button"
                        className="border border-(--line) hover:border-(--line-heavy) rounded-2xl shadow-xl "
                        onClick={() => {
                            const uuid = crypto.randomUUID();
                            setCustomPresets((cp) =>
                                cp.concat([{ key: uuid, text: "" }]),
                            );
                            setFocusPreset(uuid);
                        }}
                    >
                        <div className="relative w-60 h-40 ">
                            <div className="p-3 h-full">
                                <div className="h-full border-(--line) border-dashed border-5 rounded-2xl text-(--line) flex flex-col items-center justify-center">
                                    <div className="text-5xl">+</div>
                                    <div className="text-xl">Add</div>
                                </div>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}
