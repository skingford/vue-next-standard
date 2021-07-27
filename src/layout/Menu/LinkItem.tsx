/*
 * @Author: kingford
 * @Date: 2021-07-26 15:03:10
 * @LastEditTime: 2021-07-27 20:48:08
 */
import { defineComponent } from 'vue';
import './index.scss';

const renderIcon = (icon) => {
  if (icon) {
    if (icon.includes('el-icon')) {
      return <i class={[icon, 'sub-el-icon']} />;
    }
    return <svg-icon class="svg-icon" name={icon} />;
  }
};

export default defineComponent({
  name: 'LinkItem',
  props: {
    icon: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const { icon, title } = props;

    return () => (
      <div class="flex items-center">
        {renderIcon(icon)}
        <span>{title} </span>
      </div>
    );
  },
});
