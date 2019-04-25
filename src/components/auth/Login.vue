<template>
    <div class="login">
          <header><h1>TestPlatform</h1></header>
          <div class="submit_form">
                <form>
                      <div class="name">
                          <label><i class="iconfont" style="font-size: 20px">&#xe61c;</i></label>
                          <input type="text" v-model="username" placeholder="请输入账号/邮箱" class="name_inp">
                      </div>
                      <div class="name">
                          <label><i class="iconfont" style="font-size: 20px">&#xe652;</i></label>
                          <input type="password" v-model="passwd" placeholder="请输入密码" class="name_inp">
                      </div>
                      <div class="a_link">
                          <p style="float: left;font-size: 18px"><router-link to="/register" style="font-size:18px;color: #4262aa">注册账号</router-link></p>
                          <p style="float: right;font-size: 18px"><router-link to="/register" style="font-size:18px;color: #4262aa">忘记密码</router-link></p>
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
