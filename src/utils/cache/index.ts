/*
 * @Author: kingford
 * @Date: 2021-07-16 01:17:32
 * @LastEditTime: 2021-08-03 11:04:34
 */
import { getStorageShortName } from '@/utils/env';
import { createStorage as create, CreateStorageParams } from './storageCache';
import {
  enableStorageEncryption,
  DEFAULT_CACHE_TIME,
} from '@/setting/encryptionSetting';

export type Options = Partial<CreateStorageParams>;

const createOptions = (storage: Storage, options: Options = {}): Options => {
  return {
    // No encryption in debug mode
    hasEncrypt: enableStorageEncryption,
    storage,
    prefixKey: getStorageShortName(),
    ...options,
  };
};

export const WebStorage = create(createOptions(sessionStorage));

export const createStorage = (
  storage: Storage = sessionStorage,
  options: Options = {}
) => {
  return create(createOptions(storage, options));
};

export const createSessionStorage = (options: Options = {}) => {
  return createStorage(sessionStorage, {
    timeout: DEFAULT_CACHE_TIME,
    ...options,
  });
};

export const createLocalStorage = (options: Options = {}) => {
  return createStorage(localStorage, {
    timeout: DEFAULT_CACHE_TIME,
    ...options,
  });
};

export default WebStorage;
