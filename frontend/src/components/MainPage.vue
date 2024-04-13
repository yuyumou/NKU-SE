<template>
  <div class="main">
    <h1>{{ msg }}</h1>
    <div class='login'>
      <input type="button"  value="登录" onclick='location.href=("login")' />
    </div>
    <div class='register'>
      <input type="button"  value="注册" onclick='location.href=("register")' />
    </div>

    <button @click.prevent="LogoutHandler">注销</button>

    <div class='admin'>
      <input type="button"  value="管理员面板" onclick='location.href=("home/admin")' />
    </div>

    <div class='user'>
      <input type="button"  value="可视化系统主页" onclick='location.href=("home/userhome")' />
    </div>

    <p>TODO():非登录状态隐藏注销按钮，登录状态隐藏登录和注册按钮</p>
    <p>拦截功能未完全实现，见api/interceptor.js</p>
    <p>目前拦截只区分登录和未登录，后续需要对非管理员进行拦截</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Main',
  data () {
    return {
      msg: ''
    }
  },
  created () {
    var url = 'http://localhost:3000/'
    axios.get(url, {
      headers: {
        Authorization: window.localStorage.getItem('token')
      }
    }).then(res => {
      if (res.data.status === 223) {
        this.msg = '没有登陆'
      } else {
        this.msg = '已经登录'
      }
    }).catch(error => {
      console.log(error)
    })
  },
  methods: {
    LogoutHandler () {
      localStorage.removeItem('token')
      location.reload()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
