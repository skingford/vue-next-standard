/*
 * @Author: kingford
 * @Date: 2021-07-16 00:24:54
 * @LastEditTime: 2021-07-17 01:20:45
 */
import { App } from 'vue';

import { ElButton, ElSelect } from 'element-plus';
const components: any[] = [ElButton, ElSelect];

const useElement = {
  install: function (app: App) {
    components.forEach((v) => {
      app.use(v);
    });
  },
};

export default useElement;
