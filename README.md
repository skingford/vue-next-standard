<!--
 * @Author: kingford
 * @Date: 2021-07-16 08:50:08
 * @LastEditTime: 2021-08-03 19:03:20
-->

# vue3-template

## 推荐阅读

- [vue-rfcs](https://github.com/vuejs/rfcs)

- [typescript](https://www.typescriptlang.org/docs/handbook/2/basic-types.html)

- [深入理解 TypeScript](https://jkchao.github.io/typescript-book-chinese/project/compilationContext.html#typescript-%E7%BC%96%E8%AF%91)

- [vite](https://cn.vitejs.dev/config/#define)

## 核心技术

- vue3

- vue-router

- typescript

## 第三方库

- [element-plus](https://element-plus.gitee.io/#/zh-CN/component/button)

- [windicss](https://windicss.org/integrations/vite.html)
- [tailwindcss](https://tailwindcss.com/docs/theme)

- [dayjs](https://dayjs.gitee.io/docs/zh-CN/display/format)

- [pinia](https://pinia.esm.dev/core-concepts/#using-the-store)

## 工具

- [git](https://git-scm.com/book/zh/v2/Git-%E5%9F%BA%E7%A1%80-%E6%89%93%E6%A0%87%E7%AD%BE)

- [yarn](https://yarnpkg.com/getting-started/usage)

## 缓存

- Persistent
- storageCache

```ts
import { createSessionStorage, createLocalStorage } from '@/utils/cache';
const storage = (isLocal ? createLocalStorage : createSessionStorage)();
const CACHE_TIME = 60 * 60 * 24;

// 设置
storage.set('x-test-user', {
  username: 'kingford',
  password: '123456',
  age: 18,
  CACHE_TIME,
});

// 获取
storage.get('x-test-user');

// 删除
storage.remove('x-test-user');

// 清空所有
storage.clear();
```

> PS: 在获取缓存时判断缓存是否过期

```ts
import { Memory } from '@/utils/cache/memory';
```

## typescript

- Recordable

## 注意

1. 推荐使用 yarn 安装
2. 定义全局组件，name 为必需

## 问题归档

1. Error: esbuild: Failed to install correctly

```bash
node node_modules/esbuild/install.js
```

2.别名引入声明文件

3.:deep 类型检测
