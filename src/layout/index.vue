<!--
 * @Author: kingford
 * @Date: 2021-07-16 08:50:08
 * @LastEditTime: 2021-07-23 17:49:07
-->

<template>
  <div class="flex h-full overflow-hidden">
    <Menu></Menu>
    <div class="flex flex-col flex-1">
      <Header></Header>
      <main class="flex-1">
        <router-view></router-view>
      </main>
      <Footer></Footer>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Footer from './Footer.vue';
import Header from './Navbar.vue';
import Menu from './Menu.vue';

export default defineComponent({
  components: {
    Header,
    Footer,
    Menu,
  },
  setup() {},
});
</script>
