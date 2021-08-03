<!--
 * @Author: kingford
 * @Date: 2021-07-23 16:15:42
 * @LastEditTime: 2021-08-03 15:23:42
-->
<template>
  <div class="layout-menu">
    <div class="h-12 logo" v-if="!isCollapse">
      <img class="h-12" src="@/assets/logo.png" />
    </div>

    <el-scrollbar class="flex-1">
      <el-menu
        :default-active="activeMenu"
        background-color="#304156"
        text-color="#bfcbd9"
        active-text-color="#f4f4f5"
        :collapse="isCollapse"
        :unique-opened="false"
        :collapse-transition="false"
        mode="vertical"
      >
        <MenuItem
          v-for="route in permission_routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';
import MenuItem from './MenuItem.vue';
import { asyncRoutes } from '@/router/routes';
import { useAppStoreWithOut } from '@/store/modules/app';

export default defineComponent({
  components: {
    MenuItem,
  },
  setup() {
    // 菜单展开关闭
    const permission_routes = asyncRoutes;

    const activeMenu = computed(() => {
      const { meta, path } = useRoute();
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    });

    const store = useAppStoreWithOut();
    const isCollapse = computed(() => store.isCollapse);

    return {
      isCollapse,
      activeMenu,
      permission_routes,
    };
  },
});
</script>
