/*
 * @Author: kingford
 * @Date: 2021-06-13 01:43:14
 * @LastEditTime: 2021-06-27 12:44:40
 */
import { createApp } from 'vue';
import { router } from './router';
//import App from './App.vue'
import App from './App';

const app = createApp(App);
app.use(router);
app.mount('#app');
// createApp(App).mount('#app');
