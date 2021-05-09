<template>
  <el-collapse accordion v-model="activeNames" @change="handleChange">
    <el-collapse-item
      v-for="(cat, index) in categories"
      :key="index"
      :name="cat.topic_id"
      :disabled="this.isEdit"
      @dblclick="this.isEdit = true"
    >
      <template #title>
        <el-input
          v-if="isEdit"
          size="mini"
          v-model="cat.name"
          @blur="editTopicName(cat)"
        >
        </el-input>
        <span v-else>{{ cat.name }}</span>
      </template>
      <div class="description_bar">
        <el-row>
          <span>创建于 {{ date(cat.created_time) }}</span>
        </el-row>
        <el-row>
          <el-button
            icon="el-icon-circle-plus-outline"
            circle
            size="mini"
            type="primary"
            @click="addNote"
          ></el-button>
          <el-button
            icon="el-icon-delete"
            circle
            size="mini"
            @click="deleteTopic"
            type="danger"
          ></el-button>
        </el-row>
      </div>

      <NoteItem
        v-for="(note, index) in cat.notes"
        :key="index"
        :title="note.title"
        :time="date(note.modified_time)"
      >
      </NoteItem>
    </el-collapse-item>
  </el-collapse>
</template>
<script>
import NoteItem from "./NoteItem.vue"
import { addNoteApi } from "request"
import moment from "moment"
export default {
  name: "NoteList",
  components: {
    NoteItem,
  },
  data() {
    return {
      activeNames: [],
      isEdit: false,
      categories: [
        // {
        //   topic_id: 1,
        //   rank: 0,
        //   created_time: "2021/02/22",
        //   name: "默认分类",
        //   notes: [
        //     {
        //       note_id: 1,
        //       priority: 1,
        //       user_id: 1,
        //       topic_id: 1,
        //       modified_time: "2021/05/01",
        //       content: "",
        //       title: "示例标题1",
        //     },
        //     {
        //       note_id: 2,
        //       priority: 1,
        //       user_id: 1,
        //       topic_id: 1,
        //       modified_time: "2021/05/01",
        //       content: "",
        //       title: "示例标题1",
        //     },
        //   ],
        // },
      ],
    }
  },
  methods: {
    editTopicName(cat) {
      this.isEdit = false
      this.$emit("editTopicName", cat)
    },
    handleChange() {
      // console.log(this.activeNames)
    },
    addNote() {
      let data = {
        content: "请在此编写便签",
        priority: 0,
        user_id: this.$store.state.has_login,
        topic_id: this.activeNames,
      }
      // console.log(data)
      addNoteApi(data)
        .then((res) => {
          console.log(res)
          this.$message({
            message: "新便签创建成功",
            type: "success",
            duration: 1000,
          })
          this.$emit("addNoteRefresh")
        })
        .catch((err) => {
          this.$message({
            message: err.response.data.detail,
            type: "warning",
            duration: 1000,
          })
        })
    },
    getTopicList(topic_list) {
      this.categories = topic_list
      console.log(this.categories)
      // this.categories.forEach((element) => {
      //   console.log("!!!!")
      //   console.log(element)
      //   // element.forEach((e, i) => {
      //   //   e.title = "便签" + i
      //   //   console.log(e)
      //   // })
      // })
      // console.log(topic_list)
    },
    deleteTopic() {},
    date(raw) {
      // console.log(moment(raw).format("YYYY/MM/DD"))
      return moment(raw).format("YYYY/MM/DD")
    },
  },
  computed: {},
  watch: {},
}
</script>
<style>
.description_bar {
  padding-block: 5px;
  background-color: #e9eef3;
}
.el-collapse-item__header {
  height: 35px;
  line-height: 35px;
}
</style>