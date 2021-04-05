<template>
  <div class="leftnavbar">
    <ul>
    	<li>
        <i class="icon iconfont icon-shoucangxuanzhong"></i>
         <div class="text">收银</div>
      </li>
      <li>
        <i class="icon iconfont icon-shoucangxuanzhong"></i>
         <div class="text">店铺</div>
      </li>
      <li>
        <i class="icon iconfont icon-shoucangxuanzhong"></i>
         <div class="text">商品</div>
      </li>
      <li>
        <i class="icon iconfont icon-home2"></i>
         <div class="text">会员</div>
      </li>
      <li>
        <i class="icon iconfont icon-gouwuchexuanzhong"></i>
         <div class="text">统计</div>
      </li>
      <li>
        <i class="icon iconfont icon-shezhi">
          <div class="text">设置</div>
        </i>
      </li>
    </ul>
  </div>
</template>

<script>
  export default{

  }
</script>

<style scoped>
  .leftnavbar {
    color: #fff;
    background-color: aqua;
    height: 100%;
    float: left;
    width: 7%;
  }
  .text {
    font-size: 20px;
  }
  .icon {
    font-size: 40px;
  }
  .leftnavbar ul {
    padding: 0px;
  }
  .leftnavbar li {
    list-style: none;
    text-align: center;
    border-bottom: 1px solid #2C3E50;
    padding: 10px;
  }
</style>
