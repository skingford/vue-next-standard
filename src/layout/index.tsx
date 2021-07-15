/*
 * @Author: kingford
 * @Date: 2021-07-16 00:36:59
 * @LastEditTime: 2021-07-16 00:39:57
 */
import { defineComponent } from 'vue';
import Header from './Header';
import Footer from './Footer';

export default defineComponent({
  setup() {
    return () => (
      <div>
        <Header></Header>
        <router-view></router-view>
        <Footer></Footer>
      </div>
    );
  },
});
