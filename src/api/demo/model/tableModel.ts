/*
 * @Author: kingford
 * @Date: 2021-07-28 08:44:01
 * @LastEditTime: 2021-07-28 08:54:29
 */
import { BasicPageParams, BasicFetchResult } from '@/api/model/baseModel';

export type DemoParams = BasicPageParams;

export interface DemoListItem {
  id: string;
  beginTime: string;
  endTime: string;
  address: string;
  name: string;
  no: number;
  status: number;
}

export type DemoListGetResultModel = BasicFetchResult<DemoListItem>;
