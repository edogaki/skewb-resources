import { writeFileSync } from "node:fs";
import { computeHash, cornerLetters } from "#/utils/layers-catalog/baseMethods";

/*
const toRight = { a: "d", d: "c", c: "b", b: "a", e: "i", i: "m", m: "q", q: "e", f: "j", j: "n", n: "r", r: "f", h: "l", l: "p", p: "t", t: "h", g: "k", k: "o", o: "s", s: "g", x: "u", u: "v", v: "w", w: "x", } as const;
const corners = [ ["aer", "cmj", "ugl", "wot"], ["dif", "bqn", "xsh", "vkp"], ] as const;
*/

const hashes = new Set<string>();

const cornerCombinations = [];

for (let i = 0; i < cornerLetters[0].length - 1; i++) {
    for (let j = i + 1; j < cornerLetters[0].length; j++) {
        for (let k = 0; k < cornerLetters[1].length; k++) {
            for (let l = 1; l < cornerLetters[1].length; l++) {
                const cornerCombination = [
                    cornerLetters[0][i],
                    cornerLetters[1][k],
                    cornerLetters[0][j],
                    cornerLetters[1][(k + l) % cornerLetters[1].length],
                ];
                cornerCombinations.push(cornerCombination);
            }
        }
    }
}

console.log("cornerCombinations.length", cornerCombinations.length);

function saveHash(layerCase: string[]) {
    const hash = computeHash(layerCase);
    hashes.add(hash);
}

let layerCasesWithIso = 0;

for (const cc of cornerCombinations) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            for (let k = 0; k < 3; k++) {
                for (let l = 0; l < 3; l++) {
                    const layerCase = [cc[0][i], cc[1][j], cc[2][k], cc[3][l]];
                    saveHash(layerCase);
                    layerCasesWithIso++;
                }
            }
        }
    }
}

const sortedCases = Array.from(hashes).sort();

console.log({ layerCasesWithIso });
console.log({ layerCasesNoIso: hashes.size });
// console.log({ sortedCases });

const barLetters = ["a", "b", "c", "d"];

console.log({
    noBarCases: sortedCases.filter((c) =>
        barLetters.every((b) => !c.includes(b)),
    ).length,
});

const code = `export const layerCases = ${JSON.stringify(sortedCases, null, 2)} as const;
export type LayerCase = (typeof layerCases)[number];
`;

writeFileSync("./src/utils/layers-catalog/layerCases.gen.ts", code, "utf8");
