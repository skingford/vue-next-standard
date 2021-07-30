<!--
 * @Author: kingford
 * @Date: 2021-07-24 11:45:25
 * @LastEditTime: 2021-07-30 09:28:41
-->
<template>
  <div>
    analysis {{ user.name }}---{{ user.fullName }}

    <svg-icon name="404"></svg-icon>
  </div>
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
