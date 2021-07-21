/*
 * @Author: kingford
 * @Date: 2021-07-16 00:34:34
 * @LastEditTime: 2021-07-21 15:33:56
 */
import { defineComponent, onMounted } from 'vue';
import { getList } from '../../api/demo';

export default defineComponent({
  setup() {
    const getListData = () => {
      getList().then((data: any) => {
        console.log(data);
      });
    };

    onMounted(() => {
      getListData();
    });

    return () => (
      <div class="login bg-purple-50 font-mono">
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
