import { rotationMatrix } from "#/utils/renderer/math";
import {
    CubeOrientation,
    type RendererOptions,
} from "#/utils/renderer/skewbRenderer";
import {
    type NSCase,
    NSCaseButtonsViewType,
    NSCaseCentersShown,
    type NSCaseCore,
    NSCaseTrainerType,
    nsCasesReverseMap,
    nsCaseTrainerQuestionToSkewbRendererState,
} from "#/utils/trainer/nsCase";
import SkewbRenderer from "../SkewbRenderer";

function NSCaseTrainerRenderedCase({ name }: { name: NSCase }) {
    const caseCore: NSCaseCore | undefined = nsCasesReverseMap.get(name);
    if (!caseCore) {
        throw new Error(`not a valid ns case! "${name}"`);
    }
    const rendererOptions: RendererOptions = {
        cubeOrientation: CubeOrientation.UpDown,
        hideDFace: true,
    };
    const skewbRendererState = nsCaseTrainerQuestionToSkewbRendererState(
        {
            caseCore,
            randomYRotationIndex: 2,
            randomRotation: rotationMatrix([0, 1, 0], 2),
            randomCentersShown: [0, 1, 2],
            randomCornersShown: [0, 1],
            answer: name,
        },
        {
            trainerType: NSCaseTrainerType.EntireCube,
            buttonsViewType: NSCaseButtonsViewType.Type1,
            renderer: rendererOptions,
            type2ShowRenderedCaseInButton: false,
            caseEnabled: {},
            isCaseEnabledMenuOn: false,
            centersShown: NSCaseCentersShown.HorizontalU,
            altNames: {},
        },
    );

    return (
        <SkewbRenderer state={skewbRendererState} options={rendererOptions} />
    );
}

export default NSCaseTrainerRenderedCase;
