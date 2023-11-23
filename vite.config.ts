/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@@": path.resolve(__dirname, "src", "components"),
      "@test": path.resolve(__dirname, ".vitest"),
    },
  },
  plugins: [react({
    jsxImportSource: "@emotion/react",
    babel: {
      plugins: ["@emotion/babel-plugin"],
      presets: ["jotai/babel/preset"],
    },
  })],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['.vitest/setup.ts']
  },
})
