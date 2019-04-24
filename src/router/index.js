import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/auth/Login'
import Register from '@/components/auth/Register'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta:{
          title:"用户登录"
      }
    }, {
      path: '/register',
      name: 'Register',
      component: Register,
      meta:{
          title:"用户注册"
      }
    }
  ]
})
