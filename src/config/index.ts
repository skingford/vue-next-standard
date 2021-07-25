/*
 * @Author: kingford
 * @Date: 2021-04-04 23:02:28
 * @LastEditTime: 2021-07-25 21:09:44
 */
/**
 * 环境配置封装
 */
const env = import.meta.env.MODE || 'prod';

interface IEnvConfig {
  // [key: string]: unknown;
  [key: string]: IEnvItem;
}

interface IEnvItem {
  baseApi: string;
  mockApi: string;
}

const EnvConfig: IEnvConfig = {
  dev: {
    baseApi: '/api',
    mockApi:
      'https://www.fastmock.site/mock/c1c302e8baed9894c48c17e4738c092e/api',
  },
  test: {
    baseApi: '//test.futurefe.com/api',
    mockApi:
      'https://www.fastmock.site/mock/c1c302e8baed9894c48c17e4738c092e/api',
  },
  prod: {
    baseApi: '//futurefe.com/api',
    mockApi:
      'https://www.fastmock.site/mock/c1c302e8baed9894c48c17e4738c092e/api',
  },
};

export default {
  env,
  mock: false,
  namespace: 'jin',
  ...EnvConfig[env],
};
