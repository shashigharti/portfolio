import { defineConfig } from 'vite';
import path from 'path';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  root: './src',
  server: {
    port: 3000,
    open: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
      '@bootstrap-icons': path.resolve(__dirname, 'node_modules/bootstrap-icons')
    }
  },
  build: {
    outDir: './dist',
    sourcemap: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/index.html'),
        ml: path.resolve(__dirname, 'src/ml.html'),
        software: path.resolve(__dirname, 'src/software.html'),
        blogs: path.resolve(__dirname, 'src/blogs.html'),
      },
      external: ['@bootstrap-icons/font/fonts/*'],
    },
  },
  assetsInclude: ['**/*.woff', '**/*.woff2', '**/*.eot', '**/*.ttf'],
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: path.resolve(__dirname, 'node_modules/bootstrap-icons/font/fonts'),
          dest: 'assets',
        },
      ],
    }),
  ],
});
