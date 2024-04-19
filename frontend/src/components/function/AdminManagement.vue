<template>
  <div class="main">

    <el-row type="flex" justify="center" class="header-row">
      <el-col :span="24">
        <h2 class="main-title">User Management</h2>
      </el-col>
    </el-row>

    <el-table
    :data="users"
    style="width: 100%">

      <el-table-column
      prop="user_name"
      label="Name"
      >
      </el-table-column>

      <el-table-column
        prop="user_level"
        label="IsAdmin"
        >
        <template slot-scope="scope">
          <el-switch
            v-model="convertedLevels[scope.$index]"
            @change="handleLevelChange(scope.$index, scope.row)"
          >
          </el-switch>
        </template>
      </el-table-column>

    </el-table>
  </div>
</template>

<style scoped>
.main {
  max-width: 80%;
  margin: 0 auto;
  margin-top: 30px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.title {
  font-size: 24px;
  text-align: center;
  margin-bottom: 10px;
}

</style>

<script>
import axios from 'axios'

export default {
  name: 'AdminManagement',
  // TODO(): retrieve the username to prevent the user from changing their own level
  data () {
    return {
      users: [],
      convertedLevels: []
    }
  },
  created () {
    // console.log('admin created');
    axios.get('http://localhost:3000/token', {
      headers: { Authorization: localStorage.getItem('token') }
    }).then(res => {
      axios.get('http://localhost:3000/token').then(ret => {
        this.isAdmin = ret.data.level
        if (this.isAdmin === 0) {
          alert('您不是管理员')
          this.$router.push('/login')
        } else {
          this.getAllUsers()
        }
      })
    }).catch(error => console.error(error))
  },
  methods: {
    getAllUsers () {
      var url = 'http://localhost:3000/admin/allusers'
      axios.get(url)
        .then(response => {
          this.users = response.data
          this.convertedLevels = this.users.map(user => user.user_level === 1)
        })
        .catch(error => {
          console.error(error)
        })
    },

    promoteUser (username) {
      var url = `http://localhost:3000/admin/level_up/${username}`
      axios.put(url)
        .then(response => {
        })
    },

    handleLevelChange (index, user) {
      const level = this.convertedLevels[index]
      this.promoteUser(user.user_name)
      console.log(`User ${user.user_name} level changed to: ${level}`)
    }
  }
}
</script>
