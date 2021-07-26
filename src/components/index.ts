/*
 * @Author: kingford
 * @Date: 2021-07-26 14:39:26
 * @LastEditTime: 2021-07-26 14:56:41
 */
import { App } from 'vue';
const modules = import.meta.globEager('./global/**/*.vue');

export function registerGlobalComponent(app: App) {
  Object.keys(modules).forEach((key) => {
    const component = modules[key].default;
    app.component(component.name, component);
  });
}
