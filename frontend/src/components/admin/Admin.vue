<template>
  <div class="main">
    <el-row type="flex" justify="center" class="header-row">
      <el-col :span="24">
        <h2 class="main-title">User and Admin Management</h2>
      </el-col>
    </el-row>

    <el-table
      :data="users"
      style="width: 100%">
      <el-table-column
        prop="user_name"
        label="Name">
      </el-table-column>
      <el-table-column
        prop="user_level"
        label="Is Admin">
        <template slot-scope="scope">
          <el-switch
            v-model="convertedLevels[scope.$index]"
            @change="handleLevelChange(scope.$index, scope.row)">
          </el-switch>
        </template>
      </el-table-column>
    </el-table>

    <h2 class="admin-title">Admins</h2>
    <el-table
      :data="admin"
      style="width: 100%">
      <el-table-column
        prop="user_name"
        label="Name">
      </el-table-column>
      <el-table-column></el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'UserAdminManagement',
  data () {
    return {
      users: [],
      admin: [],
      convertedLevels: []
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      axios.get('http://localhost:3000/token', {
        headers: { Authorization: localStorage.getItem('token') }
      }).then(res => {
        axios.get('http://localhost:3000/token').then(ret => {
          this.isAdmin = ret.data.level
          if (this.isAdmin === 0) {
            alert('您不是管理员')
            this.$router.push('/')
          } else {
            this.getAllUsers()
            this.getAllAdmins()
          }
        })
      }).catch(error => {
        console.error('Error fetching token:', error)
      })
    },
    getAllUsers () {
      axios.get('http://localhost:3000/admin/allusers')
        .then(response => {
          this.users = response.data
          this.convertedLevels = this.users.map(user => user.user_level === 1)
          console.log('Users loaded:', this.users)
        })
        .catch(error => {
          console.error('Error fetching users:', error)
        })
    },
    getAllAdmins () {
      axios.get('http://localhost:3000/admin/alladmins')
        .then(response => {
          this.admin = response.data
          console.log('Admins loaded:', this.admin)
        })
        .catch(error => {
          console.error('Error fetching admins:', error)
        })
    },
    handleLevelChange (index, user) {
      const level = this.convertedLevels[index] ? 1 : 0
      this.promoteUser(user.user_name)
      console.log(`User ${user.user_name} level changed to: ${level}`)
    },
    promoteUser (username) {
      axios.put(`http://localhost:3000/admin/level_up/${username}`)
        .then(response => {
          console.log(`User ${username} level changed`)
        })
        .catch(error => {
          console.error('Error updating user level', error)
        })
    }
  }
}
</script>

<style scoped>
.main {
  max-width: 80%;
  margin: 0 auto;
  margin-top: 30px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
.main-title, .admin-title {
  font-size: 24px;
  text-align:center;
  margin-bottom: 20px;
}
</style>
