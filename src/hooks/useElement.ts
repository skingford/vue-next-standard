/*
 * @Author: kingford
 * @Date: 2021-07-16 00:24:54
 * @LastEditTime: 2021-07-21 15:28:40
 */
import { App } from 'vue';
import { ElButton, ElSelect, ElMessageBox } from 'element-plus';

const components: any[] = [ElButton, ElSelect];
const plugins: any[] = [ElMessageBox];

//type SFCWithInstall<T> = T & { install(app: App): void; }

const useElement = {
  install: function (app: App) {
    components.forEach((component) => {
      app.component(component.name, component);
    });

    plugins.forEach((plugin) => {
      app.use(plugin);
    });
  },
};

export default useElement;
