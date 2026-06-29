import { useEffect } from "react";
import { CenterPerm } from "./skewbUtils";
import { useLocalStorage } from "./useLocalStorage";

function toHumanReadable(eventCode: string) {
    return eventCode
        .replace(/^(Key|Digit)/, "")
        .replace(/([A-Z])/g, " $1")
        .trim();
}

const initialKeyBinds = {
    KeyS: CenterPerm.Swirl,
    KeyW: CenterPerm.Wat,
    KeyX: CenterPerm.X,
    KeyU: CenterPerm.HorizontalU,
    KeyV: CenterPerm.VerticalU,
    KeyO: CenterPerm.O,
    KeyC: CenterPerm.ZConj,
    KeyT: CenterPerm.TripleSledge,
    KeyH: CenterPerm.H,
    KeyZ: CenterPerm.Z,
    Space: CenterPerm.Pure,
} as Record<string, CenterPerm>;

function useKeyBinds(
    centerPermFunc: (cp: CenterPerm) => void,
    isEnabled: boolean,
) {
    const [keyBinds, setKeyBinds] = useLocalStorage(
        "key-binds",
        initialKeyBinds,
        true,
    );

    const writeNewBinds = (newBinds: Record<string, CenterPerm>) => {
        const bindsCopy = { ...keyBinds };
        for (const newKey in newBinds) {
            const perm = newBinds[newKey];
            const oldKey = Object.keys(bindsCopy).find(
                (k) => bindsCopy[k] === perm,
            );
            if (!oldKey) return false;
            if (bindsCopy[newKey]) {
                [bindsCopy[newKey], bindsCopy[oldKey]] = [
                    bindsCopy[oldKey],
                    bindsCopy[newKey],
                ];
            } else {
                delete bindsCopy[oldKey];
                bindsCopy[newKey] = perm;
            }
        }
        setKeyBinds(bindsCopy);
        return true;
    };

    useEffect(() => {
        if (!isEnabled) {
            return () => {};
        }

        function handleEvent(e: KeyboardEvent) {
            if (keyBinds[e.code]) {
                e.preventDefault();
                centerPermFunc(keyBinds[e.code]);
            }
        }
        document.addEventListener("keypress", handleEvent);
        return () => {
            document.removeEventListener("keypress", handleEvent);
        };
    }, [keyBinds, centerPermFunc, isEnabled]);

    function resetKeyBinds() {
        setKeyBinds(initialKeyBinds);
    }

    return [keyBinds, writeNewBinds, resetKeyBinds] as const;
}

export { useKeyBinds, toHumanReadable };
