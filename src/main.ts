/*
 * @Author: kingford
 * @Date: 2021-06-13 01:43:14
 * @LastEditTime: 2021-08-04 16:01:02
 */

// global styles
import 'normalize.css/normalize.css';
import 'element-plus/lib/theme-chalk/index.css';
import 'virtual:windi.css';
import '@/styles/index.scss';

// Register icon sprite
import 'virtual:svg-icons-register';

import { createApp } from 'vue';
import { setupStore } from '@/store';
import { setupErrorHandle } from '@/logics/error-handle';
import { setupRouter, router } from '@/router';
import { setupRouterGuard } from '@/router/guard';
import { registerGlobalComponent } from '@/components';
import { initAppConfigStore } from '@/logics/initAppConfig';
import { setupElementPlus, setupGlobalProperties } from '@/utils/globalProperties';

import App from './App.vue';

async function bootstrap() {
  const app = createApp(App);

  // config store
  setupStore(app);

  // init app config
  initAppConfigStore();

  // configure routing
  setupRouter(app);

  setupRouterGuard(router);

  // configure element-plus
  setupElementPlus(app);

  // congiure global properties
  setupGlobalProperties(app);

  // register global components
  registerGlobalComponent(app);

  // register error handle
  setupErrorHandle(app);

  // https://next.router.vuejs.org/api/#isready
  await router.isReady();

  app.mount('#app');
}

void bootstrap();
