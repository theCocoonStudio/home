import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import preload from 'vite-plugin-preload'
import { resolve } from 'path'
import { analyzer } from 'vite-bundle-analyzer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    preload(),
    /* analyzer(), */
  ],
  assetsInclude: ['**/*.glb', '**/*.hdr', '**/*.mp4', '**/*.ttf', '**/*.jpg'],
  resolve: {
    alias: {
      src: resolve('./src'),
      web: resolve('./web'),
      website: resolve('./website'),
      public: resolve('./web/public'),
      assets: resolve('./website/assets'),
    },
  },
  build: {
    sourcemap: true,
    manifest: true,
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      /* external: [
        'react, react-dom, three, three-stdlib, @react-three-/fiber, @react-three/drei',
      ], */
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React',
          /* three: 'THREE', */
        },
        manualChunks: {
          three: ['three'],
          mui: ['@mui/material'],
        },
      },
    },
  },
})
