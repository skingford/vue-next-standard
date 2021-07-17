/*
 * @Author: kingford
 * @Date: 2021-07-17 11:07:12
 * @LastEditTime: 2021-07-17 11:25:23
 */

type loggedType = (token: string) => boolean;
type headerType = () => IHeader;

interface IHeader {
  [key: string]: any;
}

interface IException {
  code: number;
  msg: string;
}

/**
 * 检查登录状态，如果登录超时，跳转到登录页面
 * @param token
 * @returns
 */
export const isLogged: loggedType = (token: string) => {
  if (!token) {
    window.location.href = '/login';
    return false;
  }
  return true;
};

/**
 * 默认请求头部
 */
export const defaultHeader: headerType = () => {
  return {
    // 'apiVersion': '1.0'
    // 'zhsession': getZHSessionStore()
  };
};

/**
 * 业务异常
 */
export const analyzeException = ({ code, msg }: IException) => {
  return {
    resultCode: code,
    resultMsg: msg,
  };
};
