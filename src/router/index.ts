/*
 * @Author: kingford
 * @Date: 2021-06-27 11:14:16
 * @LastEditTime: 2021-07-24 23:41:42
 */
import { App } from 'vue';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

import { REDIRECT_NAME } from './constant';
import { basicRoutes, LoginRoute } from './routes';
const WHITE_NAME_LIST = [LoginRoute.name, REDIRECT_NAME];

export const router = createRouter({
  history: createWebHashHistory(),
  routes: basicRoutes as Array<RouteRecordRaw>,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export function resetRouter() {
  router.getRoutes().forEach((route) => {
    const { name } = route;
    if (name && !WHITE_NAME_LIST.includes(name as string)) {
      router.hasRoute(name) && router.removeRoute(name);
    }
  });
}

export function setupRouter(app: App<Element>) {
  app.use(router);
}
