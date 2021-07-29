/*
 * @Author: kingford
 * @Date: 2021-06-13 01:43:14
 * @LastEditTime: 2021-07-29 12:41:35
 */

// global styles
import 'normalize.css/normalize.css';
import '@/styles/tailwind.css';
import '@/styles/index.scss';

// Register icon sprite
import 'virtual:svg-icons-register';

import { createApp } from 'vue';
import { setupRouter, router } from '@/router';
import { setupRouterGuard } from '@/router/guard';
import { setupStore } from '@/store';
import {
  setupElementPlus,
  setupGlobalProperties,
} from '@utils/globalProperties';
import { registerGlobalComponent } from '@/components';

import App from './App.vue';

async function bootstrap() {
  const app = createApp(App);

  // config store
  setupStore(app);

  // configure routing
  setupRouter(app);

  setupRouterGuard(router);

  // configure element-plus
  setupElementPlus(app);

  // congiure global properties
  setupGlobalProperties(app);

  // register global components
  registerGlobalComponent(app);

  await router.isReady();

  app.mount('#app');
}

void bootstrap();
