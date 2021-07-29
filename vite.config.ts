/*
 * @Author: kingford
 * @Date: 2021-06-13 01:43:14
 * @LastEditTime: 2021-07-29 11:12:37
 */
import path from 'path';
import type { UserConfig, ConfigEnv } from 'vite';
import { loadEnv } from 'vite';
import dayjs from 'dayjs';

import { wrapperEnv } from './build/utils';
import { createVitePlugins } from './build/vite/plugin';
import pkg from './package.json';

const { dependencies, devDependencies, name, version } = pkg;
const __APP_INFO__ = {
  pkg: { dependencies, devDependencies, name, version },
  lastBuildTime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
};

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd();
  const env = loadEnv(mode, root);
  const viteEnv = wrapperEnv(env);
  const isBuild = command === 'build';

  return {
    base: mode === 'development' ? '/' : './',
    resolve: {
      alias: {
        vue: 'vue/dist/vue.esm-bundler.js',
        '@': path.resolve(__dirname, 'src'),
        '@types': path.resolve(__dirname, 'types'),
        '@utils': path.resolve(__dirname, 'src/utils'),
      },
    },

    // 定义全局常量
    define: {
      __INTLIFY_PROD_DEVTOOLS__: false,
      __APP_INFO__: JSON.stringify(__APP_INFO__),
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

    plugins: createVitePlugins(viteEnv, isBuild),
    // plugins: [
    //   vue(),
    //   // 配置vue-jsx插件
    //   vueJsx({}),
    //   // 动态引入组件库
    //   styleImport({
    //     libs: [
    //       {
    //         libraryName: 'element-plus',
    //         esModule: true,
    //         ensureStyleFile: true,
    //         resolveStyle: (name) => {
    //           name = name.slice(3);
    //           return `element-plus/packages/theme-chalk/src/${name}.scss`;
    //         },
    //         resolveComponent: (name) => {
    //           return `element-plus/lib/${name}`;
    //         },
    //       },
    //     ],
    //   }),
    // ],

    server: {
      host: '0.0.0.0', //'192.168.10.209'
      port: 4001,
      open: true,
      proxy: {},
    },
  };
};
