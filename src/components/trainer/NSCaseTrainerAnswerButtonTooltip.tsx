import { type NSCase, nsCasesInfo } from "#/utils/trainer/nsCase";
import NSCaseTrainerRenderedCase from "./NSCaseTrainerRenderedCase";

function NSCaseTrainerAnswerButtonTooltip({
    name,
    closeTooltip,
}: {
    name: NSCase;
    closeTooltip: () => void;
}) {
    return (
        <button type="button" className="w-full" onClick={closeTooltip}>
            <div>{name}</div>
            <div> {nsCasesInfo.get(name)?.altName}</div>
            <NSCaseTrainerRenderedCase name={name} />
        </button>
    );
}

export default NSCaseTrainerAnswerButtonTooltip;
