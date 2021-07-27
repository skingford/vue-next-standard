/*
 * @Author: kingford
 * @Date: 2021-07-27 10:19:52
 * @LastEditTime: 2021-07-27 10:37:01
 */
import type { Router } from 'vue-router';
import { getPageTitle } from '@/setting/page-title';

export function setupRouterGuard(router: Router) {
  createPageGuard(router);
}

function createPageGuard(router: Router) {
  router.beforeEach((to, from, next) => {
    console.log(to, from);
    document.title = getPageTitle(to.meta.title);
    next();
  });

  router.afterEach(() => {
    console.log('router.afterEach');
  });
}
