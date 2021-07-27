<!--
 * @Author: kingford
 * @Date: 2021-07-26 16:16:21
 * @LastEditTime: 2021-07-27 20:30:21
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
    const isExternal = computed(() => external(props.to));

    const type = computed(() => {
      if (isExternal.value) {
        return 'a';
      }
      return 'router-link';
    });

    const linkProps = (to: string) => {
      if (isExternal.value) {
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
