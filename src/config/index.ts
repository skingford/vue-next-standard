/*
 * @Author: kingford
 * @Date: 2021-04-04 23:02:28
 * @LastEditTime: 2021-07-06 01:24:27
 */
/**
 * 环境配置封装
 */
const env = import.meta.env.MODE || 'prod';

interface IEnvItem {
  [key: string]: unknown;
}

const EnvConfig: IEnvItem = {
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
  ...(EnvConfig[env] as IEnvItem),
};
