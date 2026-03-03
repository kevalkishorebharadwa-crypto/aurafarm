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
  // ADD THIS LINE BELOW (Replace 'your-repo-name' with your actual GitHub repo name)
  base: '/your-repo-name/', 
  
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
});
