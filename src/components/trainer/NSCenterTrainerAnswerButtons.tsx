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
    selectCenterPerm: (cp: CenterPerm) => void;
    isErrorButton: Record<CenterPerm, boolean>;
    answeredCorrectButton: CenterPerm | null;
}) {
    const [keyBinds, writeNewBinds, resetKeyBinds] = useKeyBinds(
        selectCenterPerm,
        !options.isKeyBindChangerOn,
    );
    const keyBindsReverse = Object.fromEntries(
        Object.entries(keyBinds).map(([k, v]) => [v, k]),
    ) as Record<CenterPerm, string>;

    const [isEditing, setIsEditing] = useState<CenterPerm | null>(null);

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
            {(Object.values(CenterPerm) as Array<CenterPerm>).map((cp) => (
                <div key={cp} className="">
                    {options.isKeyBindChangerOn ? (
                        <>
                            <span>
                                &nbsp;
                                {cp}
                                :&nbsp;
                                {toHumanReadable(keyBindsReverse[cp])}
                                &nbsp;key&nbsp;
                            </span>
                            <button
                                type="button"
                                className="rounded-full border border-(--line) bg-(--surface) text-sm  px-3 py-1 font-semibold text-(--sea-ink) no-underline transition hover:-translate-y-0.5 hover:border-(--line-heavy)"
                                onClick={(e) => {
                                    e.currentTarget.blur();
                                    setIsEditing(cp);
                                }}
                                disabled={
                                    isEditing !== null && isEditing !== cp
                                }
                            >
                                {isEditing === cp ? "Press!" : "Edit"}
                            </button>
                        </>
                    ) : (
                        <button
                            type="button"
                            className={`rounded-full border border-(--line) ${isErrorButton[cp] ? "bg-(--error-bg)" : answeredCorrectButton === cp ? "bg-(--success-bg)" : "bg-(--surface)"} text-sm  px-4 py-2 font-semibold text-(--sea-ink) no-underline transition hover:-translate-y-0.5 hover:border-(--line-heavy)`}
                            onClick={() => {
                                selectCenterPerm(cp);
                                if (cp === CenterPerm.Wat) {
                                    setWatPressCounter((n) => n + 1);
                                } else if (watPressCounter < 20) {
                                    setWatPressCounter(0);
                                }
                            }}
                        >
                            {cp !== CenterPerm.Wat || watPressCounter < 20 ? (
                                cp
                            ) : (
                                // easter egg that turns wat button into wat img after clicking it for more than 20 times consecutively
                                <img
                                    src={`${import.meta.env.BASE_URL}/wat.png`}
                                    className="w-10"
                                    alt="wat"
                                />
                            )}
                        </button>
                    )}
                </div>
            ))}
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
