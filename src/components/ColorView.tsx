import {
    type Color,
    colorsReverseMap,
    tailwindColors,
} from "#/utils/renderer/color";

export default function ColorView({ color }: { color: Color }) {
    const colorName = colorsReverseMap[color];
    return (
        <span>
            <span
                className={`inline-block w-6 h-6 border border-(--line) rounded-full ${tailwindColors[color]}`}
            >
                &nbsp;
            </span>
            &nbsp;
            <span className="inline-block py-1.5">{colorName}</span>
        </span>
    );
}
