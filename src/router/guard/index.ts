/*
 * @Author: kingford
 * @Date: 2021-07-27 10:19:52
 * @LastEditTime: 2021-07-27 19:11:30
 */
import type { Router } from 'vue-router';
import { getPageTitle } from '@/setting/page-title';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

export function setupRouterGuard(router: Router) {
  NProgress.start();
  createPageGuard(router);
}

function createPageGuard(router: Router) {
  router.beforeEach((to, from, next) => {
    console.log('from:', from);
    document.title = getPageTitle(to.meta.title);
    next();
  });

  router.afterEach(() => {
    NProgress.done();
  });
}
