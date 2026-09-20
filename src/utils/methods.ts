export function pluralize(string: string, number: number) {
    return `${string}${number !== 1 ? "s" : ""}`;
}

export function applyFuncNTimes<T>(func: (arg0: T) => T, val: T, n: number) {
    let newVal = val;
    for (let i = 0; i < n; i++) {
        newVal = func(newVal);
    }
    return newVal;
}
