import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: path.resolve(__dirname, 'src'),
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'node_modules')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./bootstrap.scss";',
      },
    },
  },
  server: {
    port: 8080,
    hot: true
  },
  build: {
    outDir: path.resolve(__dirname, 'dist')
  }
});