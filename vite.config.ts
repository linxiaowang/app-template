import Uni from '@uni-helper/plugin-uni'
import UniHelperComponents from '@uni-helper/vite-plugin-uni-components'
import UniHelperLayouts from '@uni-helper/vite-plugin-uni-layouts'
import UniHelperManifest from '@uni-helper/vite-plugin-uni-manifest'
import UniHelperPages from '@uni-helper/vite-plugin-uni-pages'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'
import UniPolyfill from 'vite-plugin-uni-polyfill'

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
        silenceDeprecations: ['legacy-js-api', 'import', 'global-builtin'],
      },
    },
  },
  plugins: [
    UniHelperManifest(),
    UniHelperPages({
      dts: 'src/uni-pages.d.ts',
    }),
    UniHelperLayouts(),
    UniHelperComponents({
      dts: 'src/components.d.ts',
      directoryAsNamespace: true,
    }),
    Uni(),
    UniPolyfill(),
    AutoImport({
      imports: ['vue', '@vueuse/core', 'uni-app', 'pinia'],
      dts: 'src/auto-imports.d.ts',
      dirs: ['src/composables', 'src/stores', 'src/utils'],
      vueTemplate: true,
    }),
    UnoCSS(),
  ],
})
