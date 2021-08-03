<!--
 * @Author: kingford
 * @Date: 2021-07-24 11:45:25
 * @LastEditTime: 2021-08-03 15:00:39
-->
<template>
  <div>
    analysis {{ user.name }}---{{ user.fullName }}
    <svg-icon name="404"></svg-icon>
    <LineEchart></LineEchart>
    <PieEchart></PieEchart>
    <BarEchart></BarEchart>
    <RadarEchart></RadarEchart>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useUserStoreWithOut } from '@/store/modules/user';
import LineEchart from './components/LineEchart.vue';
import PieEchart from './components/PieEchart.vue';
import BarEchart from './components/BarEchart.vue';
import RadarEchart from './components/RadarEchart.vue';

export default defineComponent({
  components: {
    LineEchart,
    PieEchart,
    BarEchart,
    RadarEchart,
  },
  setup() {
    const user = useUserStoreWithOut();
    return { user };
  },
});
</script>
