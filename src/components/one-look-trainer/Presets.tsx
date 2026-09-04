import { Link } from "@tanstack/react-router";
import type { Dispatch } from "react";
import { presets } from "#/utils/one-look-trainer/presets";
import { useLocalStorage } from "#/utils/trainer/useLocalStorage";

export default function Presets({
    setLayerSolutionsAlgText,
}: {
    setLayerSolutionsAlgText: Dispatch<string>;
}) {
    return (
        <div>
            <h2 className="mb-3 text-2xl font-semibold text-(--sea-ink)">
                Presets
            </h2>
            <div className="flex flex-col gap-10">
                <div className="flex flex-wrap gap-10">
                    {presets.map((preset) => (
                        <div
                            key={preset}
                            className="relative w-60 h-40 border border-(--line) rounded-2xl shadow-xl "
                        >
                            <div className="absolute right-2 top-3">
                                <button
                                    type="button"
                                    className="rounded-full border border-(--line) hover:border-(--line-heavy) bg-(--surface) px-4 py-2 text-sm font-semibold text-(--sea-ink) no-underline transition hover:-translate-y-0.5 disabled:opacity-50 shadow-md"
                                    onClick={() => {
                                        setLayerSolutionsAlgText(preset);
                                        const headers =
                                            document.getElementsByTagName("h1");
                                        const header = headers[0];
                                        if (header?.scrollIntoView) {
                                            header.scrollIntoView();
                                        }
                                    }}
                                >
                                    Use
                                </button>
                            </div>
                            <div className="p-3 h-full overflow-scroll">
                                {preset.split("\n").map((line) => (
                                    <p key={line}>{line}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <p>
                    Create your own presets in{" "}
                    <Link to="/layers-catalog" className="underline">
                        Layers Catalog
                    </Link>
                </p>
            </div>
        </div>
    );
}
