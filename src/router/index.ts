/*
 * @Author: kingford
 * @Date: 2021-06-27 11:14:16
 * @LastEditTime: 2021-06-27 20:39:44
 */
import { createRouter, createWebHashHistory } from 'vue-router';
import refComp from '@/composition/ref.vue';
import renativeComp from '@/composition/reactive.vue';
const Home = { template: '<div>Home</div>' };
const About = { template: '<div>About</div>' };

const routes = [
  { path: '/', component: Home },
  { path: '/ref', component: refComp },
  { path: '/reactive', component: renativeComp },
  { path: '/about', component: About },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});
