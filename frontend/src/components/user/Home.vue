<template>
  <div class="guide">

    <h1>{{ msg }}</h1>
    <div v-if="!isLoggedIn" class="auth-buttons">
      <el-button type="primary" @click="redirectTo('login')">登录</el-button>
      <el-button type="success" @click="redirectTo('register')">注册</el-button>
    </div>

    <div v-if="isLoggedIn" class="logged-in">
      <el-button type="danger" @click.prevent="LogoutHandler">注销</el-button>
    </div>

    <el-menu
      mode="horizontal"
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      v-if="isLoggedIn"
     >
        <el-menu-item @click.native="redirectTo('main-data')">主要数据</el-menu-item>
        <el-menu-item @click.native="redirectTo('underwater-system')">水下系统</el-menu-item>
        <el-menu-item @click.native="redirectTo('data-center')">数据中心</el-menu-item>
        <el-menu-item @click.native="redirectTo('intelligence-center')">智能中心</el-menu-item>
        <el-menu-item v-if="isAdmin" @click.native="redirectTo('/home/admin')" type="warning">管理员管理界面</el-menu-item>

    </el-menu>
    <div v-else>
      <p>请登录以访问系统</p>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Main',
  data () {
    return {
      msg: '',
      isLoggedIn: false,
      isAdmin: false
    }
  },
  created () {
    axios.get('http://localhost:3000/', {
      headers: { Authorization: localStorage.getItem('token') }
    }).then(res => {
      if (res.data.status === 223) {
        this.msg = '没有登录'
        this.isLoggedIn = false
      } else {
        this.msg = '已经登录'
        this.isLoggedIn = true
        // TODO : 假设isAdmin从后端返回
        axios.get('http://localhost:3000/token').then(ret => {
          this.isAdmin = ret.data.level
        })
      }
    }).catch(error => console.error(error))
  },
  methods: {
    LogoutHandler () {
      localStorage.removeItem('token')
      location.reload()
    },
    redirectTo (route) {
      location.href = route
    }
  }
}
</script>

<style scoped>
.main {
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: auto;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  text-align: center;
  margin-top: 60px;
}
</style>
