import type { NSCase } from "#/utils/trainer/nsCase";
import NSCaseTrainerRenderedCase from "./NSCaseTrainerRenderedCase";

function NSCaseTrainerAnswerButtonTooltip({
    name,
    closeTooltip,
    altNames,
}: {
    name: NSCase;
    closeTooltip: () => void;
    altNames: Partial<Record<NSCase, string>>;
}) {
    return (
        <button type="button" className="w-full" onClick={closeTooltip}>
            <div>{name}</div>
            {altNames[name] && <div>{altNames[name]}</div>}
            <NSCaseTrainerRenderedCase name={name} />
        </button>
    );
}

export default NSCaseTrainerAnswerButtonTooltip;
