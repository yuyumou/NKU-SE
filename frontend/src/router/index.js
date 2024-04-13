import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/MainPage.vue'
import Test from '@/components/Login.vue'
import Register from '@/components/Register.vue'
import Admin from '@/components/admin/Admin.vue'
import Home from '@/components/user/Home.vue'
import UserHome from '@/components/user/UserHome.vue'

Vue.use(Router)

const routes = {
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
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'admin',
          component: Admin
        },
        {
          path: 'userhome',
          component: UserHome
        }
      ]
    }
  ]
}

const router = new Router(routes)

router.beforeEach((to, from, next) => {
  if (to.path === '/' || to.path === '/login' || to.path === '/register') {
    next()
  } else {
    // 从本地存储里获取token
    let token = localStorage.getItem('token')
    // 判断token是否为空如果为空则跳转到登录页 如果有则放行
    if (token === null || token === '') {
      next({path: '/login'})
    } else {
      next()
    }
  }
})

export default router
