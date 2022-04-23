<template>
  <div class="login">
    <div>
      enter name:
      <input type="text" v-model="username" />
    </div>
    <div>
      <button @click="login">login</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'login',
  data() {
    return {
      username: ''
    }
  },
  methods: {
    login() {
      sessionStorage.setItem('username', this.username)
      setTimeout(() => {
        sessionStorage.removeItem('username')
      }, 30000)
      this.$router.push({
        path: '/main/home'
      })
    },
  },
  mounted() {
    window.axios = axios
  }
}
</script>

<style scoped>
#nav {
  padding: 30px;
  background: #2c3e50;
  color: #ffffff;
}

a {
  font-weight: bold;
  color: #ffffff;
}
</style>