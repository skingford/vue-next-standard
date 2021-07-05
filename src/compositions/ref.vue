<!--
 * @Author: kingford
 * @Date: 2021-06-27 11:18:12
 * @LastEditTime: 2021-06-27 18:33:14
-->
<template>
  <div>ref- {{ count }}</div>
  <button type="button" @click="setCount">+1</button>
  <hr />
  <input type="text" />
  <input type="text" ref="inputRef" />
</template>
<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  setup() {
    const count = ref(0);
    const inputRef = ref<HTMLElement | null>(null);
    const setCount = () => {
      count.value += 1;
    };

    onMounted(() => {
      inputRef.value && inputRef.value.focus();
    });

    return {
      count,
      inputRef,
      setCount,
    };
  },
});
</script>
