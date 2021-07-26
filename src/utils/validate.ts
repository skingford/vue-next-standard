/*
 * @Author: kingford
 * @Date: 2021-07-26 11:53:07
 * @LastEditTime: 2021-07-26 11:53:18
 */

export const isExternal = (path: string) =>
  /^(https?:|mailto:|tel:)/.test(path);
