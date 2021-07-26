/*
 * @Author: kingford
 * @Date: 2021-07-26 09:44:35
 * @LastEditTime: 2021-07-26 09:45:00
 */
declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const Component: DefineComponent<{}, {}, any>;
  export default Component;
}

declare module 'virtual:*' {
  const result: any;
  export default result;
}
