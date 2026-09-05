import { useEffect, useState } from "react";

const _loadedObjects = new Map<string, Promise<object>>();

export function useHeavyObjectsLoader<T extends object>(
    key: string,
    loadFunc: () => Promise<T>,
) {
    const [heavyObject, setHeavyObject] = useState<T>();
    // biome-ignore lint/correctness/useExhaustiveDependencies: assume key is hardcoded & unchanging, and loadFunc function changing doesn't matter
    useEffect(() => {
        async function load() {
            let heavyObjectPromise: Promise<T>;
            if (_loadedObjects.has(key)) {
                heavyObjectPromise = _loadedObjects.get(key) as Promise<T>;
            } else {
                heavyObjectPromise = loadFunc();
                _loadedObjects.set(key, heavyObjectPromise);
            }
            setHeavyObject(await heavyObjectPromise);
        }
        load();
    }, []);
    return heavyObject;
}
