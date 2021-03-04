<template>
  <div class="pos">
    <el-row>
      <el-col :span='8'  class="pos-boder" id="pos-list">
        123
      </el-col>
      <el-col :span='16'>
        456
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name:'Pos',
  mounted() {
    var orderHeight = document.body.clientHeight;
    console.log(orderHeight)
    document.getElementById('pos-list').style.height=orderHeight+'px';
  }

}
</script>


<style scoped>
.pos {
  float: left;
  width: 93%;
  height: 100%;
  background-color: #EFF2F7;
  overflow: hidden;
}
.pos-boder {
  border-right: 2px solid #C0CCDA;
  background-color: #fff;
}
</style>
