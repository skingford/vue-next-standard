/*
 * @Author: kingford
 * @Date: 2021-06-13 01:43:14
 * @LastEditTime: 2021-07-16 11:17:11
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
      // ant-design-vue 默认使用less
      less: {
        javascriptEnabled: true,
      },
    },
  },
  plugins: [
    vue(),
    // 配置vue-jsx插件
    vueJsx({}),
    // 动态引入组件库
    styleImport({
      libs: [
        {
          libraryName: 'ant-design-vue',
          esModule: true,
          resolveStyle: (name) => {
            return `ant-design-vue/es/${name}/style/index`;
          },
        },
      ],
    }),
  ],
  server: {
    port: 4001,
    proxy: {},
  },
});
