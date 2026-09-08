import { Dexie, type EntityTable } from "dexie";

const { indexedDB, IDBKeyRange } =
    typeof globalThis.indexedDB !== "undefined"
        ? globalThis
        : await import("fake-indexeddb");

interface StringValue {
    name: string;
    value: string;
}

const db = new Dexie("StringCacheDB", {
    indexedDB,
    IDBKeyRange,
}) as Dexie & {
    stringValues: EntityTable<StringValue, "name">;
};

db.version(1).stores({
    stringValues: "name, value",
});

export async function cacheFunc(name: string, func: () => Promise<string>) {
    try {
        const row = await db.stringValues.get(name);
        console.log("row exists?", row ? "yes" : "no");
        if (row) {
            return row.value;
        }
    } catch (error) {
        if (error instanceof Error) {
            console.error(error.name, error.message);
        }
    }
    const newValue = await func();

    try {
        await db.stringValues.add({
            name,
            value: newValue,
        });
    } catch (error) {
        if (error instanceof Error) {
            console.error(error.name, error.message);
        }
    }
    return newValue;
}

/**
 * Caches return value of func to indexeddb
 * Assumes func returns a serializable value (i.e. a value where v is the same as JSON.parse(JSON.stringify(v))))
 * @param name
 * @param func
 */
export async function cacheSerializableReturnValFunc<T>(
    name: string,
    func: () => Promise<T>,
) {
    const cachedString = await cacheFunc(name, async () => {
        const computed = await func();
        return JSON.stringify(computed);
    });
    return JSON.parse(cachedString) as T;
}
