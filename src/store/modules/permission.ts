/*
 * @Author: kingford
 * @Date: 2021-07-27 19:42:22
 * @LastEditTime: 2021-08-03 20:21:02
 */
import { defineStore } from 'pinia';
import { store } from '@/store';
import { asyncRoutes } from '@/router/routes';
import { AppRouteModule } from '@/router/types';
import { RoleEnum } from '@/enums/roleEnum';

function hasPermission(roles: RoleEnum[], route: AppRouteModule) {
  if (route.meta && route.meta.roles) {
    return roles.some((role) => route.meta.roles?.includes(role));
  } else {
    return true;
  }
}

export function filterAsyncRoutes(routes: AppRouteModule[], roles) {
  const res: AppRouteModule[] = [];

  routes.forEach((route) => {
    const tmp: AppRouteModule = { ...route };

    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles);
      }
      res.push(tmp);
    }
  });

  return res;
}

interface PermissionState {
  accessedRoutes: AppRouteModule[];
}

export const usePermissionStore = defineStore({
  id: 'app-permission',
  state: (): PermissionState => ({
    accessedRoutes: [],
  }),
  getters: {},
  actions: {
    generateRoutes(roles) {
      return new Promise((resolve) => {
        let accessedRoutes;
        if (roles.includes('admin')) {
          accessedRoutes = asyncRoutes || [];
        } else {
          accessedRoutes = filterAsyncRoutes(asyncRoutes, roles);
        }
        this.accessedRoutes = accessedRoutes;
        resolve(accessedRoutes);
      });
    },
  },
});

export function useAppStoreWithOut() {
  return usePermissionStore(store);
}
