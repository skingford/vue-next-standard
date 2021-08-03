<!--
 * @Author: kingford
 * @Date: 2021-07-22 10:37:06
 * @LastEditTime: 2021-08-03 19:05:12
-->
<template>
  <div :class="['app-container', isCollapse && 'is-mobile']" v-cloak>
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
