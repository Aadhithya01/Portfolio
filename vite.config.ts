import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Portfolio/', // 👈 ADD THIS LINE
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
  assetsInclude: ['**/*.JPG'],
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
