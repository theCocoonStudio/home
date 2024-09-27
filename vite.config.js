/* global __dirname  */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb', '**/*.hdr', '**/*.mp4', '**/*.ttf', '**/*.jpg'],
  resolve: {
    alias: {
      src: resolve('./src'),
      web: resolve('./web'),
      public: resolve('./web/public'),
    },
  },
  build: {
    lib: {
      formats: ['es'],
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.js'),
      name: 'izzy-web-lib',
      // the proper extensions will be added
      fileName: 'izzy',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [
        'react, react-dom, three, three-stdlib, @react-three-/fiber, @react-three/drei',
      ],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React',
          three: 'THREE',
        },
      },
    },
  },
})
