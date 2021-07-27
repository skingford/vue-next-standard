import { router } from './../index';
/*
 * @Author: kingford
 * @Date: 2021-07-24 10:41:56
 * @LastEditTime: 2021-07-27 19:25:46
 */
import { PageEnum } from '@/enums/pageEnum';
import { AppRouteModule, AppRouteRecordRaw } from '@/router/types';
import { PAGE_NOT_FOUND_ROUTE, REDIRECT_ROUTE } from '@/router/routes/basic';

const modules = import.meta.globEager('./modules/**/*.ts');

const routeModuleList: AppRouteModule[] = [];

Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

export const RootRoute: AppRouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: PageEnum.BASE_HOME,
  meta: {
    title: 'Root',
  },
};

export const LoginRoute = {
  path: '/login',
  name: 'Login',
  component: () => import('@/views/login/index.vue'),
  meta: {
    title: '登录',
  },
};

export const asyncRoutes = [...routeModuleList, LoginRoute];

console.log('asyncRoutes:', asyncRoutes);

export const basicRoutes = [
  RootRoute,
  LoginRoute,
  ...asyncRoutes,
  REDIRECT_ROUTE,
  PAGE_NOT_FOUND_ROUTE,
];
