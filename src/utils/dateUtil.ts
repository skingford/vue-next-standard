/*
 * @Author: kingford
 * @Date: 2021-07-26 10:17:39
 * @LastEditTime: 2021-07-26 10:22:24
 */
/**
 * Independent time operation tool to facilitate subsequent switch to dayjs
 */
import dayjs from 'dayjs';

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm';
const DATE_FORMAT = 'YYYY-MM-DD ';

export function formatToDateTime(date, format = DATE_TIME_FORMAT): string {
  return dayjs(date).format(format);
}

export function formatToDate(date, format = DATE_FORMAT): string {
  return dayjs(date).format(format);
}

export const dateUtil = dayjs;
