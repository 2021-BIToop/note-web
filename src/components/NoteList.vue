<template>
  <el-collapse accordion>
    <el-collapse-item 
    v-for="(cat, index) in categories"
    :key="index"
    :title="cat.catname"
    :name="index">
      <NoteItem
      v-for="(note,index) in cat.notes"
      :key="index"
      :title="note.title"
      :time="note.time">
      </NoteItem>
    </el-collapse-item>
   
  </el-collapse>
</template>
<script>
import  NoteItem  from "./NoteItem.vue"
export default {
  name: 'NoteList',
  components: {
    NoteItem
  },
  data() {
    return {
      categories:[
        {
          catname:'默认分类',
          notes:[
            {
              id : '1',
              title: '示例标题1',
              time: '2021/05/01'
            },
            {
              id : '2',
              title: '示例标题2',
              time: '2021/05/01'
            }
          ]
        }
      ]
    }
  },
  methods:{
    
  },
  computed:{
    
  },
  watch: {
    
  }
}
</script>
<style>
  
</style>