/*
 * @Author: kingford
 * @Date: 2021-07-26 14:39:26
 * @LastEditTime: 2021-07-27 20:40:21
 */
import { App } from 'vue';
const modules = import.meta.globEager('./global/**/*.vue');

export function registerGlobalComponent(app: App) {
  Object.keys(modules).forEach((key) => {
    const component = modules[key].default;
    console.log('component:', component);
    console.log('component.key:', modules[key]);

    app.component(component.name, component);
  });
}
