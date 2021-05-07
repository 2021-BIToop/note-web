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
        @click="search"
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
.search_bar {
  padding-block: 5px;
  padding-inline: 5px;
}
.control_bar {
  padding-block: 5px;
  padding-inline: 5px;
}
</style>