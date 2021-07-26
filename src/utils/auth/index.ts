/*
 * @Author: kingford
 * @Date: 2021-07-26 10:28:29
 * @LastEditTime: 2021-07-26 10:28:43
 */
import { Persistent, BasicKeys } from '@/utils/cache/persistent';
import { CacheTypeEnum } from '@/enums/cacheEnum';
import projectSetting from '@/setting/projectSetting';
import { TOKEN_KEY } from '@/enums/cacheEnum';

const { permissionCacheType } = projectSetting;
const isLocal = permissionCacheType === CacheTypeEnum.LOCAL;

export function getToken() {
  return getAuthCache(TOKEN_KEY);
}

export function getAuthCache<T>(key: BasicKeys) {
  const fn = isLocal ? Persistent.getLocal : Persistent.getSession;
  return fn(key) as T;
}

export function setAuthCache(key: BasicKeys, value) {
  const fn = isLocal ? Persistent.setLocal : Persistent.setSession;
  return fn(key, value, true);
}

export function clearAuthCache(immediate = true) {
  const fn = isLocal ? Persistent.clearLocal : Persistent.clearSession;
  return fn(immediate);
}
