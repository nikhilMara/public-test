import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [
    vue(),
    ...(command === 'serve' ? [vueDevTools()] : []),
    dts({ include: ['src'], insertTypesEntry: true })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  publicDir: command === 'serve' ? undefined : false,
  build: {
    lib: {
      entry: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
      name: 'Vue3Boilerplate',
      fileName: (format) => `index.${format}.js`,
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
}))
