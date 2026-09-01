import type { LayerCase } from "#/utils/layers-catalog/layerCases.gen";
import { layerCaseTags } from "#/utils/layers-catalog/layerCaseTags.gen";

export default function LayerCasesStats({
    layerCasesToShow,
}: {
    layerCasesToShow: LayerCase[];
}) {
    const moves = layerCasesToShow.map((lc) =>
        Number(
            layerCaseTags[lc]
                .find((t) => t.endsWith("-mover"))
                ?.replace("-mover", ""),
        ),
    );
    return (
        <div>
            <div>Search results: {layerCasesToShow.length}</div>
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
