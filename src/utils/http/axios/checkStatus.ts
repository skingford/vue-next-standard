/*
 * @Author: kingford
 * @Date: 2021-07-26 09:55:23
 * @LastEditTime: 2021-07-26 10:10:18
 */

export function checkStatus(status: number, msg: string): void {
  switch (status) {
    case 400:
      msg = 'not found';
      break;

    case 401:
      break;
    case 403:
      break;
    case 404:
      break;
    case 405:
      break;
    case 408:
      break;
    case 500:
      break;
    case 501:
      break;
    case 502:
      break;
    case 503:
      break;
    case 504:
      break;
    case 505:
      break;
    default:
  }
}
