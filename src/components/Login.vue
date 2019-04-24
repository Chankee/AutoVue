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
    *{
      font-family: "微软雅黑" ;
      font-size: 35px;

    }

    html,body{
      margin: 0px;
      background:url("../assets/backgroud.jpg") no-repeat center;
      background-size: 100%;
      overflow:hidden;
    }
    .login{
      width: 450px;
      height: 380px;
      position: relative;
      background: rgba(255,255,255,0.3);
      margin: 14% auto;
      -webkit-border-radius: 15px;
    }
    header{
      height: 45px;
      border-bottom: 1px solid rgba(255,255,255,0.3);
    }
    header>h1{
      font-size: 35px;
      text-align: center;
      margin: 5px 0;
    }
    .login_form{

      padding:50px 50px;

    }
    .name{
        position:relative;
        margin-bottom:20px;
        clear:both;
        border:1px solid rgba(255,255,255,0);
        width: 100%;
        height: 40px;
        border-radius: 20px;
      }

    .name label{
        position: absolute;
        top: 6px;
        left: 5px;
        color: rgb(108, 123, 159);
        border-right: 1px solid rgba(255,255,255,0.3) ;
    }

    .name_inp{

        padding-left: 45px;
        height: 38px;
        background: rgba(255,255,255,0.3) ;
        border: none;
        width:88%;
        outline:none;
        font-size: 20px;
        border-radius: 20px;
    }
    .a_link{
        font-size: 20px;
    }

    .submit{
        width:100%;
        height:40px;
        background: rgba(255,255,255,0.3);
        display:block;
        margin:80px auto;
        font-size: 20px;
        border-radius: 20px;

    }
</style>
