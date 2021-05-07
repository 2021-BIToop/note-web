<template>
  <div>
    <el-row>
      <el-col :span="18">
        <el-input size="mini" v-model="searchKey"></el-input>
      </el-col>
      <el-col :span="4" :offset="2">
        <a href="#" @click="search">搜索</a>
      </el-col>
    </el-row>
    <el-row>
      <p>搜索，排序功能区</p>
    </el-row>
    <NoteList></NoteList>
  </div>
</template>

<script>
import NoteList from "./NoteList.vue"
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
  },
  computed: {},
  watch: {},
}
</script>

<style>
</style>