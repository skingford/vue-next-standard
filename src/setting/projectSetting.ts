/*
 * @Author: kingford
 * @Date: 2021-07-26 09:57:31
 * @LastEditTime: 2021-07-30 17:21:05
 */

interface MenuSetting {
  isCollapse: boolean;
}

export interface ProjectConfig {
  menuSetting: MenuSetting;
}

// ! You need to clear the browser cache after the change
const setting: ProjectConfig = {
  menuSetting: {
    isCollapse: false,
  },
};

export default setting;
