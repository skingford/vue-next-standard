/*
 * @Author: kingford
 * @Date: 2021-07-26 09:57:31
 * @LastEditTime: 2021-07-31 14:31:00
 */

type deviceType = 'desktop' | 'mobile';

export interface ProjectConfig {
  device: deviceType;
  isCollapse: boolean;
  withoutAnimation: boolean;
}

// ! You need to clear the browser cache after the change
const setting: ProjectConfig = {
  device: 'desktop',
  isCollapse: false,
  withoutAnimation: false,
};

export default setting;
