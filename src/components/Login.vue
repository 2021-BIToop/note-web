<template>
  <el-dialog
  title="登录"
  :model-value="loginVisible"
  :before-close="onCancel"
  width="40%"
  center>
    <el-form>
      <el-form-item label="用户名">
          <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
          <el-input v-model="form.password"
          type="password"
          @keyup.enter="onSubmit"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">确定</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
<script>
  export default {
    name: 'Login',
    components: {
      
    },
    props:['loginVisible'],
    data() {
      return {
        form:{
          username: '',
          password: ''
        }
      }
    },
    methods:{
      onSubmit(){
        this.$emit("close")
      },
      onCancel(){
        this.$emit("close")
      }
    },
    computed:{
      
    },
    watch: {
      
    }
  }
</script>
<style>
  
</style>