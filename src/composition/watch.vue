<!--
 * @Author: kingford
 * @Date: 2021-06-27 11:18:12
 * @LastEditTime: 2021-06-27 21:46:55
-->
<template>
  <div>{{ user.firstName }}-{{ user.lastName }}</div>
  <p>{{ fullName3 }}</p>
</template>
<script lang="ts">
import { defineComponent, reactive, watch, ref } from 'vue';

export default defineComponent({
  setup() {
    const user = reactive({
      firstName: '韩',
      lastName: '志伟',
    });

    const fullName3 = ref('');
    watch(
      user,
      ({ firstName, lastName }) => {
        fullName3.value = firstName + '_' + lastName;
      },
      { immediate: true, deep: true }
    );

    return {
      user,
      fullName3,
    };
  },
});
</script>
