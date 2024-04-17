<template>
  <div class="guide">
      <p>这里应该有导航栏</p>
      <div v-if="isLoggedIn" class="navigation">
          <el-button @click="redirectTo('main-data')" type="success">主要数据</el-button>
          <el-button @click="redirectTo('underwater-system')" type="success">水下系统</el-button>
          <el-button @click="redirectTo('data-center')" type="success">数据中心</el-button>
          <el-button @click="redirectTo('intelligence-center')" type="success">智能中心</el-button>
          <el-button v-if="isAdmin" @click="redirectTo('admin-management')" type="warning">管理员管理界面</el-button>
      </div>
      <div v-else class="auth-buttons">
          <p>请登录以访问系统</p>
      </div>
      <router-view></router-view>
  </div>
</template>

<script>
// import { Button, MessageBox } from 'element-ui'

export default {
  name: 'Home',
  data () {
    return {
      isLoggedIn: true, // 假设从后端验证或前端状态管理获取
      // TODO(): getisadmin
      isAdmin: true
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
/* h1 {
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
} */
/* .auth-buttons p, .navigation {
  color: #666;
  font-size: 14px;
} */
</style>
