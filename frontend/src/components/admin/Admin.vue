<template>
  <div class="main">
    <h1 class="title">管理员面板</h1>
    <button class="button" @click="getAllUsers">获取所有用户信息</button>
    <ul class="user-list">
      <li v-for="user in users" :key="user.user_name" class="user-item">
        <span class="user-name">{{ user.user_name }}</span>
        <span class="user-level">({{ user.user_level }})</span>
        <button class="promote-button" @click="promoteUser(user.user_name)">提升权限</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.main {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.title {
  font-size: 24px;
  text-align: center;
  margin-bottom: 10px;
}

.button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-bottom: 10px;
  cursor: pointer;
}

.user-list {
  list-style-type: none;
  padding: 0;
}

.user-item {
  margin-bottom: 10px;
}

.user-name {
  font-weight: bold;
}

.user-level {
  margin-left: 5px;
  color: gray;
}

.promote-button {
  background-color: #008CBA;
  color: white;
  border: none;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  cursor: pointer;
}
</style>

<script>
import axios from 'axios'

export default {
  name: 'Admin',
  data () {
    return {
      users: []
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
        })
        .catch(error => {
          console.error(error)
        })
    },
    promoteUser (username) {
      var url = `http://localhost:3000/admin/level_up/${username}`
      axios.put(url)
        .then(response => {
          console.log(response.data)
          if (response.data.message === undefined) {
            alert(response.data.msg)
          } else {
            alert(response.data.message)
          }
          this.getAllUsers()
        })
    }
  }
}
</script>
