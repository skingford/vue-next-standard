/*
 * @Author: kingford
 * @Date: 2021-07-27 10:34:53
 * @LastEditTime: 2021-07-27 10:35:46
 */
const title = 'Vue3-Admin-template';

export function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`;
  }
  return `${title}`;
}
