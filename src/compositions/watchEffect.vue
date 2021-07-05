<!--
 * @Author: kingford
 * @Date: 2021-06-27 11:18:12
 * @LastEditTime: 2021-06-27 22:10:12
-->
<template>
  <div>{{ user.firstName }}-{{ user.lastName }}</div>
  <p>{{ fullName3 }}</p>
</template>
<script lang="ts">
import { defineComponent, reactive, watchEffect, ref } from 'vue';

export default defineComponent({
  setup() {
    const user = reactive({
      firstName: '韩',
      lastName: '志伟',
    });

    const fullName3 = ref('');

    watchEffect(() => {
      fullName3.value = user.firstName + '_' + user.lastName;
    });

    watchEffect(() => {
      const names = fullName3.value.split('_');
      user.firstName = names[0];
      user.lastName = names[1];
    });

    return {
      user,
      fullName3,
    };
  },
});
</script>
