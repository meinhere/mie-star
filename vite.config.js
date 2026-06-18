import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig(({ command }) => ({
    plugins: [react(), command === "build" ? cloudflare() : null].filter(
        Boolean,
    ),
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
}));
