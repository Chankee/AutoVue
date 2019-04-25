<template>
    <div class="login">
          <header><h1>TestPlatform</h1></header>
          <div class="login_form">
                <form>
                      <div class="name">
                          <label><i class="el-icon-news"></i></label>
                          <input type="text" v-model="username" placeholder="请输入账号" class="name_inp">
                      </div>
                      <div class="name">
                          <label><i class="el-icon-picture-outline"></i></label>
                          <input type="password" v-model="passwd" placeholder="请输入密码" class="name_inp">
                      </div>
                      <div class="a_link">
                          <a style="float: left;font-size: 18px" >注册账号</a>
                          <a style="float: right;font-size: 18px" >忘记密码</a>
                      </div>
                      <button class="submit" >登录</button>
                </form>
          </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data () {
          return {
            username: '',
            passwd: ''
          }
        }
    }
</script>

<style >
    @import "../../assets/styles/auth.css"
</style>
