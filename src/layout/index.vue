<!--
 * @Author: kingford
 * @Date: 2021-07-16 08:50:08
 * @LastEditTime: 2021-08-04 09:07:13
-->

<template>
  <div class="layout">
    <Menu></Menu>
    <div class="layout-container">
      <Navbar></Navbar>
      <main class="layout-main">
        <AppMain></AppMain>
      </main>
      <Footer></Footer>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Footer from './Footer.vue';
import Navbar from './Navbar.vue';
import AppMain from './AppMain.vue';
import Menu from './menu/index.vue';
import ResizeHandler from './mixin/ResizeHandler';

export default defineComponent({
  components: {
    Navbar,
    Footer,
    Menu,
    AppMain,
  },
  mixins: [ResizeHandler],
  setup() {},
});
</script>
