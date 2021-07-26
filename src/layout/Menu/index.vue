<!--
 * @Author: kingford
 * @Date: 2021-07-23 16:15:42
 * @LastEditTime: 2021-07-26 20:01:08
-->
<template>
  <div class="flex flex-col layout-menu">
    <div class="h-12 logo">
      <img class="h-12" src="@/assets/logo.png" />
    </div>
    <el-scrollbar class="flex-1">
      <el-menu
        default-active="1-4-1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
      >
        <MenuItem
          v-for="route in permission_routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
    <div class="h-13">footer button</div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
// import { useRouter } from 'vue-router';
import MenuItem from './MenuItem.vue';
import { asyncRoutes } from '@/router/routes';

export default defineComponent({
  components: {
    MenuItem,
  },
  setup() {
    // 菜单展开关闭
    const isCollapse = ref(false);

    const permission_routes = asyncRoutes;

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
      permission_routes,
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
