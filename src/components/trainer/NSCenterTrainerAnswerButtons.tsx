import { useEffect, useState } from "react";
import {
    toHumanReadable,
    useKeyBinds,
} from "#/utils/trainer/keyboardShortcuts";
import {
    CenterPerm,
    type NSCenterTrainerOptions,
} from "#/utils/trainer/skewbUtils";

function NSCenterTrainerAnswerButtons({
    options,
    selectCenterPerm,
    isErrorButton,
    answeredCorrectButton,
}: {
    options: NSCenterTrainerOptions;
    selectCenterPerm: (k: keyof typeof CenterPerm) => void;
    isErrorButton: Record<keyof typeof CenterPerm, boolean>;
    answeredCorrectButton: keyof typeof CenterPerm | null;
}) {
    const [keyBinds, writeNewBinds, resetKeyBinds] = useKeyBinds(
        selectCenterPerm,
        !options.isKeyBindChangerOn,
    );
    const keyBindsReverse = Object.fromEntries(
        Object.entries(keyBinds).map(([k, v]) => [v, k]),
    ) as Record<keyof typeof CenterPerm, string>;

    const [isEditing, setIsEditing] = useState<keyof typeof CenterPerm | null>(
        null,
    );

    // biome-ignore lint/correctness/useExhaustiveDependencies: intentional
    useEffect(() => {
        setIsEditing(null);
    }, [options.isKeyBindChangerOn]);

    // biome-ignore lint/correctness/useExhaustiveDependencies: intentional
    useEffect(() => {
        if (!isEditing) {
            return;
        }
        function handleSetKeyBind(e: KeyboardEvent) {
            e.preventDefault();
            if (!isEditing) {
                return;
            }
            writeNewBinds({ [e.code]: isEditing });
            setIsEditing(null);
            document.removeEventListener("keypress", handleSetKeyBind);
        }
        document.addEventListener("keypress", handleSetKeyBind);
        return () => {
            document.removeEventListener("keypress", handleSetKeyBind);
        };
    }, [isEditing]);

    const [watPressCounter, setWatPressCounter] = useState(0);

    console.log({ watPressCounter });

    return (
        <div className="flex flex-col gap-1">
            {(Object.keys(CenterPerm) as Array<keyof typeof CenterPerm>).map(
                (k) => (
                    <div key={k} className="">
                        {options.isKeyBindChangerOn ? (
                            <>
                                <span>
                                    &nbsp;
                                    {CenterPerm[k]}
                                    :&nbsp;
                                    {toHumanReadable(keyBindsReverse[k])}
                                    &nbsp;key&nbsp;
                                </span>
                                <button
                                    type="button"
                                    className="rounded-full border border-(--line) bg-(--surface) text-sm  px-3 py-1 font-semibold text-(--sea-ink) no-underline transition hover:-translate-y-0.5 hover:border-(--line-heavy)"
                                    onClick={(e) => {
                                        e.currentTarget.blur();
                                        setIsEditing(k);
                                    }}
                                    disabled={
                                        isEditing !== null && isEditing !== k
                                    }
                                >
                                    {isEditing === k ? "Press!" : "Edit"}
                                </button>
                            </>
                        ) : (
                            <button
                                type="button"
                                className={`rounded-full border border-(--line) ${isErrorButton[k] ? "bg-(--error-bg)" : answeredCorrectButton === k ? "bg-(--success-bg)" : "bg-(--surface)"} text-sm  px-4 py-2 font-semibold text-(--sea-ink) no-underline transition hover:-translate-y-0.5 hover:border-(--line-heavy)`}
                                onClick={() => {
                                    selectCenterPerm(k);
                                    if (CenterPerm[k] === CenterPerm.Wat) {
                                        setWatPressCounter((n) => n + 1);
                                    } else if (watPressCounter < 20) {
                                        setWatPressCounter(0);
                                    }
                                }}
                            >
                                {CenterPerm[k] !== CenterPerm.Wat ||
                                watPressCounter < 20 ? (
                                    CenterPerm[k]
                                ) : (
                                    // easter egg that turns wat button into wat img after clicking it for more than 20 times consecutively
                                    <img
                                        src={`${import.meta.env.BASE_URL}/favicon.png`}
                                        className="wat-img"
                                        alt="wat"
                                    />
                                )}
                            </button>
                        )}
                    </div>
                ),
            )}
            {options.isKeyBindChangerOn && (
                <button
                    type="button"
                    onClick={() => resetKeyBinds()}
                    disabled={!!isEditing}
                    className="rounded-full border border-(--line)  bg-(--surface) text-sm  px-4 py-2 font-semibold text-(--sea-ink) no-underline transition hover:-translate-y-0.5 hover:border-(--line-heavy)"
                >
                    Reset Keybinds
                </button>
            )}
        </div>
    );
}

export default NSCenterTrainerAnswerButtons;
