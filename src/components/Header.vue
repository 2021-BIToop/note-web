<template>
  <el-row>
    <el-col :span="6"> TITLE <a href="#" @click="test">test</a></el-col>
    <el-col :span="6" :offset="12">
      <a v-if="hasLogin" href="#" @click="logout">LOGOUT</a>
      <a v-else href="#" @click="openLogin">LOGIN</a>
    </el-col>
  </el-row>
  <Login :loginVisible="loginVisible" @close="closeLogin"></Login>
</template>
<script>
import Login from "./Login.vue"
import { topicIdApi } from "request"
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
    test() {
      topicIdApi({ topic_id: 1 })
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    },
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
  },
  watch: {},
}
</script>
<style>
</style>