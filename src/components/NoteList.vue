<template>
  <el-collapse accordion>
    <el-collapse-item
      v-for="(cat, index) in categories"
      :key="index"
      :title="cat.catname"
      :name="cat.id"
    >
      <el-row class="description_bar">
        <el-col :span="20">
          <span>创建于 {{ cat.created_time }}</span>
        </el-col>
        <el-col :span="2" :offset="1">
          <el-button
            icon="el-icon-delete"
            circle
            size="mini"
            @click="search"
            type="danger"
          ></el-button>
        </el-col>
      </el-row>
      <NoteItem
        v-for="(note, index) in cat.notes"
        :key="index"
        :title="note.title"
        :time="note.time"
      >
      </NoteItem>
    </el-collapse-item>
  </el-collapse>
</template>
<script>
import NoteItem from "./NoteItem.vue"
export default {
  name: "NoteList",
  components: {
    NoteItem,
  },
  data() {
    return {
      categories: [
        {
          id: 1,
          rank: 0,
          created_time: "2021/02/22",
          catname: "默认分类",
          notes: [
            {
              id: "1",
              title: "示例标题1",
              time: "2021/05/01",
            },
            {
              id: "2",
              title: "示例标题2",
              time: "2021/05/01",
            },
          ],
        },
      ],
    }
  },
  methods: {},
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