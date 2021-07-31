<!--
 * @Author: kingford
 * @Date: 2021-07-16 08:50:08
 * @LastEditTime: 2021-07-31 14:23:32
-->

<template>
  <nav class="h-12 nav">
    <el-button
      class="btn-toggle"
      @click="toggle"
      type="text"
      :icon="isOpen ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
    >
    </el-button>
    <div class="right-menu">
      <el-dropdown
        class="avatar-container right-menu-item hover-effect"
        trigger="click"
      >
        <div class="avatar-wrapper">
          <img
            src="https://thirdwx.qlogo.cn/mmopen/vi_32/thVIIqibEU379S88UGzA5rqh1rxiawVUiaJfx7icCvjBAXiclWMh4ptNqwDnmlNhxWTUZpWZIqHsaiaiaEZ5TP2nicicL6w/132"
            class="user-avatar"
          />
          <i class="el-icon-caret-bottom" />
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <router-link to="/profile/">
              <el-dropdown-item> 个人中心 </el-dropdown-item>
            </router-link>
            <a
              target="_blank"
              href="https://github.com/skingford/vue3-template/"
            >
              <el-dropdown-item> github </el-dropdown-item>
            </a>
            <el-dropdown-item> 退出登录 </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useAppStoreWithOut } from '@/store/modules/app';

export default defineComponent({
  setup() {
    const isOpen = ref(false);
    const store = useAppStoreWithOut();
    const toggle = () => {
      isOpen.value = !isOpen.value;
      store.setProjectConfig({ isCollapse: isOpen.value });
    };

    return {
      isOpen,
      toggle,
    };
  },
});
</script>

<style lang="scss" scoped>
.nav {
  overflow: hidden;
  position: relative;
  background: #ffffff;
  box-shadow: 0 1px 4px $color-shadow;

  .btn-toggle {
    font-size: 30px;
    color: #333333;
  }
  .right-menu {
    float: right;
    height: 100%;
    line-height: 48px;

    /* stylelint-disable */
    :deep() {
      .right-menu-item {
        display: inline-block;
        padding: 0 8px;
        height: 100%;
        font-size: 18px;
        color: #5a5e66;
        vertical-align: text-bottom;

        &.hover-effect {
          cursor: pointer;
          transition: background 0.3s;

          &:hover {
            background: rgba(0, 0, 0, 0.025);
          }
        }
      }
      .avatar-container {
        margin-right: 30px;
        .avatar-wrapper {
          margin-top: 5px;
          position: relative;

          .user-avatar {
            cursor: pointer;
            width: 40px;
            height: 40px;
            border-radius: 10px;
          }

          .el-icon-caret-bottom {
            cursor: pointer;
            position: absolute;
            right: -20px;
            top: 25px;
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>
