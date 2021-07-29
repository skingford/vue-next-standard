/*
 * @Author: kingford
 * @Date: 2021-07-29 10:44:50
 * @LastEditTime: 2021-07-29 11:31:51
 */
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import legacy from '@vitejs/plugin-legacy';

// 自定义插件配置
import { configHmrPlugin } from './hmr';
import { configSvgIconsPlugin } from './svgSprite';
import { configStyleImportPlugin } from './styleImport';

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  const { VITE_LEGACY } = viteEnv;
  const vitePlugins = [
    // have to
    vue(),
    // have to
    vueJsx(),
  ];

  !isBuild && vitePlugins.push(configHmrPlugin());

  // @vitejs/plugin-legacy
  VITE_LEGACY && isBuild && vitePlugins.push(legacy());

  // vite-plugin-svg-icons
  vitePlugins.push(configSvgIconsPlugin(true));

  // vite-plugin-style-import
  vitePlugins.push(configStyleImportPlugin());

  return vitePlugins;
}
