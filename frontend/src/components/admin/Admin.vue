<template>
  <div class="main">
    <p>管理员面板</p>
    <button @click="getAllUsers">获取所有用户信息</button>
    <ul>
      <li v-for="user in users" :key="user.user_name">
        {{ user.user_name }} - {{ user.user_level }}
        <button @click="promoteUser(user.user_name)">提升权限</button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
// import { response } from '../../../../aquaculture-visualization/app'

export default {
  name: 'Admin',
  data () {
    return {
      users: []
    }
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
      // alert('promoting' + username)
      // eslint-disable-next-line
      var url = `http://localhost:3000/admin/level_up/${username}`
      axios.put(url)
        .then(response => {
          console.log(response.data)
          if (response.data.message === undefined) {
            alert(response.data.msg)
          } else {
            alert(response.data.message)
          }
        })
    }
  }
}
</script>
