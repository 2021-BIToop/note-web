<template>
  <el-row>
    <el-col :span="6">
      <span style="font-weight: 1000; font-size: 30px">云便签</span></el-col
    >
    <el-col :span="6" :offset="12">
      <span v-if="hasLogin">
        {{ username }}/<a href="#" @click="logout">LOGOUT</a>
      </span>
      <a v-else href="#" @click="openLogin">LOGIN</a>
    </el-col>
  </el-row>
  <Login :loginVisible="loginVisible" @close="closeLogin"></Login>
</template>
<script>
import Login from "./Login.vue"
export default {
  name: "Header",
  components: {
    Login,
  },
  data() {
    return {
      loginVisible: false,
    }
  },
  methods: {
    openLogin() {
      this.loginVisible = true
    },
    closeLogin() {
      this.loginVisible = false
    },
    logout() {
      this.$store.dispatch("logout")
    },
  },
  computed: {
    hasLogin() {
      return this.$store.getters.hasLogin
    },
    username() {
      return this.$store.getters.username
    },
  },
  watch: {},
}
</script>
<style>
</style>