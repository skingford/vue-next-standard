/*
 * @Author: kingford
 * @Date: 2021-06-17 00:15:21
 * @LastEditTime: 2021-07-22 09:19:19
 */
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return () => (
      <div>
        <router-view></router-view>
      </div>
    );
  },
});
