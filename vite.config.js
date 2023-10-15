import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compress from 'koa-compress';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    middlewares: [compress()], // Add the compress middleware
  },
  build: {
    minify: 'terser', // Minify with Terser
  },
})
