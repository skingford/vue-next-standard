<!--
 * @Author: kingford
 * @Date: 2021-07-26 16:16:21
 * @LastEditTime: 2021-07-26 19:49:12
-->
<template>
  <component :is="type" v-bind="linkProps(to)">
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { isExternal as external } from '@/utils/validate';

export default defineComponent({
  props: {
    to: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const externalComputed = computed(() => external(props.to));
    const isExternal = externalComputed.value;

    const typeComputed = computed(() => {
      if (isExternal) {
        return 'a';
      }
      return 'router-link';
    });
    const type = typeComputed.value;

    const linkProps = (to: string) => {
      if (isExternal) {
        return {
          href: to,
          target: '_blank',
          rel: 'noopener',
        };
      }
      return {
        to: to,
      };
    };

    return { isExternal, type, linkProps };
  },
});
</script>
