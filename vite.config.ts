import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: [
        '.', 
        '/home/jbot/Public'  // <-- allow access to outside folder
      ]
    }
  },
  resolve: {
    alias: {
      '@public': '/home/jbot/Public'
    }
  }
});
