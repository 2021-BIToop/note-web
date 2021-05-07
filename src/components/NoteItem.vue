<template>
  <div>
    <el-row>
      <a href="#" @click="showContent">
        <el-col :span="16">
          <span>{{ title }}</span>
        </el-col>
        <el-col :span="6" :offset="2">
          {{ time }}
        </el-col>
      </a>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "NoteItem",
  components: {},
  props: ["title", "time"],
  data() {
    return {}
  },
  methods: {
    showContent() {},
  },
  computed: {},
  watch: {},
}
</script>
<style>
</style>