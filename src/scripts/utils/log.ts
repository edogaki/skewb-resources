import { appendFileSync, writeFileSync } from "node:fs";

const filename = `log-${new Date().toJSON().replaceAll(":", "_")}.log`;
writeFileSync(`./src/scripts/logs/${filename}`, "", "utf8");

export function fileLog(...text: string[]) {
    appendFileSync(
        `./src/scripts/logs/${filename}`,
        `${text.join(" ")}\n`,
        "utf8",
    );
}
