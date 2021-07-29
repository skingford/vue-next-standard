/*
 * @Author: kingford
 * @Date: 2021-06-13 01:43:14
 * @LastEditTime: 2021-07-29 09:26:56
 */
import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import styleImport from 'vite-plugin-style-import';
import { createSvg } from './src/icons';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === 'development' ? '/' : './',

  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js',
      '@': path.resolve(__dirname, 'src'),
      '@types': path.resolve(__dirname, 'types'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    },
  },
  // 全局css
  css: {
    preprocessorOptions: {
      scss: {
        // 全局的scss
        additionalData: `@use "./src/styles/global.scss" as *;`,
      },
    },
  },

  plugins: [
    vue(),
    createSvg('./src/icons/svg/'),
    // 配置vue-jsx插件
    vueJsx({}),
    // 动态引入组件库
    styleImport({
      libs: [
        {
          libraryName: 'element-plus',
          esModule: true,
          ensureStyleFile: true,
          resolveStyle: (name) => {
            name = name.slice(3);
            return `element-plus/packages/theme-chalk/src/${name}.scss`;
          },
          resolveComponent: (name) => {
            return `element-plus/lib/${name}`;
          },
        },
      ],
    }),
  ],
  server: {
    host: '0.0.0.0', //'192.168.10.209'
    port: 4001,
    proxy: {},
  },
}));
