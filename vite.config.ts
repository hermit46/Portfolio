import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Exposing the server url to public, for local mobile testing
  server: {
    host: true
  }
})
