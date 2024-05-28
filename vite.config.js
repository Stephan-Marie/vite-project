// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(vite-project, 'index.html'),
        dist: resolve(vite-project, 'dist/index.html'),
      },
    },
  },
})