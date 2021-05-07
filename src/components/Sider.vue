<template>
  <div>
    <el-row class="search_bar">
      <el-col :span="18">
        <el-input size="mini" v-model="search_key"></el-input>
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
    <NoteList :topic_list="this.topic_list"></NoteList>
  </div>
</template>

<script>
import NoteList from "./NoteList.vue"
import { addTopicApi, topicListApi } from "request"
export default {
  name: "Sider",
  components: {
    NoteList,
  },
  data() {
    return {
      search_key: "",
      topic_list: [],
    }
  },
  methods: {
    search() {},
    addTopic() {
      let data = {
        name: "新分类",
        rank: 0,
        user_id: this.$store.state.has_login,
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
    getTopicList() {
      let data = {
        user_id: this.$store.state.has_login,
      }
      topicListApi(data)
        .then((res) => {
          res.data.forEach((element) => {
            this.topicList.push(element)
          })
        })
        .catch((err) => {
          console.log(err.response.data.detail)
        })
    },
  },
  computed: {
    loginState() {
      return this.$store.getters.hasLogin
    },
  },
  watch: {
    loginState() {
      if (this.loginState) {
        this.getTopicList()
      }
    },
  },
  mounted() {
    if (this.$store.getters.hasLogin) {
      this.getTopicList()
    }
  },
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