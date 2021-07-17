/*
 * @Author: kingford
 * @Date: 2021-07-16 00:59:29
 * @LastEditTime: 2021-07-17 13:51:34
 */

import axios, { Method } from 'axios';
import JSONbig from 'json-bigint';
import * as reqIntercept from './req-intercept';
import { isLogged, defaultHeader } from './req-valid';

let gOpts = { baseURL: '' };
const conf = { baseURL: '' };

const JSONbigString = JSONbig({ storeAsString: true });
const cancelToken = axios.CancelToken;

const service = axios.create({
  transformResponse: [(data) => JSONbigString.parse(data)],
});

// 请求拦截器，每个请求发出之前需要通过此函数处理一遍
service.interceptors.request.use(
  (config) => {
    if (config.url && config.url.indexOf('http://') < 0) {
      config.baseURL = conf.baseURL;
    }

    config.cancelToken = new cancelToken((c) => {
      console.log('cancelToken add');
      reqIntercept.add(config, c);
    });

    config.baseURL = gOpts.baseURL;

    // 注入自定义请求头
    config.headers = Object.assign({}, config.headers, defaultHeader());

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器，从服务端获取的数据，都统一处理
service.interceptors.response.use(
  (response) => {
    // 在一个ajax响应后再执行一下取消操作，把已经完成的请求从pending中移除
    reqIntercept.remove(response.config);

    if (response.status === 200) {
      // if (!isLogged(response.data)) {
      //   return;
      // }

      return response.data;
    } else {
      console.log('error');
      // return Promise.reject(analyzeException(response));
      throw new Error('系统异常，请稍后重试。。');
      // return response.data;
    }
  },

  (error) => {
    // 判断是否为登录超时。如果登录超时，跳转到登录页面
    if ('response' in error && error.response === undefined) {
      window.location.href = '/login';
      return;
    }
    if ('message' in error) {
      return;
    }

    console.log(error, 'error');
    throw new Error(error);
  }
);

const req = (url?: string, params?: any, method?: Method, headerData?: any) => {
  return new Promise((resolve, reject) => {
    let config = {
      url: url,
      method: method,
      headers: headerData,
    };

    if (method === 'POST' || method === 'PUT' || method === 'DELETE') {
      Object.assign(config, {
        data: params,
      });
    } else {
      Object.assign(config, {
        params: Object.assign({}, params, {
          t: new Date().getTime(),
        }),
      });
    }

    const arrLink = ['cms/lottery', 'cms/prize', 'cms/level'];
    const hasLink = (str?: string) => {
      let res = false;
      str += '';
      arrLink.forEach((item) => {
        if (str && str.indexOf(item) !== -1) {
          res = true;
        }
      });
      return res;
    };

    service(config)
      .then((data) => {
        console.log(data, '--------------------------------');
        if (data) {
          let resData;
          if ('errorCode' in data && hasLink(config.url)) {
            resData = data;
          } else {
            resData = data.data || data;
          }
          resolve(resData);
        } else {
          return false;
          // resolve(undefined);
        }
      })
      .catch((error) => {
        reject(new Error(error));
      });
  });
};

export default req;
