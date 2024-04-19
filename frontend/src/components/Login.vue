<template>
  <div id="background">
    <el-form id="contain" ref="loginForm" @submit.prevent="LoginHandler">
      <!-- <h1>登录</h1> -->

      <el-form-item label="用户名" required>
        <el-input v-model.trim="username" placeholder="请输入用户名"></el-input>
      </el-form-item>

      <el-form-item label="密码" required>
        <el-input type="password" v-model.trim="password" placeholder="请输入密码" @keyup.enter.native="LoginHandler"></el-input>
      </el-form-item>

      <el-button type="primary" @click.prevent="LoginHandler">登录</el-button>

    </el-form>
  </div>
</template>

<script>
import axios from 'axios'
// import { Button, Form, FormItem, Input, Notification } from 'element-ui';

export default {
  name: 'Test',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  created () {},
  methods: {
    LoginHandler () {
      var url = 'http://localhost:3000/login'

      if (this.username === '') {
        alert('用户名不能为空')
        return
      }
      if (this.password === '') {
        alert('密码不能为空')
        return
      }

      axios.post(url, {
        params: {
          username: this.username,
          password: this.password
        }
      }).then(res => {
        if (res.data.status === 202) {
          alert('用户名或密码错误')
        } else if (res.data.status === 200) {
          localStorage.setItem('token', res.data.token)
          // localStorage.setItem('username', res.data.username)
          // localStorage.setItem('userid', res.data.userid)
          // localStorage.setItem('userlevel', res.level)
          this.$router.push('/')
          alert('登陆成功！点击确定跳转到主页')
        } else {
          alert('服务器内部错误')
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
#contain{
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: auto;
  padding: 30px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  height: 300px;
  margin-top: 60px;
}
.form{
  color: white;
  margin-left: 20%;
  margin-top: 60px;
  font-size: 20px;
  text-align: left;
}
label{
  float:left;
  width: 5em;
  margin-right: 1em;
  text-align: right;
}
input,textarea{
  margin-left: 10px;
  padding: 4px;
  border: solid 1px #4e5ef3;
  outline: 0;
  font: normal 13px/100% Verdana,Tahoma,sans-serif;
  width: 200px;
  height: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px;
}
/* input:hover,textarea:hover,input:focus,textarea:focus{border-color:#0d0aa1;}
button{
  position: relative;
  height: 33px;
  width: 150px;
  border-radius: 10px;
  margin-top: 38px;
  box-shadow: none;
  color: white;
  margin-left: 40px;
} */

</style>
