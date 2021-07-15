/*
 * @Author: kingford
 * @Date: 2021-06-13 01:43:14
 * @LastEditTime: 2021-07-15 23:33:59
 */
import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import styleImport from 'vite-plugin-style-import';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js',
      '@': path.resolve(__dirname, 'src'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    },
  },
  // 全局css
  css: {
    preprocessorOptions: {
      scss: {
        // 全局的scss
        additionalData: `@import "./src/styles/global.scss";`,
      },
    },
  },
  plugins: [
    vue(),
    vueJsx({}),
    // 配置样式按需引入
    // styleImport({
    //   libs: [
    //     {
    //       libraryName: 'vant',
    //       esModule: true,
    //       resolveStyle: (name) => `vant/es/${name}/style`,
    //     },
    //   ],
    // }),
  ],
  server: {
    port: 4001,
    proxy: {},
  },
});
