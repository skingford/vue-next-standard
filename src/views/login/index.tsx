/*
 * @Author: kingford
 * @Date: 2021-07-16 00:34:34
 * @LastEditTime: 2021-07-17 01:20:25
 */
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return () => (
      <div class="login">
        login
        <div>
          <el-button>button</el-button>
        </div>
        <div>
          <el-button type="primary" ghost>
            Primary
          </el-button>
        </div>
      </div>
    );
  },
});
