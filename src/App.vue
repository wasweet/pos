<template>
  <div id="app">
    <LeftNavBar></LeftNavBar>
    
    <router-view></router-view>

  </div>
</template>

<script>
  import LeftNavBar from './components/common/LeftNavBar.vue'
export default {
  name: 'App',
  components:{
    LeftNavBar
  }
}
</script>

<style scoped>
/*  .main {
    float: right;
    width: 90%;
    height: 100%;
    background-color: #EFF2F7;
    overflow: hidden;
  } */
</style>
