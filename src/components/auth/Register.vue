<template>
    <div class="login">
        <header><h1>TestPlatform --Register</h1></header>
        <div class="submit_form">
            <form id="re">
                  <div class="name">
                       <label><i class="iconfont" style="font-size: 20px">&#xe61c;</i></label>
                       <input type="text" v-model="registerForm.username" placeholder="请输入账号" class="name_inp">
                  </div>
                  <div class="name">
                       <label><i class="iconfont" style="font-size: 20px">&#xe668;</i></label>
                       <input type="text" v-model="registerForm.mail" placeholder="请输入邮箱" class="name_inp">
                  </div>
                  <div class="name">
                       <label><i class="iconfont" style="font-size: 20px">&#xe652;</i></label>
                       <input type="password" v-model="registerForm.password" placeholder="请输入密码" class="name_inp">
                  </div>
                  <div class="name">
                       <label><i class="iconfont" style="font-size: 20px">&#xe652;</i></label>
                       <input type="password" v-model="registerForm.confirmPwd" placeholder="请确认密码" class="name_inp">
                  </div>

                  <button class="submit" @click="submitForm" >注册</button>
                  <p style="font-size: medium;margin-top: 10px;text-align: center">已有账户，请点击 <router-link to="/login" style="font-size:18px;color: #4262aa">登录</router-link></p>

            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Register",
        data () {
            return {
                registerForm:{
                    username: '',
                    password: '',
                    email: '',
                    confirmPwd:''
                }
            }
        },
        methods:{
            submitForm(formName) {
                alert(123)
            }
        }
    }
</script>

<style>
    @import "../../assets/styles/auth.css"
</style>
