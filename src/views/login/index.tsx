/*
 * @Author: kingford
 * @Date: 2021-07-16 00:34:34
 * @LastEditTime: 2021-07-22 08:52:48
 */
import { defineComponent, onMounted, getCurrentInstance } from 'vue';
import { getList } from '../../api/demo';

export default defineComponent({
  setup(props, context) {
    const instance = getCurrentInstance();
    const $this = instance?.appContext.config.globalProperties;
    console.log(props, context);
    console.log('context:', instance?.appContext.config.globalProperties);

    const getListData = () => {
      getList().then((data: any) => {
        console.log(data);
        $this?.$message.success('获取数据成功');
      });
    };

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
