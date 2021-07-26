<!--
 * @Author: kingford
 * @Date: 2021-07-26 11:50:00
 * @LastEditTime: 2021-07-26 16:49:20
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
      234234

      <app-link v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)">
        <el-menu-item
          :index="resolvePath(onlyOneChild.path)"
          :class="{ 'submenu-title-noDropdown': !isNest }"
        >
          <item
            :icon="onlyOneChild.meta.icon || (item.meta && item.meta.icon)"
            :title="onlyOneChild.meta.title"
          />
          {{ onlyOneChild.meta.title }}
        </el-menu-item>
      </app-link>
    </template>

    <el-submenu
      v-else
      ref="subMenu"
      :index="resolvePath(item.path)"
      popper-append-to-body
    >
      <!-- <template slot="title">
        <item
          v-if="item.meta"
          :icon="item.meta && item.meta.icon"
          :title="item.meta.title"
        />
      </template> -->23234
      {{ item.meta.title }}
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
import { defineComponent, reactive } from 'vue';
import { isExternal } from '@/utils/validate';
import { AppRouteRecordRaw } from '@/router/types';
import Item from './Item';
import AppLink from './Link.vue';

interface IOnly extends AppRouteRecordRaw {
  noShowingChildren: boolean;
}

export default defineComponent({
  name: 'MenuItem',
  components: { Item, AppLink },
  props: {
    // route object
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
    let onlyOneChild: Partial<IOnly> = reactive({});

    const resolvePath = (routePath) => {
      if (isExternal(routePath)) {
        return routePath;
      }
      if (isExternal(props.basePath)) {
        return props.basePath;
      }
      // return path.resolve(props.basePath, routePath);
      return routePath;
    };

    const hasOneShowingChild = (children: AppRouteRecordRaw[] = [], parent) => {
      const showingChildren = children.filter((item) => {
        if (item.hidden) {
          return false;
        } else {
          onlyOneChild = item;
          return true;
        }
      });

      if (showingChildren.length === 1) {
        return true;
      }

      if (showingChildren.length === 0) {
        onlyOneChild = { ...parent, path: '', noShowingChildren: true };
        return true;
      }

      console.log(onlyOneChild);

      return false;
    };

    return { resolvePath, hasOneShowingChild, onlyOneChild };
  },
});
</script>
