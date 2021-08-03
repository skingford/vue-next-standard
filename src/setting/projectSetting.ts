/*
 * @Author: kingford
 * @Date: 2021-07-26 09:57:31
 * @LastEditTime: 2021-08-03 11:58:22
 */
import { CacheTypeEnum } from '@/enums/cacheEnum';
type deviceType = 'desktop' | 'mobile';

export interface ProjectConfig {
  permissionCacheType: CacheTypeEnum;
  device: deviceType;
  isCollapse: boolean;
  withoutAnimation: boolean;
}

// ! You need to clear the browser cache after the change
const setting: ProjectConfig = {
  permissionCacheType: CacheTypeEnum.SESSION,
  device: 'desktop',
  isCollapse: false,
  withoutAnimation: false,
};

export default setting;
