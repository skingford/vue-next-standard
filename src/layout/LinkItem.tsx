/*
 * @Author: kingford
 * @Date: 2021-07-26 15:03:10
 * @LastEditTime: 2021-07-26 18:03:01
 */
import { defineComponent } from 'vue';

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
    console.log('props', props.title);

    return () => (
      <div class="flex items-center">
        {icon && icon.includes('el-icon') ? (
          <i class={[icon, 'sub-el-icon']} />
        ) : (
          <svg-icon icon-class={icon} />
        )}
        <span>{title} </span>
      </div>
    );
  },
});
