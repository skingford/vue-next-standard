/*
 * @Author: kingford
 * @Date: 2021-07-16 00:59:29
 * @LastEditTime: 2021-07-16 01:10:45
 */

import axios from 'axios';
import JSONbig from 'json-bigint';
import * as reqIntercept from './req-intercept.js';

let gOpts = {};
let cancelToken = axios.CancelToken;
const conf = { baseURL: '' };

const JSONbigString = JSONbig({ storeAsString: true });

let axiosNew = axios.create({
  transformResponse: [
    function (data) {
      return JSONbigString.parse(data);
    },
  ],
});

function defaultHeader() {
  return {
    // 'apiVersion': '1.0'
    // 'zhsession': getZHSessionStore()
  };
}

/**
 * 检查登录状态，如果登录超时，跳转到登录页面
 * @returns 登录超时返回 false
 */
const checkLogin = (resData) => {
  if (
    resData &&
    typeof resData === 'string' &&
    resData.indexOf('忘记密码1') > -1
  ) {
    window.location.href = '/login';
    return false;
  }
  return true;
};

/**
 * 分析后端返回的错误信息
 * @param responseHeader 后台的相应头对象
 */
const analyzeException = (responseData) => {
  if (responseData) {
    return {
      resultCode: responseData.code,
      resultMsg: responseData.code,
    };
  }
};

// 请求拦截器，每个请求发出之前需要通过此函数处理一遍
axiosNew.interceptors.request.use(
  function (config) {
    if (config.url.indexOf('http://') < 0) {
      config.baseURL = conf.baseURL;
    }
    config.cancelToken = new cancelToken((c) => {
      console.log('已添加');
      reqIntercept.add(config, c);
    });
    console.log(3232);
    config.baseURL = gOpts.baseURL;
    // 注入自定义请求头
    config.headers = Object.assign({}, config.headers, defaultHeader());
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// 响应拦截器，从服务端获取的数据，都统一处理
axiosNew.interceptors.response.use(
  function (response) {
    reqIntercept.remove(response.config); // 在一个ajax响应后再执行一下取消操作，把已经完成的请求从pending中移除
    console.log(response);
    if (response.status === 200) {
      if (!checkLogin(response.data)) {
        return;
      }
      if (response.config.method.toUpperCase() !== 'GET') {
        console.log(response, 'get');
        // 兼容企业库和圈子的数据接口
        if (response.data && response.data.statusCode === 200) {
          console.log('success');
        } else {
          if (response.data.statusCode) {
            return response;
          } else {
            let errMsg = response.data.msg || response.data.errmsg || '';
            console.log('error', errMsg);
            throw new Error(errMsg);
          }
        }
      }

      if (
        response.config.method.toUpperCase() === 'POST' &&
        response.data.statusCode
      ) {
        console.log(response, 'post');
        return response;
      }
      console.log(response, 'no');
      return response.data;
    } else {
      console.log('error');
      // return Promise.reject(analyzeException(response));
      throw new Error('系统异常，请稍后重试。。');
      // return response.data;
    }
  },

  function (error) {
    // 判断是否为登录超时。如果登录超时，跳转到登录页面
    if ('response' in error && error.response === undefined) {
      window.location.href = '/base/login';
      return;
    }
    if ('message' in error) {
      return;
    }

    console.log(error, 'error');
    throw new Error(error);
  }
);

const req = (url, params, method = 'GET', headerData = {}) => {
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
    const hasLink = (str) => {
      let res = false;
      str += '';
      arrLink.forEach((item) => {
        if (str.indexOf(item) !== -1) {
          res = true;
        }
      });
      return res;
    };
    axiosNew(config)
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
