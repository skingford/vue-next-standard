/*
 * @Author: kingford
 * @Date: 2021-06-13 01:43:14
 * @LastEditTime: 2021-07-10 21:05:28
 */
import { createApp } from 'vue';
import { router } from './router';
//import App from './App.vue'
import App from './App';
import storage from './utils/storage';

const app = createApp(App);

app.config.globalProperties.$storage = storage;

app.use(router).mount('#app');
