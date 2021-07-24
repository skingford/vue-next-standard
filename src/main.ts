/*
 * @Author: kingford
 * @Date: 2021-06-13 01:43:14
 * @LastEditTime: 2021-07-24 10:26:39
 */

// global styles
import 'normalize.css/normalize.css';
import '@/styles/tailwind.css';
import '@/styles/index.scss';

import { createApp } from 'vue';
import { setupRouter } from './router';
import {
  setupElementPlus,
  setupGlobalProperties,
} from '@utils/globalProperties';

import App from './App.vue';

function bootstrap() {
  const app = createApp(App);

  // configure routing
  setupRouter(app);

  // configure element-plus
  setupElementPlus(app);

  // congiure global properties
  setupGlobalProperties(app);

  app.mount('#app');
}

void bootstrap();
