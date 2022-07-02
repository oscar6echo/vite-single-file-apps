import { join } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { viteSingleFile } from 'vite-plugin-singlefile';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': join(__dirname, 'src'),
    },
  },

  plugins: [
    vue(),
    // https://github.com/richardtallent/vite-plugin-singlefile
    viteSingleFile(),
  ],

  server: {
    fs: {
      strict: true,
    },
  },
});
