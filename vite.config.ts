import vue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig } from 'vite';
import dynamicImport from 'vite-plugin-dynamic-import';
// import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [vue(), dynamicImport()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    minify: false,
  },
});
