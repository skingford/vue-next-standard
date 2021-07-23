/*
 * @Author: kingford
 * @Date: 2021-07-21 15:22:03
 * @LastEditTime: 2021-07-21 15:29:37
 */

import { App } from 'vue';
import { ElMessage } from 'element-plus';
import storage from '@utils/storage';

const option ={ size: 'mini'}

export function setGlobalProperties(app: App): void {
  app.config.globalProperties.$storage = storage;
  app.config.globalProperties.$message = ElMessage;
  app.config.globalProperties.$ELEMENT = option;
}
