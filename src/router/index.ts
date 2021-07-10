/*
 * @Author: kingford
 * @Date: 2021-06-27 11:14:16
 * @LastEditTime: 2021-07-10 22:19:53
 */
import { createRouter, createWebHashHistory } from 'vue-router';
import refComp from '@/compositions/ref.vue';
import renativeComp from '@/compositions/reactive.vue';
import computedComp from '@/compositions/computed.vue';
import watchComp from '@/compositions/watch.vue';

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
