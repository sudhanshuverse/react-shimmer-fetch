import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Set correct base path for GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: '/react-shimmer-fetch/',
})
