
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { aiAssistantApi } from './src/middleware/ai-assistant.js';

// https://vitejs.dev/config/
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
    host: '0.0.0.0',
    port: 3000,
    hmr: {
        clientPort: 443,
        protocol: 'wss',
    },
  },
  define: {
    'process.env': {}
  },
});
