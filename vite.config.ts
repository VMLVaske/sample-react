import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    target: 'es2015',
  },
  server: {
    host: true, // Allow external access
    port: 5173, //
    fs: {
      strict: false, // Allow file access
    },
  },
});
