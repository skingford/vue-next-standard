<!--
 * @Author: kingford
 * @Date: 2021-07-22 10:37:06
 * @LastEditTime: 2021-08-03 15:18:33
-->
<template>
  <div :class="isCollapse && 'is-mobile'" v-cloak class="app-container">
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useAppStoreWithOut } from '@/store/modules/app';
export default defineComponent({
  setup() {
    const store = useAppStoreWithOut();
    const isCollapse = computed(() => store.isCollapse);
    return {
      isCollapse,
    };
  },
});
</script>
