import { useEffect, useState } from "react";
import { useHeavyObjectsLoader } from "#/utils/heavyObjectsLoader";
import type { LayerCase } from "#/utils/layers-catalog/layerCases.gen";

export default function CopyLayerSolutionsToClipboard({
    layerCasesToShow,
}: {
    layerCasesToShow: LayerCase[];
}) {
    const layerSolutionsComplete = useHeavyObjectsLoader(
        "#/utils/layers-catalog/layerSolutionsComplete.gen",
        async () =>
            (await import("#/utils/layers-catalog/layerSolutionsComplete.gen"))
                .layerSolutionsComplete,
    );

    const [isFinishedCopying, setIsFinishedCopying] = useState(false);
    useEffect(() => {
        if (isFinishedCopying) {
            const id = setTimeout(() => setIsFinishedCopying(false), 5000);
            return () => clearTimeout(id);
        }
    }, [isFinishedCopying]);
    return (
        <div className="flex gap-2 items-center">
            <button
                type="button"
                className="rounded-full border border-(--line) hover:border-(--line-heavy) bg-(--surface) px-5 py-2.5 text-sm font-semibold text-(--sea-ink) no-underline transition hover:-translate-y-0.5 disabled:opacity-50"
                onClick={() => {
                    if (!layerSolutionsComplete) return;
                    setIsFinishedCopying(false);
                    setTimeout(() => {
                        const solutionAlgs = layerCasesToShow
                            .map(
                                (lc) =>
                                    Object.values(
                                        layerSolutionsComplete[lc],
                                    )[0][0],
                            )
                            .join("\n");
                        navigator.clipboard.writeText(`${solutionAlgs}\n`);
                        setIsFinishedCopying(true);
                    }, 50);
                }}
                disabled={layerSolutionsComplete === undefined}
            >
                Copy Layer Solutions to Clipboard
            </button>
            <div>{isFinishedCopying && "Copied!"}</div>
        </div>
    );
}
