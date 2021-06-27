<!--
 * @Author: kingford
 * @Date: 2021-06-27 11:18:12
 * @LastEditTime: 2021-06-27 18:24:44
-->
<template>
  <div>ref- {{ count }}</div>
  <button type="button" @click="setCount">+1</button>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const count = ref(0);
    const setCount = () => {
      count.value += 1;
    };
    return {
      count,
      setCount,
    };
  },
});
</script>
