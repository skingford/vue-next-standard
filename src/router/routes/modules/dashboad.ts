/*
 * @Author: kingford
 * @Date: 2021-07-16 00:36:38
 * @LastEditTime: 2021-07-24 11:55:12
 */
import type { AppRouteModule } from '../../types';
import { LAYOUT } from '../../constant';

const dashboard: AppRouteModule = {
  path: '/dashboard',
  name: 'Dashboard',
  component: LAYOUT,
  redirect: '/dashboard/analysis',
  meta: {
    orderNo: 10,
    icon: 'ion:grid-outline',
    title: 'Dashboard',
  },
  children: [
    {
      path: 'analysis',
      name: 'Analysis',
      component: () => import('@/views/dashboard/analysis/index.vue'),
      meta: {
        // affix: true,
        title: 'Analysis',
      },
    },
    {
      path: 'workbench',
      name: 'Workbench',
      component: () => import('@/views/dashboard/workbench/index.vue'),
      meta: {
        title: 'Workbench',
      },
    },
  ],
};

export default dashboard;
