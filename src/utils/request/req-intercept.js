/*
 * @Author: kingford
 * @Date: 2021-07-16 01:02:12
 * @LastEditTime: 2021-07-16 01:04:19
 */

let requestList = []; // api请求记录

/**
 * 将当前请求进行去重
 * @param {object} req 当前请求
 * @param {array} requestList api请求记录
 * @param {string} key 比对的信息key值
 * @param {number} num 比对的个数
 */
class repetition {
  constructor({ req, requestList, key, num }) {
    this.requestList = requestList;
    this.req = req;
    this.requestList.push(req);
    this.key = key;
    this.num = num || 1;
    this.cancelList = [];
  }
  cancelReq() {
    let count = 0;
    for (let i = 0; i < this.requestList.length; i++) {
      console.log(this.req[this.key], this.requestList[i][this.key]);
      if (this.req[this.key] === this.requestList[i][this.key]) {
        if (count > 0) {
          this.requestList[i].funcCancel();
          console.log('请求被释放');
          this.cancelList.push(i);
        }
        count++;
      }
    }

    for (let j = 0; j < this.cancelList.length; j++) {
      this.requestList.splice(this.cancelList[j], 1);
    }
    this.cancelList = [];
    return count;
  }
}

/**
 * 将当前请求记录到缓存中
 * @param {any} config 请求的内容
 * @param {function} funcCancel 取消请求函数
 */
export const add = (config, funcCancel) => {
  if (!config) {
    return false;
  }

  let obj = {
    req: genReq(config),
    funcCancel,
  };
  let repetit = new repetition({
    req: obj,
    requestList,
    key: 'req',
  });
  repetit.cancelReq();
};

/**
 * 将请求完成的对象从缓存中移除
 * @param {any} config 请求对象
 */
export const remove = (config) => {
  if (!config) {
    return false;
  }
  let req = genReq(config);
  for (let index = 0, len = requestList.length; index < len; index++) {
    if (req === requestList[index].req) {
      console.log('-- removed---');
      requestList.splice(index, 1); // 把这条记录从数组中移除
      break;
    }
  }
};

// 当前请求的api是否已有记录
export const has = (config) => {
  if (!config) {
    return false;
  }
  let req = genReq(config);
  for (let index = 0, len = requestList.length; index < len; index++) {
    if (req === requestList[index].req) {
      return true;
    }
  }
  return false;
};

/**
 * 生成请求记录对象，方面对比
 * @param {object} config 请求对象
 */
const genReq = (config) => {
  if (!config) {
    return '';
  }
  let arrayReq = [];
  arrayReq.push(`url:${config.url},`);
  arrayReq.push(`method:${config.method},`);
  arrayReq.push(`params:${json2Form(config.params)},`);
  arrayReq.push(`header:${json2Form(config.header)}`);
  return arrayReq.join('');
};

const json2Form = (json) => {
  var str = [];
  for (var key in json) {
    if (key !== 't') {
      str.push(encodeURIComponent(key) + '=' + encodeURIComponent(json[key]));
    }
  }
  return str.join('&');
};
