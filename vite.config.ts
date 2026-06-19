import tailwindcss from "@tailwindcss/vite";
import { devtools } from "@tanstack/devtools-vite";

import { tanstackStart } from "@tanstack/react-start/plugin/vite";

import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const config = defineConfig({
    resolve: { tsconfigPaths: true },
    base: "/skewb-resources",
    plugins: [
        devtools(),
        // nitro({ rollupConfig: { external: [/^@sentry\//] } }),
        tailwindcss(),
        tanstackStart({
            prerender: {
                enabled: true,
                autoSubfolderIndex: true,
                concurrency: 14,
                crawlLinks: true,
                retryCount: 2,
                retryDelay: 1000,
                maxRedirects: 5,
                failOnError: true,
                onSuccess: ({ page }) => {
                    console.log(`Rendered ${page.path}`);
                },
            },
        }),
        viteReact(),
    ],
});

export default config;
