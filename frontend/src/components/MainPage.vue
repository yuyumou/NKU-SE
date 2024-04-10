<template>
  <div class="main">
    <h1>{{ msg }}</h1>
    <div class='login'>
      <input type="button"  value="登录" onclick='location.href=("login")' />
    </div>
    <div class='register'>
      <input type="button"  value="注册" onclick='location.href=("register")' />
    </div>
    <p>TODO(): 已登录显示用户名信息，未登录显示登录和注册按钮</p>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      msg: 'Welcome'
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
