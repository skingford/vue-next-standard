<!--
 * @Author: kingford
 * @Date: 2021-07-29 11:05:14
 * @LastEditTime: 2021-08-16 15:16:47
-->
<template>
  <svg
    :class="['svg-icon', $attrs.class, spin && 'svg-icon-spin']"
    :style="getStyle"
    aria-hidden="true"
  >
    <use :xlink:href="symbolId" />
  </svg>
</template>
<script lang="ts">
import type { CSSProperties } from 'vue';
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'SvgIcon',
  props: {
    prefix: {
      type: String,
      default: 'icon',
    },
    name: {
      type: String,
      required: true,
    },
    size: {
      type: [Number, String],
      default: 16,
    },
    spin: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const symbolId = computed(() => `#${props.prefix}-${props.name}`);

    const getStyle = computed((): CSSProperties => {
      const { size } = props;
      let s = `${size}`;
      s = `${s.replace('px', '')}px`;
      return {
        width: s,
        height: s,
      };
    });
    return { symbolId, getStyle };
  },
});
</script>
<style lang="scss" scoped>
.svg-icon-spin {
  animation: loadingCircle 1s infinite linear;
}

.svg-icon {
  fill: currentColor;
}
</style>
