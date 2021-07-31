/*
 * @Author: kingford
 * @Date: 2021-07-31 13:40:05
 * @LastEditTime: 2021-07-31 14:50:12
 */

import { useAppStoreWithOut } from '../../store/modules/app';
const { body } = document;
const WIDTH = 992; // refer to Bootstrap's responsive design

const store = useAppStoreWithOut();

export default {
  beforeMount() {
    window.addEventListener('resize', this.$_resizeHandler);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.$_resizeHandler);
  },
  mounted() {
    const isMobile = this.$_isMobile();
    if (isMobile) {
      store.setProjectConfig({ device: 'mobile', isCollapse: true });
    }
  },
  methods: {
    $_isMobile() {
      const rect = body.getBoundingClientRect();
      return rect.width - 1 < WIDTH;
    },
    $_resizeHandler() {
      if (!document.hidden) {
        const isMobile = this.$_isMobile();
        store.setProjectConfig({
          device: isMobile ? 'mobile' : 'desktop',
          isCollapse: isMobile,
        });
      }
    },
  },
};
