<template>
  <div id="background">
    <el-form id="contain" >

      <el-form-item label="用户名：">
        <el-input v-model.trim="username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码：">
        <el-input type="password" v-model.trim="password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item label="邮箱：">
        <el-input type="email" v-model.trim="email" placeholder="请输入邮箱地址"></el-input>
      </el-form-item>
      <el-button type="primary" native-type="submit" @click.prevent="RegisterHandler">注册</el-button>
    </el-form>
  </div>
</template>

<script>
// import { Button, Form, FormItem, Input, Notification } from 'element-ui';
import axios from 'axios'

export default {
  name: 'Register',
  data () {
    return {
      username: '',
      password: '',
      email: ''
    }
  },
  methods: {
    EmailChecker: function (email) {
      var verify = /^\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/
      if (!verify.test(email)) {
        return false
      } else {
        return true
      }
    },
    RegisterHandler: function () {
      var url = 'http://localhost:3000/register'

      if (this.username === '') {
        alert('用户名不能为空')
        return
      }
      if (this.password === '') {
        alert('密码不能为空')
        return
      }
      if (this.EmailChecker(this.email) === false) {
        alert('邮箱不合法')
        return
      }

      axios.post(url, {
        params: {
          username: this.username,
          password: this.password,
          email: this.email
        }
      }).then(res => {
        if (res.data.status === 202) {
          alert('用户名已存在')
        } else if (res.data.status === 203) {
          alert('邮箱已被注册')
        } else if (res.data.status === 200) {
          setTimeout(function () { window.location.href = 'login' }, 1000)
          alert('注册完成！点击确定跳转到登录页面')
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
  height: 350px;
  margin-top: 60px;
}
.form{
  /* color: white; */
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
/*
input,textarea{
  margin-left: 10px;
  padding: 4px;
  border: solid 1px #4e5ef3;
  outline: 0;
  font: normal 13px/100% Verdana,Tahoma,sans-serif;
  width: 200px;
  height: 20px;
  background:#f1f1f190;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px;
}
input:hover,textarea:hover,input:focus,textarea:focus{border-color:#0d0aa1;}
button{
  position: relative;
  height: 33px;
  width: 150px;
  background: rgba(35, 19, 252, 0.425);
  border-radius: 10px;
  margin-top: 38px;
  box-shadow: none;
  color: white;
  margin-left: 40px;
} */
</style>
