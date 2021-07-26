/*
 * @Author: kingford
 * @Date: 2021-07-26 15:59:41
 * @LastEditTime: 2021-07-26 17:41:13
 */
import type { AppRouteModule } from '../../types';
import { LAYOUT } from '../../constant';

const devices: AppRouteModule = {
  path: '/devices',
  name: 'Devices',
  component: LAYOUT,
  redirect: '/devices/analysis',
  meta: {
    orderNo: 10,
    icon: 'el-icon-menu',
    title: 'devices',
  },
  children: [
    {
      path: 'analysis',
      name: 'Analysis',
      component: () => import('@/views/devices/analysis/index.vue'),
      meta: {
        // affix: true,
        title: 'Analysis',
      },
    },
    {
      path: 'workbench',
      name: 'Workbench',
      component: () => import('@/views/devices/workbench/index.vue'),
      meta: {
        title: 'Workbench',
      },
    },
  ],
};

export default devices;
