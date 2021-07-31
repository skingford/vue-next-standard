<!--
 * @Author: kingford
 * @Date: 2021-07-16 08:50:08
 * @LastEditTime: 2021-07-31 16:14:36
-->

<template>
  <div class="flex h-full overflow-hidden">
    <Menu></Menu>
    <div class="flex flex-col flex-1">
      <Navbar></Navbar>
      <main class="flex-1">
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
import Menu from './Menu/index.vue';
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
