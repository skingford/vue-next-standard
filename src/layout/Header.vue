<!--
 * @Author: kingford
 * @Date: 2021-07-16 08:50:08
 * @LastEditTime: 2021-07-24 09:54:37
-->
/* * @Author: kingford * @Date: 2021-07-16 00:39:09 * @LastEditTime: 2021-07-23
17:29:10 */
<template>
  <header class="h-12 header">
    <!-- <i
      :class="isOpen ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      @click="toggle"
    ></i> -->
    <el-button
      class="btn-toggle"
      @click="toggle"
      type="text"
      :icon="isOpen ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
    >
    </el-button>
    header
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const isOpen = ref(false);
    const toggle = () => {
      isOpen.value = !isOpen.value;
    };

    return {
      isOpen,
      toggle,
    };
  },
});
</script>

<style lang="scss" scoped>
.header {
  background: $bg-primary;
  .btn-toggle {
    font-size: 30px;
    color: #333333;
  }
}
</style>
