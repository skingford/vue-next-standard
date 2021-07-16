/*
 * @Author: kingford
 * @Date: 2021-07-16 00:24:54
 * @LastEditTime: 2021-07-16 09:02:00
 */
import { App } from 'vue';

import { Button } from 'ant-design-vue';
const components: any[] = [Button];

const AntComponent = {
  install: function (app: App) {
    components.forEach((v) => {
      app.use(v);
    });
  },
};

export default AntComponent;
