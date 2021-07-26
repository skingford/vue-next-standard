/*
 * @Author: kingford
 * @Date: 2021-07-25 00:05:01
 * @LastEditTime: 2021-07-25 00:08:34
 */
import { defineStore } from 'pinia';
import { store } from '@/store';

interface AppState {}

export const useAppStore = defineStore({
  id: 'app',
  state: (): AppState => ({}),
  getters: {},
  actions: {},
});

export function useAppStoreWithOut() {
  return useAppStore(store);
}
