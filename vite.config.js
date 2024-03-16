import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import reactRefresh from '@vitejs/plugin-react-refresh';
import { copy } from 'vite-plugin-copy';

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    reactRefresh(),
    copy({
      targets: [{ src: './sw.js', dest: './dist' }],
      hook: 'writeBundle',
    }),
  ],
});
