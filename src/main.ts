/*
 * @Author: kingford
 * @Date: 2021-06-13 01:43:14
 * @LastEditTime: 2021-07-16 12:02:15
 */
import { createApp } from 'vue';
import { router } from './router';
//import App from './App.vue'
import App from './App';
import storage from '@utils/storage';

// global styles
import 'normalize.css/normalize.css';
import './styles/index.scss';

import useAnt from './hooks/useAnt';

const app = createApp(App);

app.config.globalProperties.$storage = storage;

app.use(useAnt).use(router).mount('#app');
