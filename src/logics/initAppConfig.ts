/*
 * @Author: kingford
 * @Date: 2021-07-30 16:32:31
 * @LastEditTime: 2021-08-03 14:13:38
 */

import { getCommonStoragePrefix, getStorageShortName } from '@/utils/env';

export function initAppConfigStore() {
  setTimeout(() => {
    clearObsoleteStorage();
  }, 16);
}

export function clearObsoleteStorage() {
  const commonPrefix = getCommonStoragePrefix();
  const shortPrefix = getStorageShortName();

  [localStorage, sessionStorage].forEach((item: Storage) => {
    Object.keys(item).forEach((key) => {
      if (key && key.startsWith(commonPrefix) && !key.startsWith(shortPrefix)) {
        item.removeItem(key);
      }
    });
  });
}
