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

      <el-form-item label="验证码" required>
        <el-input v-model.trim="code" placeholder="请输入验证码"></el-input>
      </el-form-item>

      <canvas ref="verifyCanvas" width="200" height="50" @click="refresh"></canvas><br>

      <el-button type="primary" @click.prevent="LoginHandler">登录</el-button>
    </el-form>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
// import { Button, Form, FormItem, Input, Notification } from 'element-ui';

export default {
  name: 'Test',
  data () {
    return {
      username: '',
      password: '',

      verificationCode: '',
      numArr: "0,1,2,3,4,5,6,7,8,9".split(","),
      letterArr: this.getAllLetter(),
      canvasWidth: 200,
      canvasHeight: 50,
      code: ''
    }
  },
  mounted () {
    this.refresh()
  },
  methods: {

    refresh() {
      this.verificationCode = "";
      const canvas = this.$refs.verifyCanvas;
      if (canvas.getContext) {
        const ctx = canvas.getContext('2d');
        ctx.textBaseline = "middle";
        ctx.fillStyle = this.randomColor(180, 240);
        ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
        const txtArr = this.numArr.concat(this.letterArr);
        for (let i = 1; i <= 4; i++) {
          const txt = txtArr[this.randomNum(0, txtArr.length)];
          this.verificationCode += txt;
          ctx.font = this.randomNum(this.canvasHeight / 2, this.canvasHeight) + 'px SimHei';
          ctx.fillStyle = this.randomColor(50, 160);
          ctx.shadowOffsetX = this.randomNum(-3, 3);
          ctx.shadowOffsetY = this.randomNum(-3, 3);
          ctx.shadowBlur = this.randomNum(-3, 3);
          ctx.shadowColor = "rgba(0, 0, 0, 0.3)";
          const x = this.canvasWidth / 5 * i;
          const y = this.canvasHeight / 2;
          const deg = this.randomNum(-30, 30);
          ctx.translate(x, y);
          ctx.rotate(deg * Math.PI / 180);
          ctx.fillText(txt, 0, 0);
          ctx.rotate(-deg * Math.PI / 180);
          ctx.translate(-x, -y);
        }
        for (let i = 0; i < 4; i++) {
          ctx.strokeStyle = this.randomColor(40, 180);
          ctx.beginPath();
          ctx.moveTo(this.randomNum(0, this.canvasWidth), this.randomNum(0, this.canvasHeight));
          ctx.lineTo(this.randomNum(0, this.canvasWidth), this.randomNum(0, this.canvasHeight));
          ctx.stroke();
        }
        for (let i = 0; i < this.canvasWidth / 4; i++) {
          ctx.fillStyle = this.randomColor(0, 255);
          ctx.beginPath();
          ctx.arc(this.randomNum(0, this.canvasWidth), this.randomNum(0, this.canvasHeight), 1, 0, 2 * Math.PI);
          ctx.fill();
        }
      }
    },
    validate(code) {
      const v_code = this.verificationCode.toLowerCase();
      return code.toLowerCase() === v_code;
    },
    verifyCode() {
      const res = this.validate(this.verificationCode);
      if (res) {
        alert('验证正确');
      } else {
        alert('验证码错误');
        this.refresh();
      }
    },
    getAllLetter() {
      const letterStr = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";
      return letterStr.split(",");
    },
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    randomColor(min, max) {
      const r = this.randomNum(min, max);
      const g = this.randomNum(min, max);
      const b = this.randomNum(min, max);
      return `rgb(${r},${g},${b})`;
    },


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
      var vRes = this.validate(this.code)
      if (!vRes) {
        alert('验证码错误')
        this.refresh()
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
  height: 400px;
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
