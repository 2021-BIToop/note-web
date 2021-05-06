<template>
  <el-row>
      <el-col :span="6">
          TITLE
      </el-col>
      <el-col :span="6" :offset="12">
          <a href="#" @click="openLogin">LOGIN</a>
      </el-col>
  </el-row>
  <Login :loginVisible=loginVisible @close=closeLogin></Login>
</template>
<script>
import Login from './Login.vue';
  export default {
    name: 'Header',
      components: {
        Login
      },
    data() {
      return {
        loginVisible: false
      }
    },
    methods:{
      openLogin(){
        this.loginVisible = true
      },
      closeLogin(){
        this.loginVisible = false
      },
    },
    computed:{
      
    },
    watch: {
      
    }
  }
</script>
<style>
  
</style>