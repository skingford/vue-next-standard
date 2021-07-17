/*
 * @Author: kingford
 * @Date: 2021-07-17 01:39:36
 * @LastEditTime: 2021-07-17 12:27:15
 */
import request from '../utils/request';

export function getList(params: any = {}) {
  return request(
    'http://bcore.top/api/pubmed/fatty-liver?pageSize=10&pageIndex=1',
    params,
    'GET'
  );
}
