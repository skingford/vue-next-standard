<!--
 * @Author: kingford
 * @Date: 2021-07-24 21:00:50
 * @LastEditTime: 2021-08-04 15:14:33
-->
<template>
  <div class="login">
    <div> </div>
    <div class="login-container">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleRef"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="pass">
          <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const ruleForm = ref({ username: '', password: '' });
    const ruleRef = ref(null);

    const validateUsername = (value) => {
      console.log(value);
    };

    const validatePass = (_, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        console.log(ruleRef.value);
        callback();
      }
    };

    const rules = {
      username: [{ validator: validateUsername, trigger: 'blur' }],
      password: [{ validator: validatePass, trigger: 'blur' }],
    };

    const submitForm = (formName) => {
      console.log(formName);
    };

    return {
      ruleRef,
      rules,
      ruleForm,
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
    padding: 20px;
    overflow: hidden;
    border-radius: 6px;
    -webkit-box-shadow: 0 4px 14px 0 rgb(206 207 209 / 28%);
    box-shadow: 0 4px 14px 0 rgb(206 207 209 / 28%);
  }
}
</style>
