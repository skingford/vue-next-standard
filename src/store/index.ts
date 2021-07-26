/*
 * @Author: kingford
 * @Date: 2021-07-24 23:55:23
 * @LastEditTime: 2021-07-24 23:56:04
 */
import type { App } from 'vue';
import { createPinia } from 'pinia';

const store = createPinia();

export function setupStore(app: App<Element>) {
  app.use(store);
}

export { store };
