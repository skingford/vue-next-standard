/*
 * @Author: kingford
 * @Date: 2021-07-16 00:34:34
 * @LastEditTime: 2021-07-17 01:57:14
 */
import { defineComponent } from 'vue';
import { getList } from '../../api/demo';

export default defineComponent({
  setup() {
    const getListData = () => {
      getList().then((data: any) => {
        console.log(data);
      });
    };

    return () => (
      <div class="login">
        login
        <div>
          <el-button onClick={() => getListData()}>button</el-button>
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
