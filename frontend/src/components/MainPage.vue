<template>
  <div class="main">
    <h1>{{ msg }}</h1>
    <div v-if="!isLoggedIn" class="auth-buttons">
      <button @click="redirectTo('login')">登录</button>
      <button @click="redirectTo('register')">注册</button>
    </div>

    <div v-if="isLoggedIn" class="logged-in">
      <button @click.prevent="LogoutHandler">注销</button>
      <button v-if="isAdmin" @click="redirectTo('home/admin')">管理员面板</button>
      <button @click="redirectTo('home/userhome')">可视化系统主页</button>
    </div>

    <p>登录状态会显示注销、管理员面板（若为管理员）、可视化系统主页按钮；未登录状态则显示登录和注册按钮。</p>
    <p>权限和登录状态检查在api/interceptor.js中处理。</p>
    <p>TODO : 假设isAdmin从后端返回</p>
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
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
h1 {
  color: #333;
  text-align: center;
}
button {
  background-color: #42b983;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 10px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
}
button:hover {
  background-color: #369b7a;
}
.auth-buttons, .logged-in {
  text-align: center;
}
p {
  color: #666;
  font-size: 14px;
  text-align: center;
}
</style>
