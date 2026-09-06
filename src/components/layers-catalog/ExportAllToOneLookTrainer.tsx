import { useEffect, useState } from "react";
import type { LayerCase } from "#/utils/layers-catalog/layerCases.gen";
import { layerSolutionsComplete } from "#/utils/layers-catalog/layerSolutionsComplete.gen";
import {
    defaultOneLookTrainerOptions,
    type OneLookTrainerOptions,
} from "#/utils/one-look-trainer";
import { useLocalStorage } from "#/utils/trainer/useLocalStorage";

export default function ExportAllToOneLookTrainer({
    layerCasesToShow,
}: {
    layerCasesToShow: LayerCase[];
}) {
    const [_options, setOptions] = useLocalStorage<OneLookTrainerOptions>(
        "oneLookTrainerOptions",
        defaultOneLookTrainerOptions,
        true,
    );

    const [message, setMessage] = useState("");
    useEffect(() => {
        if (message.length > 0) {
            const id = setTimeout(() => setMessage(""), 5000);
            return () => clearTimeout(id);
        }
    }, [message]);

    return (
        <div className="flex gap-2 items-center">
            <button
                type="button"
                className="rounded-full border border-(--line) hover:border-(--line-heavy) bg-(--surface) px-5 py-2.5 text-sm font-semibold text-(--sea-ink) no-underline transition hover:-translate-y-0.5 disabled:opacity-50"
                onClick={() => {
                    setMessage("");
                    setTimeout(() => {
                        const solutionAlgs = ["# From Layers Catalog"]
                            .concat(
                                layerCasesToShow.map(
                                    (lc) =>
                                        Object.values(
                                            layerSolutionsComplete[lc],
                                        )[0][0],
                                ),
                            )
                            .join("\n");
                        setOptions((o) => ({
                            ...o,
                            customPresets: o.customPresets.concat([
                                {
                                    key: crypto.randomUUID(),
                                    text: solutionAlgs,
                                },
                            ]),
                        }));
                        setMessage("Exported!");
                    }, 0);
                }}
            >
                Export All Layers ({layerCasesToShow.length}) To One Look
                Trainer
            </button>
            <div>{message}</div>
        </div>
    );
}
