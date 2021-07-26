/*
 * @Author: kingford
 * @Date: 2021-07-24 10:41:56
 * @LastEditTime: 2021-07-26 18:01:12
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
  hidden: true,
  meta: {
    title: 'Root',
  },
};

export const LoginRoute = {
  path: '/login',
  name: 'Login',
  component: () => import('@/views/login/index.vue'),
  hidden: true,
  meta: {
    title: '登录',
  },
};

export const basicRoutes = [
  RootRoute,
  LoginRoute,
  PAGE_NOT_FOUND_ROUTE,
  REDIRECT_ROUTE,
  ...routeModuleList,
];
