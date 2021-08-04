/*
 * @Author: kingford
 * @Date: 2021-07-21 15:22:03
 * @LastEditTime: 2021-08-04 15:20:06
 */

import { App } from 'vue';
import { ElMessage } from 'element-plus';
import useElement from '@/hooks/useElement';

const option = { size: 'small' };

export function setupGlobalProperties(app: App) {
  app.config.globalProperties.$message = ElMessage;
  app.config.globalProperties.$ELEMENT = option;
}

export function setupElementPlus(app: App) {
  app.use(useElement);
}
