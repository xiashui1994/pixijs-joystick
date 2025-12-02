import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  server: {
    host: true,
    open: true,
  },
  build: {
    target: 'es2015',
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      name: 'joystick',
      fileName: 'joystick',
    },
    copyPublicDir: false,
    rollupOptions: {
      external: ['pixi.js'],
      output: {
        globals: {
          'pixi.js': 'PIXI',
        },
      },
    },
  },
  plugins: [dts({ rollupTypes: true })],
})
