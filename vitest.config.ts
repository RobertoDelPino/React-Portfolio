/// <reference types="vitest" />
import { defineConfig } from 'vite'
import {resolve} from "path";

// https://vitejs.dev/config/

const getAliases = () => {
    return {
        "@assets": resolve("src/assets"),
        "@components": resolve("src/infrastructure/components"),
        "@domain": resolve("src/domain"),
        "@pages": resolve("src/infrastructure/pages"),
    }
}
export default defineConfig({
    test: {
        includeSource: ['src/**/*.{ts,tsx}'],
        globals: true,
        environment: "happy-dom",
        setupFiles: ['./src/test/setup.ts'],
    },
    resolve: {
        alias: getAliases(),
    }
})