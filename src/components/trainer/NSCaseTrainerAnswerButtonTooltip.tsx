import { rotationMatrix } from "#/utils/renderer/math";
import {
    CubeOrientation,
    type RendererOptions,
} from "#/utils/renderer/skewbRenderer";
import {
    type NSCase,
    NSCaseButtonsViewType,
    type NSCaseCore,
    NSCaseTrainerType,
    nsCasesInfo,
    nsCasesReverseMap,
    nsCaseTrainerQuestionToSkewbRendererState,
} from "#/utils/trainer/nsCase";
import SkewbRenderer from "../SkewbRenderer";

function NSCaseTrainerAnswerButtonTooltip({
    name,
    closeTooltip,
}: {
    name: NSCase;
    closeTooltip: () => void;
}) {
    const caseCore: NSCaseCore | undefined = nsCasesReverseMap.get(name);
    if (caseCore === undefined) return;
    const rendererOptions: RendererOptions = {
        cubeOrientation: CubeOrientation.UpDown,
        hideDFace: true,
    };
    const skewbRendererState = nsCaseTrainerQuestionToSkewbRendererState(
        {
            caseCore,
            randomYRotationIndex: 2,
            randomRotation: rotationMatrix([0, 1, 0], 2),
            answer: name,
        },
        {
            trainerType: NSCaseTrainerType.EntireCube,
            buttonsViewType: NSCaseButtonsViewType.Type1,
            renderer: rendererOptions,
        },
    );

    return (
        <button type="button" className="w-full" onClick={closeTooltip}>
            <div>{name}</div>
            <div> {nsCasesInfo.get(name)?.altName}</div>
            <SkewbRenderer
                state={skewbRendererState}
                options={rendererOptions}
            />
        </button>
    );
}

export default NSCaseTrainerAnswerButtonTooltip;
