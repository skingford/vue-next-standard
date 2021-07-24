/*
 * @Author: kingford
 * @Date: 2021-07-24 10:41:56
 * @LastEditTime: 2021-07-24 11:53:18
 */
import { AppRouteModule, AppRouteRecordRaw } from '../types.d';
import { PageEnum } from '../../enums/pageEnum';

const modules = import.meta.globEager('./modules/**/*.ts');
const routeModuleList: AppRouteModule[] = [];

Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

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
  component: () => import('@/views/login/login.vue'),
  meta: {
    title: '登录',
  },
};

export const basicRoutes = [RootRoute, LoginRoute];
