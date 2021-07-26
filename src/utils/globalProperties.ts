/*
 * @Author: kingford
 * @Date: 2021-07-21 15:22:03
 * @LastEditTime: 2021-07-26 10:36:01
 */

import { App } from 'vue';
import { ElMessage } from 'element-plus';
import useElement from '@/hooks/useElement';

import storage from '@utils/storage';

const option = { size: 'mini' };

export function setupGlobalProperties(app: App) {
  app.config.globalProperties.$storage = storage;
  app.config.globalProperties.$message = ElMessage;
  app.config.globalProperties.$ELEMENT = option;
}

export function setupElementPlus(app: App) {
  app.use(useElement);
}
