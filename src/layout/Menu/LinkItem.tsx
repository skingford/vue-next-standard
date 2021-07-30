/*
 * @Author: kingford
 * @Date: 2021-07-26 15:03:10
 * @LastEditTime: 2021-07-30 17:59:26
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
      <div class="flex items-center link-item">
        {renderIcon(icon)}
        <span class="link-item-title">{title} </span>
      </div>
    );
  },
});
