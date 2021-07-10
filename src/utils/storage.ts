/*
 * @Author: kingford
 * @Date: 2021-04-04 23:02:28
 * @LastEditTime: 2021-07-10 21:04:25
 */
import config from '../config';

export default {
  setItem(key: string, val: any) {
    let storage = this.getStroage();
    storage[key] = val;
    window.localStorage.setItem(config.namespace, JSON.stringify(storage));
  },

  getItem(key: string) {
    return this.getStroage()[key];
  },

  getStroage() {
    return JSON.parse(window.localStorage.getItem(config.namespace) || '{}');
  },

  clearItem(key: string) {
    let storage = this.getStroage();
    delete storage[key];
    window.localStorage.setItem(config.namespace, JSON.stringify(storage));
  },

  clearAll() {
    window.localStorage.clear();
  },
};
