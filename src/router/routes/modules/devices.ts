/*
 * @Author: kingford
 * @Date: 2021-07-26 15:59:41
 * @LastEditTime: 2021-07-27 20:45:50
 */
import type { AppRouteModule } from '@/router/types';
import { LAYOUT } from '@/router/constant';

const devices: AppRouteModule = {
  path: '/devices',
  name: 'Devices',
  component: LAYOUT,
  redirect: '/devices/analysis',
  meta: {
    orderNo: 10,
    icon: 'el-icon-menu',
    title: '设备',
  },
  children: [
    {
      path: 'analysis',
      name: '设备分析',
      component: () => import('@/views/devices/analysis/index.vue'),
      meta: {
        icon: '404',
        title: 'Analysis',
      },
    },
    {
      path: 'workbench',
      name: '设备面板',
      component: () => import('@/views/devices/workbench/index.vue'),
      meta: {
        title: 'Workbench',
      },
    },
  ],
};

export default devices;
