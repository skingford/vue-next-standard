/*
 * @Author: kingford
 * @Date: 2021-07-25 00:05:14
 * @LastEditTime: 2021-07-25 00:32:15
 */
import { defineStore } from 'pinia';
import { store } from '@/stores';

interface UserState {
  name: string;
}

export const useUserStore = defineStore({
  id: 'app-user',
  state: (): UserState => ({ name: 'kingford' }),
  getters: {
    fullName: (state: UserState) => `steve ${state.name}`,
  },
  actions: {},
});

export function useUserStoreWithOut() {
  return useUserStore(store);
}
