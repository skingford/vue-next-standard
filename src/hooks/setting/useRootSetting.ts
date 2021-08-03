/*
 * @Author: kingford
 * @Date: 2021-08-03 14:39:55
 * @LastEditTime: 2021-08-03 14:42:23
 */
import { useAppStore } from '@/store/modules/app';

export function useRootSetting() {
  const appStore = useAppStore();
  console.log('useRootSetting:', appStore);
  return {};
}
