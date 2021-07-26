/*
 * @Author: kingford
 * @Date: 2021-07-24 10:41:56
 * @LastEditTime: 2021-07-26 19:55:45
 */
import { AppRouteModule, AppRouteRecordRaw } from '../types';
import { PageEnum } from '@/enums/pageEnum';
import { PAGE_NOT_FOUND_ROUTE, REDIRECT_ROUTE } from './basic';

const modules = import.meta.globEager('./modules/**/*.ts');

export const routeModuleList: AppRouteModule[] = [];

Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

console.log(routeModuleList);

export const asyncRoutes = [...routeModuleList];

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

export const basicRoutes = [
  RootRoute,
  LoginRoute,
  ...routeModuleList,
  REDIRECT_ROUTE,
  PAGE_NOT_FOUND_ROUTE,
];
