/*
 * @Author: kingford
 * @Date: 2021-06-17 00:15:21
 * @LastEditTime: 2021-06-27 12:38:58
 */
import { defineComponent, reactive, ref, withModifiers } from 'vue';
import logo from './assets/logo.png';

export default defineComponent({
  setup() {
    const count = ref(0);

    const inc = () => {
      count.value++;
    };

    return () => (
      <div onClick={withModifiers(inc, ['self'])}>
        {count.value}
        <img src={logo} alt="" />
        <router-view></router-view>
      </div>
    );
  },
});
