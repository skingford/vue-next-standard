/*
 * @Author: kingford
 * @Date: 2021-06-13 01:43:14
 * @LastEditTime: 2021-07-19 00:59:45
 */
import { createApp } from 'vue';
import { router } from './router';
//import App from './App.vue'
import App from './App';
import storage from '@utils/storage';

// global styles
import 'normalize.css/normalize.css';
import './styles/index.scss';
import './styles/index.css';

import useElement from './hooks/useElement';

const app = createApp(App);

app.config.globalProperties.$storage = storage;

app.use(useElement, { size: 'small' }).use(router).mount('#app');
