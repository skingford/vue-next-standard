/*
 * @Author: kingford
 * @Date: 2021-07-16 00:36:38
 * @LastEditTime: 2021-07-26 20:34:05
 */
import type { AppRouteModule } from '../../types';
import { LAYOUT } from '@/router/constant';

const dashboard: AppRouteModule = {
  path: '/dashboard',
  name: 'Dashboard',
  component: LAYOUT,
  redirect: '/dashboard/analysis',
  meta: {
    orderNo: 10,
    icon: 'el-icon-menu',
    title: 'Dashboard',
  },
  children: [
    {
      path: 'analysis',
      name: 'Analysis',
      component: () => import('@/views/dashboard/analysis/index.vue'),
      meta: {
        // affix: true,
        icon: 'el-icon-menu',
        title: 'Analysis',
      },
    },
    {
      path: 'workbench',
      name: 'Workbench',
      component: () => import('@/views/dashboard/workbench/index.vue'),
      meta: {
        icon: 'el-icon-menu',
        title: 'Workbench',
      },
    },
  ],
};

export default dashboard;
