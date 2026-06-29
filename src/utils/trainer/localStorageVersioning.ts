import type { RendererOptions } from "../renderer/skewbRenderer";
import type { GlobalOptions } from "./options";
import { CenterPerm, type NSCenterTrainerType } from "./skewbUtils";

const V0CenterPerm = {
    Swirl: "Swirl Perm",
    Wat: "Wat Perm",
    X: "X Perm",
    HorizontalU: "Horizontal U Perm",
    VerticalU: "Vertical U Perm",
    O: "O Perm",
    ZConj: "Z Perm Conjugate",
    TripleSledge: "Triple Sledge",
    H: "H Perm",
    Z: "Z Perm",
    Pure: "Pure/Solved",
} as const;

type V0CenterPerm = (typeof V0CenterPerm)[keyof typeof V0CenterPerm];

const V0NSCenterTrainerType = {
    HorizontalU: "Show Horizontal U centers (LFR)",
    O: "Show O centers (FRU)",
    VerticalU: "Show Vertical U centers (FUB)",
    Random: "Show random centers subset",
} as const;
type V0NSCenterTrainerType =
    (typeof V0NSCenterTrainerType)[keyof typeof V0NSCenterTrainerType];

const V0CubeOrientation = {
    UpDown: "Up-down Orientation",
    Sideways: "Sideways Orientation 1",
    Sideways2: "Sideways Orientation 2",
} as const;
type V0CubeOrientation =
    (typeof V0CubeOrientation)[keyof typeof V0CubeOrientation];

interface V0RendererOptions {
    cubeOrientation: V0CubeOrientation;
}

interface V0Data {
    globalOptions: {
        isMuted: boolean;
    };
    "key-binds": Record<string, keyof typeof V0CenterPerm>;
    nsCenterTrainerOptions: {
        trainerType: V0NSCenterTrainerType;
        showRightCornerColors: boolean;
        showRandomUCorners: boolean;
        renderer: V0RendererOptions;
        isKeyBindChangerOn: boolean;
    };
}

interface V1Data {
    skewbTrainerOptions: {
        version: number;
        globalOptions: GlobalOptions;
        "key-binds": Record<string, CenterPerm>;
        nsCenterTrainerOptions: {
            trainerType: NSCenterTrainerType;
            showRightCornerColors: boolean;
            showRandomUCorners: boolean;
            renderer: RendererOptions;
            isKeyBindChangerOn: boolean;
        };
    };
}

function upgradeV0ToV1(v0Data: V0Data) {
    const v1Data: V1Data = {
        skewbTrainerOptions: {
            version: 1,
            globalOptions: v0Data.globalOptions,
            "key-binds": Object.fromEntries(
                Object.entries(v0Data["key-binds"]).map(([k, v]) => [
                    k,
                    CenterPerm[v],
                ]),
            ),
            nsCenterTrainerOptions: v0Data.nsCenterTrainerOptions,
        },
    };
    return v1Data;
}

function upgradeLocalStorageV0ToV1() {}

const upgradeFuncs: (() => void)[] = [upgradeLocalStorageV0ToV1];

const currentVersion = 1;

/**
 * Get version of user's local storage. If currentVersion is returned,
 * that means one of two things:
 * - there is already data of the current version,
 * - or there is no usable data at all.
 * @returns version of user's local storage
 */
function getLocalVersion() {
    const skewbTrainerOptionsString = localStorage.getItem(
        "skewbTrainerOptions",
    );

    if (!skewbTrainerOptionsString) {
        // check if there is v0 data worth saving
        if (
            localStorage.getItem("globalOptions") ||
            localStorage.getItem("key-binds") ||
            localStorage.getItem("nsCenterTrainerOptions")
        ) {
            return 0;
        } else {
            return currentVersion;
        }
    }
    try {
        const skewbTrainerOptions = JSON.parse(skewbTrainerOptionsString);
        const version = Number(skewbTrainerOptions.version);
        if (version >= 1 && version <= currentVersion) {
            return version;
        } else {
            return currentVersion;
        }
    } catch (_e) {
        console.warn(
            "Error getting local storage version. Defaulting to current version.",
        );
        return currentVersion;
    }
}

export function checkAndUpgradeLocalStorageData() {
    for (
        let localVersion = getLocalVersion();
        localVersion < currentVersion;
        localVersion++
    ) {
        upgradeFuncs[localVersion];
    }
}
