<template>
<div>
  <el-row>
    <el-col :span="16">
      <span>{{title}}</span>
    </el-col>
    <el-col :span="6" :offset="2">
      {{time}}
    </el-col>
  </el-row>
</div>
</template>
<script>
export default {
  name: 'NoteItem',
  components: {
    
  },
  props:["title", "time"],
  data() {
    return {
      
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