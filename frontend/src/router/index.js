import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/MainPage.vue'
import Test from '@/components/Login.vue'
import Register from '@/components/Register.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/login',
      name: 'Login',
      component: Test
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
