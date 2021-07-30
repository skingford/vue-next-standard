<!--
 * @Author: kingford
 * @Date: 2021-07-26 11:50:00
 * @LastEditTime: 2021-07-30 17:55:27
-->
<template>
  <div v-if="!item.hidden">
    <template
      v-if="
        hasOneShowingChild(item.children, item) &&
        (!onlyOneChild.children || onlyOneChild.noShowingChildren) &&
        !item.alwaysShow
      "
    >
      <app-link v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)">
        <el-menu-item
          :index="resolvePath(onlyOneChild.path)"
          :class="{ 'submenu-title-noDropdown': !isNest }"
        >
          <LinkItem
            :icon="onlyOneChild.meta.icon || (item.meta && item.meta.icon)"
            :title="onlyOneChild.meta.title"
          />
        </el-menu-item>
      </app-link>
    </template>

    <el-submenu
      v-else
      ref="subMenu"
      :index="resolvePath(item.path)"
      popper-append-to-body
    >
      <template #title>
        <LinkItem
          v-if="item.meta"
          :icon="item.meta && item.meta.icon"
          :title="item.meta.title"
        />
      </template>
      <MenuItem
        v-for="child in item.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        :base-path="resolvePath(child.path)"
        class="nest-menu"
      />
    </el-submenu>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue';
import { isExternal } from '@/utils/validate';
import { AppRouteRecordRaw } from '@/router/types';
import LinkItem from './LinkItem';
import AppLink from './Link.vue';

interface IOnly extends AppRouteRecordRaw {
  noShowingChildren?: boolean;
}

export default defineComponent({
  name: 'MenuItem',
  components: { LinkItem, AppLink },
  props: {
    item: {
      type: Object,
      required: true,
    },
    isNest: {
      type: Boolean,
      default: false,
    },
    basePath: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    let route: Partial<IOnly> = {};
    let onlyOneChild = computed(() => route);

    const resolvePath = (routePath) => {
      if (isExternal(routePath)) {
        return routePath;
      }
      if (isExternal(props.basePath)) {
        return props.basePath;
      }

      return getResolvePath(props.basePath, routePath);
    };

    const getResolvePath = (basePath: string, routePath: string) => {
      if (basePath === routePath) {
        return routePath;
      }

      if (!routePath) {
        return `${basePath}`;
      }

      return `${basePath}/${routePath}`;
    };

    const hasOneShowingChild = (children: AppRouteRecordRaw[] = [], parent) => {
      const showingChildren = children.filter((item) => {
        if (item.hidden) {
          return false;
        } else {
          route = item;
          return true;
        }
      });

      if (showingChildren.length === 1) {
        return true;
      }

      if (showingChildren.length === 0) {
        route = { ...parent, path: '', noShowingChildren: true };
        return true;
      }

      return false;
    };

    return {
      resolvePath,
      hasOneShowingChild,
      onlyOneChild,
    };
  },
});
</script>
