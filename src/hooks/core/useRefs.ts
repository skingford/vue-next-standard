/*
 * @Author: kingford
 * @Date: 2021-08-03 14:35:52
 * @LastEditTime: 2021-08-03 14:37:17
 */
import { ref, onBeforeUpdate, Ref } from 'vue';

export function useRefs(): [
  Ref<HTMLElement[]>,
  (index: number) => (el: HTMLElement) => void
] {
  const refs = ref<HTMLElement[]>([]);

  onBeforeUpdate(() => {
    refs.value = [];
  });

  const setRefs = (index: number) => (el: HTMLElement) => {
    refs.value[index] = el;
  };

  return [refs, setRefs];
}
