// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
import { qrcode } from 'vite-plugin-qrcode'

export default defineConfig({
  plugins: [
		qrcode() // only applies in dev mode
	],

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        docs: resolve(__dirname, 'docs/index.html'),
      },
    },
  },
})