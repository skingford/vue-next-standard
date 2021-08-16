<!--
 * @Author: kingford
 * @Date: 2021-07-22 10:37:06
 * @LastEditTime: 2021-08-16 17:47:37
-->
<template>
  <el-config-provider
    :locale="locale"
    :class="['app-container', isCollapse && 'is-mobile']"
    v-cloak
  >
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </el-config-provider>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useAppStoreWithOut } from '@/store/modules/app';
import { ElConfigProvider } from 'element-plus';
import zhCn from 'element-plus/lib/locale/lang/zh-cn';

export default defineComponent({
  components: {
    [ElConfigProvider.name]: ElConfigProvider,
  },
  setup() {
    const store = useAppStoreWithOut();
    const isCollapse = computed(() => store.isCollapse);
    return {
      isCollapse,
      locale: zhCn,
    };
  },
});
</script>
