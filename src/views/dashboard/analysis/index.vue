<!--
 * @Author: kingford
 * @Date: 2021-07-24 11:45:25
 * @LastEditTime: 2021-08-03 19:07:28
-->
<template>
  <div class="font-mono">
    analysis {{ user.name }}---{{ user.fullName }}
    <svg-icon name="404"></svg-icon>
    <LineEchart></LineEchart>
    <PieEchart></PieEchart>
    <BarEchart></BarEchart>
    <RadarEchart></RadarEchart>
    <SourceEchart></SourceEchart>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useUserStoreWithOut } from '@/store/modules/user';
import LineEchart from './components/LineEchart.vue';
import PieEchart from './components/PieEchart.vue';
import BarEchart from './components/BarEchart.vue';
import RadarEchart from './components/RadarEchart.vue';
import SourceEchart from './components/SourceEchart.vue';

export default defineComponent({
  components: {
    LineEchart,
    PieEchart,
    BarEchart,
    RadarEchart,
    SourceEchart,
  },
  setup() {
    const user = useUserStoreWithOut();
    return { user };
  },
});
</script>
