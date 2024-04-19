<template>
  <div class="guide">
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
        <el-menu-item v-if="isAdmin" @click.native="redirectTo('admin-management')" type="warning">管理员管理界面</el-menu-item>

    </el-menu>
    <div v-else>
      <p>请登录以访问系统</p>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      isLoggedIn: true, // 假设从后端验证或前端状态管理获取
      // TODO(): getisadmin
      isAdmin: true
    }
  },
  created () {
    // get the isAdmin
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
  margin-top: 60px;
}
</style>
