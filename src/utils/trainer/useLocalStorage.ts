import { type Dispatch, type SetStateAction, useEffect, useState } from "react";

function overwriteLocalStorage<V extends object>(
    key: string,
    newValue: V,
    enabled: boolean,
) {
    if (enabled) {
        localStorage.setItem(key, JSON.stringify(newValue));
    }
}

/**
 * Local storage hook. Works like useState but retrieves from local
 * storage after first render, and saves any state changes to local storage.
 * Will be undefined at first render, in order to avoid hydration errors,
 * which means setValue will not work before first render. Only use setValue after
 * the first render has already been done.
 * Assumes key will never change during lifecycle of the hook.
 * @param key Key that will be used to lookup local storage
 * @param defaultValue Default value of state
 * @param enabled Will work exactly like a useState hook if false.
 * @returns [state, setState]. Pretty self-explanatory.
 */
function useLocalStorage<V extends object>(
    key: string,
    defaultValue: V,
    enabled: boolean,
): [V | undefined, Dispatch<SetStateAction<V>>] {
    const [state, setState] = useState<V>();
    // biome-ignore lint/correctness/useExhaustiveDependencies: Assumes key and defaultValue will never change during lifecycle of the hook.
    useEffect(() => {
        if (!enabled) {
            setState(defaultValue);
            return;
        }

        let value = defaultValue;

        const localStorageValue = localStorage.getItem(key);
        if (localStorageValue !== null) {
            try {
                // if any fields are missing in local storage, fill them with fields from defaultValue
                // TODO: needs better way of migrating new changes
                value = {
                    ...defaultValue,
                    ...JSON.parse(localStorageValue),
                };
            } catch (e) {
                console.warn(
                    `Unparseable value in local storage with key: ${
                        key
                    }. Overriding local storage value with default value.`,
                );
                console.warn(e);
            }
        }
        overwriteLocalStorage(key, value, enabled);
        setState(value);
    }, [enabled]);

    /**
     * Sets value as well as updates local storage at the same time.
     * Do not run setValue during first render, since the localstorage value has
     * not yet been retrieved, and thus value is still undefined.
     * @param newValue
     */
    function setValue(newValue: SetStateAction<V>) {
        setState((prevValue) => {
            if (prevValue === undefined) return;
            const computed =
                typeof newValue === "function" ? newValue(prevValue) : newValue;
            overwriteLocalStorage(key, computed, enabled);
            return computed;
        });
    }
    return [state, setValue];
}

export { useLocalStorage };
