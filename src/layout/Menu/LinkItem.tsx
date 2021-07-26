/*
 * @Author: kingford
 * @Date: 2021-07-26 15:03:10
 * @LastEditTime: 2021-07-26 19:23:27
 */
import { defineComponent } from 'vue';

const renderIcon = (icon) => {
  if (icon) {
    if (icon.includes('el-icon')) {
      return <i class={[icon, 'sub-el-icon']} />;
    }
    return <svg-icon icon-class={icon} />;
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
