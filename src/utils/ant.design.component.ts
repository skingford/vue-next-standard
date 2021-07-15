/*
 * @Author: kingford
 * @Date: 2021-07-16 00:24:54
 * @LastEditTime: 2021-07-16 00:33:12
 */
import { App } from 'vue';

const components: any[] = [];

const AntComponent = {
  install: function (app: App) {
    components.forEach((v) => {
      app.use(v);
    });
  },
};

export default AntComponent;
