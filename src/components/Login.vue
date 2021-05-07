<template>
  <el-dialog
    :model-value="loginVisible"
    :before-close="onCancel"
    width="40%"
    center
  >
    <h3 v-if="this.sign_up">注册</h3>
    <h3 v-else>登录</h3>
    <el-form>
      <el-form-item label="用户名">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input
          v-model="form.password"
          type="password"
          @keyup.enter="onSubmit"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">确定</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
      <a v-if="this.sign_up" href="#" @click="isSignUp">登录</a>
      <a v-else href="#" @click="isSignUp">注册</a>
    </el-form>
  </el-dialog>
</template>
<script>
import { signupApi } from "request"
export default {
  name: "Login",
  components: {},
  props: ["loginVisible"],
  data() {
    return {
      sign_up: false,
      form: {
        username: this.checkUsername(),
        password: this.checkPassword(),
      },
    }
  },
  methods: {
    isSignUp() {
      this.sign_up = !this.sign_up
      if (this.sign_up == true) {
        this.form.username = ""
        this.form.password = ""
      }
    },
    onSubmit() {
      if (this.sign_up == false) {
        this.$store
          .dispatch("login", this.form)
          .then((res) => {
            console.log(res)
            this.saveUser()
            this.$message({
              message: "登陆成功",
              type: "success",
              duration: 1000,
            })
            this.$emit("close")
          })
          .catch(() => {
            this.$message({
              message: "登陆失败，请重试",
              type: "warning",
              duration: 1000,
            })
          })
      } else {
        signupApi(this.form)
          .then((res) => {
            if (parseInt(res.status / 100) === 2) {
              this.$message({
                message: "注册成功",
                type: "success",
                duration: 1000,
              })
              this.sign_up = !this.sign_up
            }
          })
          .catch((error) => {
            console.log(error)
            // this.$message({
            //   message: "注册失败，请重试",
            //   type: "warning",
            //   duration: 1000,
            // })
          })
      }
    },
    onCancel() {
      this.$emit("close")
    },
    checkUsername() {
      let username = localStorage.getItem("checkUsername")
      if (username != null && username != undefined) {
        return username
      } else {
        return ""
      }
    },
    checkPassword() {
      let password = localStorage.getItem("checkPassword")
      if (password != null && password != undefined) {
        return password
      } else {
        return ""
      }
    },
    saveUser() {
      localStorage.setItem("checkUsername", this.form.username)
      localStorage.setItem("checkPassword", this.form.password)
    },
  },
  computed: {},
  watch: {},
}
</script>
<style>
</style>