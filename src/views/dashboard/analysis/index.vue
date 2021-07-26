<!--
 * @Author: kingford
 * @Date: 2021-07-24 11:45:25
 * @LastEditTime: 2021-07-25 00:32:49
-->
<template>
  <div>analysis {{ user.name }}---{{ user.fullName }}</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useUserStoreWithOut } from '@/store/modules/user';

export default defineComponent({
  setup() {
    const user = useUserStoreWithOut();
    return { user };
  },
});
</script>
