/*
 * @Author: kingford
 * @Date: 2021-07-26 09:02:46
 * @LastEditTime: 2021-07-29 10:50:13
 */
import type { Plugin } from 'vite';

export function configHmrPlugin(): Plugin {
  return {
    name: 'singleHMR',
    handleHotUpdate({ modules, file }) {
      if (file.match(/xml$/)) return [];

      modules.forEach((m) => {
        if (!m.url.match(/\.(css|scss)/)) {
          m.importedModules = new Set();
          m.importers = new Set();
        }
      });

      return modules;
    },
  };
}
