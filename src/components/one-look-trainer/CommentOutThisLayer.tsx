import { type Dispatch, type SetStateAction, useEffect, useState } from "react";
import {
    createSanitizedAlgsFromText,
    type OneLookTrainerOptions,
} from "#/utils/one-look-trainer";
import { RubikskewbAlg } from "#/utils/solver/alg";

export default function CommentOutThisLayer({
    layerAlg,
    options,
    setOptions,
    textareaElement,
}: {
    layerAlg: RubikskewbAlg | undefined;
    options: OneLookTrainerOptions;
    setOptions: Dispatch<SetStateAction<OneLookTrainerOptions>>;
    textareaElement: HTMLTextAreaElement;
}) {
    const [lineToSelect, setLineToSelect] = useState<string>();
    // biome-ignore lint/correctness/useExhaustiveDependencies: only do the selection on button click
    useEffect(() => {
        if (!lineToSelect) return;
        const startIndex = options.layerSolutionAlgsText.indexOf(
            `${lineToSelect}\n`,
        );
        if (startIndex >= 0) {
            textareaElement.focus();
            textareaElement.setSelectionRange(
                startIndex,
                startIndex + lineToSelect.length + 1,
            );
        } else if (options.layerSolutionAlgsText.endsWith(lineToSelect)) {
            textareaElement.focus();
            textareaElement.setSelectionRange(
                options.layerSolutionAlgsText.length - lineToSelect.length,
                options.layerSolutionAlgsText.length,
            );
        }
    }, [lineToSelect]);
    return (
        <button
            type="button"
            className="rounded-full border border-(--line) enabled:hover:border-(--line-heavy) bg-(--surface) px-5 py-2.5 text-sm font-semibold text-(--sea-ink) no-underline transition enabled:hover:-translate-y-0.5 disabled:opacity-50"
            disabled={!layerAlg}
            onClick={() => {
                if (!layerAlg) return;
                let lastLineChanged: string | undefined;
                const newText = options.layerSolutionAlgsText
                    .split("\n")
                    .map((line) => {
                        const alg = createSanitizedAlgsFromText(line)[0] as
                            | RubikskewbAlg
                            | undefined;
                        if (!alg) {
                            return line;
                        }
                        if (alg.isEquals(layerAlg)) {
                            lastLineChanged = `# ${line}`;
                            return lastLineChanged;
                        }
                        return line;
                    })
                    .join("\n");
                setOptions((o) => {
                    return {
                        ...o,
                        layerSolutionAlgsText: newText,
                    };
                });
                setLineToSelect(lastLineChanged);
            }}
        >
            Comment out this layer in the text box
        </button>
    );
}
