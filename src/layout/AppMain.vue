<!--
 * @Author: kingford
 * @Date: 2021-07-31 14:58:46
 * @LastEditTime: 2021-08-03 15:04:14
-->
<template>
  <keep-alive :include="cachedViews">
    <router-view :key="key" />
  </keep-alive>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  setup() {
    const cachedViews = [];
    const route = useRoute();
    console.log('path:', route.path);
    const key = computed(() => route.path);
    return { key, cachedViews };
  },
});
</script>
