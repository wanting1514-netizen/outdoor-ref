import path from 'path';
  import { defineConfig, loadEnv } from 'vite';
  import react from '@vitejs/plugin-react';
  import tailwindcss from '@tailwindcss/vite';

  export default defineConfig(({ mode }) => {
      const env = loadEnv(mode, '.', '');
      return {
        base: '/outdoor-ref/',  // 这一行很重要！
        server: {
          port: 3000,
          host: '0.0.0.0',
        },
        plugins: [react(), tailwindcss()],
        // ... 其他配置
      };
  });
