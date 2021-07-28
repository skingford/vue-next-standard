<!--
 * @Author: kingford
 * @Date: 2021-07-24 21:00:50
 * @LastEditTime: 2021-07-28 17:44:42
-->
<template>
  <div class="login">
    <div class="container au">
      <div>login</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.login {
  min-height: 100%;
  overflow: hidden;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin-left: -48%;
    background-image: url(/src/assets/login-bg.svg);
    background-position: 100%;
    background-repeat: no-repeat;
    background-size: auto 100%;
  }
}
</style>
