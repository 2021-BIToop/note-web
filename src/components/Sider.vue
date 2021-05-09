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
        icon="el-icon-refresh"
        circle
        size="mini"
        @click="refresh"
      ></el-button>
      <el-button
        icon="el-icon-folder-add"
        circle
        size="mini"
        @click="addTopic"
      ></el-button>
    </el-row>
    <NoteList
      ref="NoteList"
      @refresh="refresh"
      @editTopicName="editTopicName"
    ></NoteList>
  </div>
</template>

<script>
import NoteList from "./NoteList.vue"
import { addTopicApi, topicListApi, noteListApi, updateTopicApi } from "request"
export default {
  name: "Sider",
  components: {
    NoteList,
  },
  data() {
    return {
      flag: true,
      search_key: "",
      topic_list: [],
    }
  },
  methods: {
    search() {},
    editTopicName(cat) {
      let data = {
        topic_id: cat.topic_id,
        name: cat.name,
        rank: cat.rank,
        user_id: cat.user_id,
      }
      updateTopicApi(data)
        .then((res) => {
          console.log(res)
          this.refresh()
        })
        .catch((err) => {
          console.log(err.response.data.detail)
        })
    },
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
          this.refresh()
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
      return new Promise((resolve, reject) => {
        let data = {
          user_id: this.$store.state.has_login,
        }
        topicListApi(data)
          .then((res) => {
            this.topic_list = []
            res.data.forEach((element) => {
              this.topic_list.push(element)
              this.getNotes()
            })
            resolve("success")
          })
          .catch((err) => {
            console.log(err.response.data.detail)
            reject(err.response.data.detail)
          })
      })
    },
    getNotes() {
      this.topic_list.forEach((element) => {
        let data = {
          user_id: this.$store.state.has_login,
          topic_id: element.topic_id,
        }
        noteListApi(data)
          .then((res) => {
            element.notes = res.data
            // console.log(this.topic_list)
          })
          .catch((err) => {
            if (err.response != undefined) {
              console.log(err.response.data.detail)
            } else {
              console.log(err)
            }
          })
      })
    },
    refresh() {
      this.getTopicList()
        .then((res) => {
          console.log(res)
          this.$refs.NoteList.getTopicList(this.topic_list)
        })
        .catch((err) => {
          console.log(err)
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
        this.refresh()
      }
    },
  },
  mounted() {
    if (this.$store.getters.hasLogin) {
      this.refresh()
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