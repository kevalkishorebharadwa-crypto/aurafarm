import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { miaodaDevPlugin } from "miaoda-sc-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  // 1. ADD THIS LINE FOR GITHUB PAGES
  // Replace 'your-repository-name' with the actual name of your project on GitHub
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
  // 2. ADD THIS TO FIX BUILD ERRORS
  build: {
    outDir: 'dist',
  }
});
