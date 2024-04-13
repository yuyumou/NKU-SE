<template>
  <div class="main">
    <h1>可视化系统主页</h1>
    <div v-if="isLoggedIn" class="navigation">
      <button @click="redirectTo('main-data')">主要数据</button>
      <button @click="redirectTo('underwater-system')">水下系统</button>
      <button @click="redirectTo('data-center')">数据中心</button>
      <button @click="redirectTo('intelligence-center')">智能中心</button>
      <button v-if="isAdmin" @click="redirectTo('admin-management')">管理员管理界面</button>
    </div>
    <div v-else class="auth-buttons">
      <p>请登录以访问系统</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserHome',
  data () {
    return {
      isLoggedIn: true, // 假设从后端验证或前端状态管理获取
      isAdmin: true // 假设从后端验证或前端状态管理获取
    }
  },
  methods: {
    redirectTo (route) {
      this.$router.push({ name: route })
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
}
h1 {
  color: #333;
  margin-bottom: 20px;
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
.auth-buttons p, .navigation {
  color: #666;
  font-size: 14px;
}
</style>
