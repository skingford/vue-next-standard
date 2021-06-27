/*
 * @Author: kingford
 * @Date: 2021-06-27 11:14:16
 * @LastEditTime: 2021-06-27 22:06:46
 */
import { createRouter, createWebHashHistory } from 'vue-router';
import refComp from '@/composition/ref.vue';
import renativeComp from '@/composition/reactive.vue';
import computedComp from '@/composition/computed.vue';
import watchComp from '@/composition/watch.vue';

const routes = [
  { path: '/', component: watchComp },
  { path: '/ref', component: refComp },
  { path: '/reactive', component: renativeComp },
  { path: '/computed', component: computedComp },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});
