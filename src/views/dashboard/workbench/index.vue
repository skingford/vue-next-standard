<!--
 * @Author: kingford
 * @Date: 2021-07-24 11:45:56
 * @LastEditTime: 2021-08-03 17:05:09
-->
<template>
  <div>workbench</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const type = 'register#customRole';

    console.log(type.indexOf('register#'));
    console.log(type.indexOf('customRole'));
    console.log(type.indexOf('serverRole'));
  },
});
</script>
