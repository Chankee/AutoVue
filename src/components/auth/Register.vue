<template>
    <div class="register">
          <header><h1>TestPlatform</h1></header>
          <div class="register_form">
                <form>
                      <div class="name">
                          <label><i class="el-icon-news"></i></label>
                          <input type="text" v-model="username" placeholder="请输入账号" class="name_inp">
                      </div>
                      <div class="name">
                          <label><i class="el-icon-picture-outline"></i></label>
                          <input type="password" v-model="passwd" placeholder="请输入密码" class="name_inp">
                      </div>
                      <div class="name">
                          <label><i class="el-icon-picture-outline"></i></label>
                          <input type="password" v-model="passwd" placeholder="请输入密码" class="name_inp">
                      </div>
                      <div class="name">
                          <label><i class="el-icon-picture-outline"></i></label>
                          <input type="email" v-model="email" placeholder="邮箱" id="email" class="name_inp">
                      </div>
                      <div class="a_link">
                          <span style="font-size: 25px">已有账户，点击<router-link to="/login" style="font-size: 25px">登陆</router-link></span>
                      </div>
                      <button class="submit" >注册</button>
                </form>
          </div>
    </div>
</template>

<script>
    export default {
        name: "Register",
        data () {
          return {
            username: '',
            passwd: '',
            email:''
          }
        }
    }
</script>

<style>

    @import "../../assets/styles/auth.css"
</style>
