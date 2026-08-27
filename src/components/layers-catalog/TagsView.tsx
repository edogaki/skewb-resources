import type { Tag } from "#/utils/layers-catalog/layerCaseTags.gen";

export default function TagsView({ tags }: { tags: Tag[] }) {
    return (
        <div>
            {tags.map((tag) => (
                <span
                    key={tag}
                    className="inline-block p-1 rounded-full border border-(--line) px-2 text-sm"
                >
                    {tag}
                </span>
            ))}
        </div>
    );
}
