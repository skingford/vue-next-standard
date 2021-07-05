<!--
 * @Author: kingford
 * @Date: 2021-06-27 20:46:13
 * @LastEditTime: 2021-06-27 21:22:24
-->
<!--
 * @Author: kingford
 * @Date: 2021-06-27 11:18:12
 * @LastEditTime: 2021-06-27 18:33:14
-->
<template>
  <div>{{ user.firstName }}-{{ user.lastName }}</div>
  <p>{{ fullName1 }}</p>
  <p>{{ fullName2 }}</p>
</template>
<script lang="ts">
import { defineComponent, reactive, computed } from 'vue';

export default defineComponent({
  setup() {
    const user = reactive({
      firstName: '韩',
      lastName: '志伟',
    });
    const fullName1 = computed(() => {
      return user.firstName + user.lastName;
    });
    const fullName2 = computed({
      get() {
        return user.firstName + '_' + user.lastName;
      },
      set(val: string) {
        const names = val.split('_');
        user.firstName = names[0];
        user.lastName = names[1];
      },
    });

    return {
      user,
      fullName1,
      fullName2,
    };
  },
});
</script>
