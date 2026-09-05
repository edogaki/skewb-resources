import { useHeavyObjectsLoader } from "#/utils/heavyObjectsLoader";
import type { LayerCase } from "#/utils/layers-catalog/layerCases.gen";

export default function LayerCasesStats({
    layerCasesToShow,
}: {
    layerCasesToShow: LayerCase[];
}) {
    const layerCaseTags = useHeavyObjectsLoader(
        "#/utils/layers-catalog/layerCaseTags.gen",
        async () =>
            (await import("#/utils/layers-catalog/layerCaseTags.gen"))
                .layerCaseTags,
    );

    const moves = layerCaseTags
        ? layerCasesToShow.map((lc) =>
              Number(
                  layerCaseTags[lc]
                      .find((t) => t.endsWith("-mover"))
                      ?.replace("-mover", ""),
              ),
          )
        : [];
    return (
        <div>
            <div>Results: {layerCasesToShow.length}</div>
            {layerCasesToShow.length > 0 && (
                <div>
                    Average number of moves:{" "}
                    {(
                        moves.reduce((a, b) => a + b, 0) /
                        layerCasesToShow.length
                    ).toFixed(2)}
                </div>
            )}
        </div>
    );
}
