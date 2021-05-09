<template>
  <div>
    <el-row>
      <a href="#" @click="showContent">
        <el-col :span="17">
          <span>title placeholder----</span>
        </el-col>
        <el-col :span="5" :offset="4">
          {{ time }}
        </el-col>
      </a>
      <el-col :span="2" :offset="6">
        <el-button
          size="mini"
          type="text"
          icon="el-icon-delete"
          @click="deleteNote"
        ></el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "NoteItem",
  components: {},
  props: ["note", "time"],
  data() {
    return {}
  },
  methods: {
    showContent() {},
    deleteNote() {
      this.$emit("deleteNote", {
        user_id: this.note.user_id,
        topic_id: this.note.topic_id,
        note_id: this.note.note_id,
      })
    },
  },
  computed: {},
  watch: {},
}
</script>
<style>
</style>