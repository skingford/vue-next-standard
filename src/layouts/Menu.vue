<!--
 * @Author: kingford
 * @Date: 2021-07-23 16:15:42
 * @LastEditTime: 2021-07-24 09:33:22
-->
<template>
  <div class="flex flex-col layout-menu">
    <div class="h-12 logo">
      <img class="h-12" src="../assets/logo.png" />
    </div>
    <el-scrollbar class="flex-1">
      <el-menu
        default-active="1-4-1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
      >
        <el-submenu index="1">
          <template #title>
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <template #title>分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template #title>选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>

        <el-submenu index="5">
          <template #title>
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <template #title>分组一</template>
            <el-menu-item index="5-1">选项1</el-menu-item>
            <el-menu-item index="5-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="5-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="5-4">
            <template #title>选项4</template>
            <el-menu-item index="5-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>

        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <template #title>导航二</template>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <template #title>导航三</template>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <template #title>导航四</template>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
    <div class="h-13">footer button</div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    // 菜单展开关闭
    const isCollapse = ref(false);

    const handleOpen = (key: string | number, keyPath: string) => {
      console.log(key, keyPath);
    };

    const handleClose = (key: string | number, keyPath: string) => {
      console.log(key, keyPath);
    };

    return {
      isCollapse,
      handleOpen,
      handleClose,
    };
  },
});
</script>
<style lang="scss" scoped>
.layout-menu {
  width: 200px;
  .logo {
    background: $bg-primary;
  }
  /* stylelint-disable */
  :deep() {
    .el-scrollbar__view,
    .el-menu {
      height: 100%;
    }
  }
}
</style>
