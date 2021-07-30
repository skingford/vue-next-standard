/*
 * @Author: kingford
 * @Date: 2021-07-26 15:59:41
 * @LastEditTime: 2021-07-30 15:21:10
 */
import type { AppRouteModule } from '@/router/types';
import { LAYOUT } from '@/router/constant';

const compositions: AppRouteModule = {
  path: '/compositions',
  name: 'compositions',
  component: LAYOUT,
  redirect: '/compositions/ref',
  meta: {
    icon: 'el-icon-menu',
    title: 'compositions',
  },
  children: [
    {
      path: 'ref',
      name: 'Ref',
      component: () => import('@/compositions/ref.vue'),
      meta: {
        icon: 'bug',
        title: 'ref',
      },
    },
    {
      path: 'reactive',
      name: 'Reactive',
      component: () => import('@/compositions/reactive.vue'),
      meta: {
        title: 'reactive',
      },
    },
    {
      path: 'computed',
      name: 'Computed',
      component: () => import('@/compositions/computed.vue'),
      meta: {
        title: 'computed',
      },
    },
    {
      path: 'watch',
      name: 'Watch',
      component: () => import('@/compositions/watch.vue'),
      meta: {
        title: 'Watch',
      },
    },
    {
      path: 'watchEffect',
      name: 'watchEffect',
      component: () => import('@/compositions/watchEffect.vue'),
      meta: {
        title: 'watchEffect',
      },
    },
    {
      path: 'router',
      name: 'router',
      component: () => import('@/compositions/router.vue'),
      meta: {
        title: 'router',
      },
    },
  ],
};

export default compositions;
