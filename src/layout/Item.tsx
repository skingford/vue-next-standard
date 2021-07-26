/*
 * @Author: kingford
 * @Date: 2021-07-26 15:03:10
 * @LastEditTime: 2021-07-26 16:28:36
 */
import { defineComponent } from 'vue';

export default defineComponent({
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
    console.log(title);
    return (
      <>
        {icon && icon.includes('el-icon') ? (
          <i class={[icon, 'sub-el-icon']} />
        ) : (
          <svg-icon icon-class={icon} />
        )}
        <span>{title}</span>
      </>
    );
  },
});
