/*
 * @Author: kingford
 * @Date: 2021-07-25 00:05:01
 * @LastEditTime: 2021-07-30 17:35:31
 */
import { defineStore } from 'pinia';
import { store } from '@/store';
import projectConfig, { ProjectConfig } from '@/setting/projectSetting';
import { Persistent } from '@/utils/cache/persistent';
import { PROJ_CFG_KEY } from '@/enums/cacheEnum';
import { deepMerge } from '@/utils';

interface AppState {
  projectConfig: ProjectConfig;
}

export const useAppStore = defineStore({
  id: 'app',
  state: (): AppState => ({
    projectConfig,
  }),
  getters: {
    isCollapse(): boolean {
      return this.projectConfig.menuSetting.isCollapse;
    },
  },
  actions: {
    setProjectConfig(config: DeepPartial<ProjectConfig>): void {
      this.projectConfig = deepMerge(this.projectConfig || {}, config);
      console.log('store.projectConfig', config, this.projectConfig);
      Persistent.setLocal(PROJ_CFG_KEY, this.projectConfig);
    },
  },
});

export function useAppStoreWithOut() {
  return useAppStore(store);
}
