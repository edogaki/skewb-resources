export async function preloadLayerSolutionsComplete() {
    const { layerSolutionsComplete } = await import(
        "#/utils/layers-catalog/layerSolutionsComplete.gen"
    );
    return layerSolutionsComplete;
}
