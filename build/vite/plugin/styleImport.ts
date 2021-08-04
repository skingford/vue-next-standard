/*
 * @Author: kingford
 * @Date: 2021-07-26 09:02:47
 * @LastEditTime: 2021-08-04 15:26:33
 */
import styleImport from 'vite-plugin-style-import';

export function configStyleImportPlugin() {
  const styleImportPlugin = styleImport({
    libs: [
      {
        libraryName: 'element-plus',
        esModule: true,
        ensureStyleFile: true,
        resolveStyle: (name: string) => {
          name = name.slice(3);
          return `element-plus/packages/theme-chalk/src/${name}.css`;
        },
        resolveComponent: (name: string) => {
          return `element-plus/lib/${name}`;
        },
      },
    ],
  });
  return styleImportPlugin;
}
