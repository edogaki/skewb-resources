export function pluralize(string: string, number: number) {
    return `${string}${number !== 1 ? "s" : ""}`;
}
