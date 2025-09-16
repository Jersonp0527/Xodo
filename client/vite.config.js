// client/vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    headers: {
      // CSP en encabezado (aquí sí vale frame-ancestors)
      'Content-Security-Policy':
        "default-src 'self'; " +
        "frame-ancestors 'self'; " +
        "connect-src 'self' ws://localhost:*; " +
        "script-src 'self' https://cdn.jsdelivr.net 'unsafe-inline' 'unsafe-eval'; " +
        "style-src 'self' https://cdn.jsdelivr.net 'unsafe-inline'; " +
        "img-src 'self' data: https:; " +
        "font-src 'self' https: data:;"
    },
    proxy: {
      '/api': { target: 'http://localhost:3000', changeOrigin: true }
    }
  }
})
