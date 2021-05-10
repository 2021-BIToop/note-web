<template>
  <div>
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
    <button @click="clear">清空内容</button>
    <button @click="disabled = true">禁用</button>
    <button @click="disabled = false">启用</button>
  </div>
</template>
<script>
import TinymceEditor from "./tinymce-editor/tinymce-editor"
export default {
  name: "Main",
  components: {
    TinymceEditor,
  },
  data() {
    return {
      msg: "请输入内容",
      disabled: false,
      baseUrl: process.env.NODE_ENV === "production" ? "/vue-use-tinymce" : "",
      language: "zh_CN",
      skin: "oxide",
    }
  },
  methods: {
    showContent(note) {
      this.msg = note.content
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