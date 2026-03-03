import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { miaodaDevPlugin } from "miaoda-sc-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  // REPLACE THIS with your repository name!
  base: 'aurafarm', 
  
  plugins: [
    react(), 
    svgr({
      svgrOptions: {
        icon: true, 
        exportType: 'named', 
        namedExport: 'ReactComponent', 
      }, 
    }), 
    miaodaDevPlugin()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
  }
});
