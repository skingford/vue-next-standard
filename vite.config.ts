/*
 * @Author: kingford
 * @Date: 2021-06-13 01:43:14
 * @LastEditTime: 2021-07-16 09:37:04
 */
import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import ViteComponents, { AntDesignVueResolver } from 'vite-plugin-components';

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
    // 配置vue-jsx插件
    vueJsx({}),
    // 动态引入ant design组件库
    ViteComponents({
      customComponentResolvers: [AntDesignVueResolver({ importStyle: true })],
    }),
  ],
  server: {
    port: 4001,
    proxy: {},
  },
});
