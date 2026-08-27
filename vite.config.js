import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Emit source maps (hidden: written to disk but not referenced from the
    // bundle) so Lighthouse / debugging can attribute issues to original sources
    // without exposing them inline in production HTML.
    sourcemap: 'hidden',
    target: 'es2020',
    cssCodeSplit: true,
    reportCompressedSize: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('framer-motion')) return 'vendor-motion';
            if (id.includes('react-router') || id.includes('@remix-run')) return 'vendor-router';
            if (id.includes('react-icons') || id.includes('lucide-react')) return 'vendor-icons';
            if (
              id.includes('react') ||
              id.includes('redux') ||
              id.includes('@reduxjs')
            ) {
              return 'vendor-react';
            }
            return 'vendor';
          }
        },
      },
    },
  },
})
