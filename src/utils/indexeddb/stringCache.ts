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
