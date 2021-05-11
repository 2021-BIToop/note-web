<template>
  <el-container>
    <el-header>
      <Header></Header>
    </el-header>
    <el-container>
      <el-aside width="300px">
        <Sider @showContent="showContent"></Sider>
      </el-aside>
      <el-main>
        <Main ref="Main"></Main>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src
import Header from "components/Header.vue"
import Sider from "components/Sider.vue"
import Main from "components/Main.vue"
export default {
  name: "Home",
  components: {
    Header,
    Sider,
    Main,
  },
  methods: {
    showContent(data) {
      this.$refs.Main.showContent(data)
    },
  },
}
</script>


<style>
.el-container {
  height: 100%;
}
.el-header,
.el-footer {
  background-color: #27bb60;
  color: #fafafa;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
}
.el-aside::-webkit-scrollbar {
  display: none; /*隐藏滚动条*/
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>