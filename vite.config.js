import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, // Establece el límite en KB (aquí 1 MB)
},
server: {
  host: '0.0.0.0',
  port: parseInt(process.env.PORT) || 5173
},
})
