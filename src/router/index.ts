/*
 * @Author: kingford
 * @Date: 2021-06-27 11:14:16
 * @LastEditTime: 2021-06-27 12:44:03
 */
import { createRouter, createWebHashHistory } from 'vue-router';
// import refComp from '@/composition/ref.vue';
const Home = { template: '<div>Home</div>' };
const About = { template: '<div>About</div>' };

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});
