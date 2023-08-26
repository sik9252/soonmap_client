import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import reactRefresh from '@vitejs/plugin-react-refresh';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    reactRefresh(),
    VitePWA({
      manifest: {
        short_name: '순맵',
        name: '순맵',
        icons: [
          {
            src: '/soonmap.png',
            sizes: '64x64 32x32 24x24 16x16',
            type: 'image/png',
          },
        ],
      },
      workbox: {
        // Workbox 옵션 (예: 캐싱 전략 등)
      },
    }),
  ],
});
