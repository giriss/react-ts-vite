/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@@": path.resolve(__dirname, "src", "components"),
    },
  },
  plugins: [react({
    jsxImportSource: "@emotion/react"
  })],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['.vitest-setup.ts']
  },
})
