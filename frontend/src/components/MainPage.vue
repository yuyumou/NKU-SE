<template>
  <div class="main">
    <h1>{{ msg }}</h1>
    <div v-if="!isLoggedIn" class="auth-buttons">
      <el-button type="primary" @click="redirectTo('login')">登录</el-button>
      <el-button type="success" @click="redirectTo('register')">注册</el-button>
    </div>

    <div v-if="isLoggedIn" class="logged-in">
      <el-button type="danger" @click.prevent="LogoutHandler">注销</el-button>
      <el-button v-if="isAdmin" type="warning" @click="redirectTo('home/admin')">管理员面板</el-button>
      <el-button type="info" @click="redirectTo('home/userhome')">可视化系统主页</el-button>
    </div>
  </div>

</template>

<script>
import axios from 'axios'
import { Button, Message } from 'element-ui';

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
        // this.isAdmin = true
        // TODO : 假设isAdmin从后端返回
        this.isAdmin = res.data.level
        // this.msg = res.data
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
  padding: 30px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  height: 300px;
}
h1 {
  color: #333;  
  text-align: center;
}
p {
  color: #666;
  font-size: 14px;
  text-align: center;
}
</style>
