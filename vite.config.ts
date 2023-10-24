import { defineConfig, loadEnv, splitVendorChunkPlugin } from "vite"
import react from "@vitejs/plugin-react"
import { resolve } from "path"
import viteCompression from 'vite-plugin-compression';

const getAliases = () => {
  return {
    "@assets": resolve("src/assets"),
    "@components": resolve("src/components"),
    "@domain": resolve("src/domain"),
    "@infrastructure": resolve("src/infrastructure"),
    "@pages": resolve("src/pages"),
  }
}

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd())

  if (command === "serve" && mode === "development") {
    return {
      plugins: [react(), viteCompression()],
      resolve: {
        alias: getAliases(),
      },
      server: {
        port: parseInt(env.VITE_PORT),
      },
      build: {
        outDir: "build",
        chunkSizeWarningLimit: 2000,
        minify: "esbuild",
        rollupOptions: {
          output: {
            entryFileNames: `assets/[name].js`,
            chunkFileNames: `assets/[name].js`,
            assetFileNames: `assets/[name].[ext]`
          }
        }
      }
    }
  } else {
    return {
      plugins: [react(), splitVendorChunkPlugin(), viteCompression()],
      build: {
        outDir: "build",
        chunkSizeWarningLimit: 2000,
        minify: "esbuild",
        rollupOptions: {
          output: {
            entryFileNames: `assets/[name].js`,
            chunkFileNames: `assets/[name].js`,
            assetFileNames: `assets/[name].[ext]`
          }
        }
      },
      resolve: {
        alias: getAliases(),
      },
    }
  }
})