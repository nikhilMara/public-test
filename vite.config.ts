import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import dts from 'vite-plugin-dts'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const analyze = mode === 'analyze'

  return {
    plugins: [
      vue(),
      ...(command === 'serve' ? [vueDevTools()] : []),
      ...(analyze
        ? [
            visualizer({
              filename: 'stats/treemap.html',
              template: 'treemap',
              gzipSize: true,
              brotliSize: true,
              open: true
            })
          ]
        : [
            dts({
              include: ['src/index.ts', 'src/components/Button.vue', 'src/components/types.ts'],
              insertTypesEntry: true
            })
          ])
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    publicDir: command === 'serve' ? undefined : false,
    build: analyze
      ? {
          outDir: 'dist-analyze',
          emptyOutDir: true,
          sourcemap: true,
          rollupOptions: {
            output: {
              manualChunks: (id, { getModuleInfo }) =>
                id.includes('/node_modules/@gohighlevel/highrise/') &&
                getModuleInfo(id)?.importers.length
                  ? 'highrise'
                  : undefined
            }
          }
        }
      : {
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
  }
})
