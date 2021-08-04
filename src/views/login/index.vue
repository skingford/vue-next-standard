<!--
 * @Author: kingford
 * @Date: 2021-07-24 21:00:50
 * @LastEditTime: 2021-08-04 16:54:52
-->
<template>
  <div class="login">
    <div> </div>
    <div class="login-container">
      <div class="switch-login-mode-wrapper">
        <div class="switch-logo-box"></div>
      </div>
      <div class="login-title"> 登录系统 </div>
      <el-form :model="loginFormModel" :rules="rules" ref="loginFormRef" label-width="60px">
        <el-form-item class="input-item" label="账号" prop="username" :isRequired="false">
          <el-input type="text" v-model="loginFormModel.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item class="input-item" label="密码" prop="password" :required="false">
          <el-input type="password" v-model="loginFormModel.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            class="w-full h-10"
            type="primary"
            @click="submitForm('loginFormModel')"
            :loading="isLoading"
          >
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';
export default defineComponent({
  setup() {
    const loginFormModel = reactive({ username: '', password: '' });
    const loginFormRef = ref();
    const isLoading = ref(false);

    const rules = {
      username: [{ required: true, message: '请输入账号', trigger: 'change' }],
      password: [{ required: true, message: '请输入密码', trigger: 'change' }],
    };

    const submitForm = (formName) => {
      loginFormRef.value?.validate((valid) => {
        console.log(valid, formName);
      });
    };

    return {
      loginFormRef,
      rules,
      isLoading,
      loginFormModel,
      submitForm,
    };
  },
});
</script>
<style lang="scss" scoped>
.login {
  min-height: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;

  &-title {
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    margin: 20px;
  }

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

  &-container {
    position: relative;
    height: 550px;
    width: 400px;
    padding: 32px 22px;
    overflow: hidden;
    border-radius: 6px;
    -webkit-box-shadow: 0 4px 14px 0 rgb(206 207 209 / 28%);
    box-shadow: 0 4px 14px 0 rgb(206 207 209 / 28%);

    .switch-login-mode-wrapper {
      position: absolute;
      bottom: 0;
      right: 0;
      z-index: 2;
      font-size: 14px;

      .switch-logo-box {
        position: absolute;
        width: 100px;
        height: 100px;
        -webkit-transform: translate(-50px, -50px) rotate(45deg);
        transform: translate(-50px, -50px) rotate(45deg);
        cursor: pointer;
        background-color: #82a7fc;
        -webkit-transition: background-color 0.3s;
        transition: background-color 0.3s;
        overflow: hidden;
      }
    }

    ::v-deep() {
      .input-item {
        margin-bottom: 30px;

        .el-input__inner {
          height: 38px;
        }

        .el-form-item__label {
          &::before {
            all: unset;
          }
        }
      }
    }
  }
}
</style>
