/*
 * @Author: kingford
 * @Date: 2021-08-03 14:46:54
 * @LastEditTime: 2021-08-03 14:47:04
 */
import { PropType } from 'vue';

export interface BasicProps {
  width: string;
  height: string;
}
export const basicProps = {
  width: {
    type: String as PropType<string>,
    default: '100%',
  },
  height: {
    type: String as PropType<string>,
    default: '280px',
  },
};
