<!--
 * @Author: kingford
 * @Date: 2021-06-27 11:18:12
 * @LastEditTime: 2021-07-29 15:12:23
-->
<template>
  <h3>姓名:{{ user.name }}</h3>
  <h3>年龄:{{ user.age }}</h3>
  <h3>wife:{{ user.wife }}</h3>
  <button @click="updateUser">更新</button>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  setup() {
    const user = reactive({
      name: 'hzw',
      age: 18,
      wife: {
        name: 'xioaohong',
        age: 18,
        books: ['红宝书', '设计模式', '算法与数据结构'],
      },
    });
    const updateUser = () => {
      user.name = '小红';
      user.age += 2;
      user.wife.books[0] = '金瓶梅';
    };
    return {
      user,
      updateUser,
    };
  },
});
</script>
