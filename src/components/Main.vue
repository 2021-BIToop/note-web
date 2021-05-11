<template>
  <div>
    <el-row>
      <el-button @click="submit" type="primary">提交</el-button>
      <el-select v-model="topic" placeholder="请选择分类">
        <el-option
          v-for="item in topic_list"
          :key="item.topic_id"
          :label="item.name"
          :value="item.topic_id"
        >
        </el-option>
      </el-select>
      <el-button @click="clear">清空内容</el-button>
    </el-row>
    <el-row>
      <tinymce-editor
        ref="editor"
        v-model="msg"
        :value="msg"
        :disabled="disabled"
        :base-url="baseUrl"
        :language="language"
        :skin="skin"
        @onClick="onClick"
      >
      </tinymce-editor>
    </el-row>
  </div>
</template>

<script>
import TinymceEditor from "./tinymce-editor/tinymce-editor"
import { updateNoteApi } from "request"
export default {
  name: "Main",
  components: {
    TinymceEditor,
  },
  data() {
    return {
      note: {},
      topic_list: [],
      topic: "",
      msg: "<h4>便签内容</h4>",
      disabled: false,
      baseUrl: process.env.NODE_ENV === "production" ? "/vue-use-tinymce" : "",
      language: "zh_CN",
      skin: "oxide",
    }
  },
  methods: {
    submit() {
      this.note.content = this.$refs.editor.getContent()
      let data = {
        note_id: this.note.note_id,
        content: this.note.content,
        priority: this.note.priority,
        user_id: this.note.user_id,
        topic_id: this.topic,
      }
      updateNoteApi(data)
        .then((res) => {
          console.log(res)
          this.$message({
            message: "修改成功",
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
    showContent(data) {
      let note = data.note
      this.note = note
      // console.log(note)
      this.msg = note.content
      this.topic_list = data.topic_list
      this.topic = note.topic_id
    },
    onClick(e, editor) {
      console.log("Element clicked")
      console.log(e)
      console.log(editor)
    },
    // 清空内容
    clear() {
      this.$refs.editor.clear()
    },
  },
  computed: {},
  watch: {},
  mounted() {},
  beforeUnmount() {},
}
</script>
<style>
</style>