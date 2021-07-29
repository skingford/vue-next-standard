/*
 * @Author: kingford
 * @Date: 2021-07-29 10:57:09
 * @LastEditTime: 2021-07-29 11:40:09
 */
/**
 *  Vite Plugin for fast creating SVG sprites.
 * https://github.com/anncwb/vite-plugin-svg-icons
 */

import SvgIconsPlugin from 'vite-plugin-svg-icons';
import path from 'path';

export function configSvgIconsPlugin(isBuild: boolean) {
  console.log('svg:', path.resolve(process.cwd(), 'src/assets/icons/svg'));
  const svgIconsPlugin = SvgIconsPlugin({
    iconDirs: [path.resolve(process.cwd(), 'src/assets/icons/svg')],
    svgoOptions: isBuild,
    // default
    symbolId: 'icon-[dir]-[name]',
  });
  return svgIconsPlugin;
}
