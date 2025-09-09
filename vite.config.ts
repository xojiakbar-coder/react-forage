import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vite.dev/config/
export default defineConfig({
  server: { port: 4004 },
  plugins: [react(), visualizer()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});
