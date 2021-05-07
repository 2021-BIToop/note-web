<template>
  <div>
    <el-row class="search_bar">
      <el-col :span="18">
        <el-input size="mini" v-model="searchKey"></el-input>
      </el-col>
      <el-col :span="4" :offset="1">
        <el-button
          icon="el-icon-search"
          circle
          size="mini"
          @click="search"
        ></el-button>
      </el-col>
    </el-row>
    <el-row class="control_bar">
      <el-button
        icon="el-icon-search"
        circle
        size="mini"
        @click="search"
      ></el-button>
      <el-button
        icon="el-icon-folder-add"
        circle
        size="mini"
        @click="add_topic"
      ></el-button>
      <el-button
        icon="el-icon-circle-plus-outline"
        circle
        size="mini"
        @click="search"
      ></el-button>
    </el-row>
    <NoteList></NoteList>
  </div>
</template>

<script>
import NoteList from "./NoteList.vue"
import { addTopicApi } from "request"
export default {
  name: "Sider",
  components: {
    NoteList,
  },
  data() {
    return {
      searchKey: "",
    }
  },
  methods: {
    search() {},
    add_topic() {
      let data = {
        name: "新分类",
        rank: 0,
        user_id: this.$store.getters.hasLogin,
      }
      addTopicApi(data)
        .then((res) => {
          console.log(res)
          this.$message({
            message: "新分类创建成功",
            type: "success",
            duration: 1000,
          })
        })
        .catch((err) => {
          this.$message({
            message: err.response.data.detail,
            type: "warning",
            duration: 1000,
          })
        })
    },
  },
  computed: {},
  watch: {},
}
</script>

<style>
.search_bar {
  padding-block: 5px;
  padding-inline: 5px;
}
.control_bar {
  padding-block: 5px;
  padding-inline: 5px;
}
</style>