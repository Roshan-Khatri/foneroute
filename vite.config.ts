import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { aiAssistantApi } from './src/middleware/ai-assistant.js';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'ai-assistant-api',
      configureServer(server) {
        server.middlewares.use('/api/ai', aiAssistantApi);
      }
    }
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
      }
    ]
  },
  build: {
    outDir: 'dist',
  },
  base: '/',
  server: {
    host: true,
    port: Number(process.env.PORT) || 3000,
    strictPort: true,
  },
  define: {
    'process.env': process.env // ✅ FIXED
  },
});