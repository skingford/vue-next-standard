/*
 * @Author: kingford
 * @Date: 2021-07-16 00:34:34
 * @LastEditTime: 2021-07-16 11:00:05
 */
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return () => (
      <div class="login">
        login
        <div>
          <a-button>button</a-button>
        </div>
        <div>
          <a-button type="primary" ghost>
            Primary
          </a-button>
        </div>
      </div>
    );
  },
});
