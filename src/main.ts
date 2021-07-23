/*
 * @Author: kingford
 * @Date: 2021-06-13 01:43:14
 * @LastEditTime: 2021-07-22 10:37:56
 */
import { createApp } from 'vue';
import { router } from './router';
import App from './App.vue';
// import App from './App';
import { setGlobalProperties } from '@utils/setGlobalProperties';

// global styles
import 'normalize.css/normalize.css';
import './styles/index.scss';
import './styles/index.css';

import useElement from './hooks/useElement';

const app = createApp(App);

// 挂载全局属性
setGlobalProperties(app);

app.use(useElement, { size: 'small' }).use(router).mount('#app');
