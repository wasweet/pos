<template>
  <div class="pos">
    <el-row>
      <el-col :span='8'  class="pos-boder" id="pos-list">
        <el-tabs>
          <el-tab-pane label="订单" name="">
          <el-table :data="tableData"
                    border
                    style="width: 100%;">
            <el-table-column prop="goodsName" label="商品名称" width="120"></el-table-column>
            <el-table-column prop="count" label="数量" width="100"></el-table-column>
            <el-table-column prop="price" label="金额" width="100"></el-table-column>
            <el-table-column  label="操作"  fixed="right">
              <template slot-scope="scope">
                <el-button type="text" @click="addOrderLsit(scope.row)">添加</el-button>
                <el-button type="text" @click="delSingleGoods(scope.row)">删除</el-button>
              </template>

            </el-table-column>
          </el-table>
          <div class="total">
            <p class="total-text"><small>数量:</small>{{totalCount}}</p>
            <p class="total-text"><small>金额:</small>{{totalPrice}}</p>
          </div>
          <div class="three-button">
            <el-button type="warning">挂单</el-button>
          <el-button type="danger" @click="delAllGoods">删除</el-button>
          <el-button type="success" @click="ckeckOut">结账</el-button>
          </div>

          </el-tab-pane>
          <el-tab-pane label="挂单" name="">挂单

          </el-tab-pane>
          <el-tab-pane label="外卖" name="">外卖

          </el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span='16'>
       <div>
         <div class="goodsTitle">常用商品</div>
         <ul class="goods-list">
         	<li v-for="goods in Goods" @click="addOrderLsit(goods)">
            <span>{{goods.goodsName}}</span>
            <span class="price">¥ {{goods.price}} 元</span>
          </li>
         </ul>
       </div>
       <div class="goods-type">
         <el-tabs>
           <el-tab-pane label="汉堡">
             <div class="goods-type-list">
               <ul>
               	<li v-for="typegoods in typeGoods" @click="addOrderLsit(typegoods)">
                  <span class="foodImg"><img :src="typegoods.goodsImg" width="100%"></span>
                  <span class="foodName">{{typegoods.goodsName}}</span>
                  <span class="foodPrice">￥{{typegoods.price}}元</span>
                </li>
               </ul>
             </div>
           </el-tab-pane>
           <el-tab-pane label="小食"></el-tab-pane>
           <el-tab-pane label="饮料"></el-tab-pane>
           <el-tab-pane label="套餐"></el-tab-pane>
         </el-tabs>
       </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  // import Axios from 'axios'
export default {
  name:'Pos',
  created() {
    Aixos.get().then().catch()
  },
  mounted() {
    var orderHeight = document.body.clientHeight;
    console.log(orderHeight)
    document.getElementById('pos-list').style.height=orderHeight+'px';
  },
  data() {
    return {
      totalCount: 0,
      totalPrice: 0,
      tableData:[],
      Goods:[
                {
                    goodsId:1,
                    goodsName:'香辣鸡腿堡',
                    price:18
                }, {
                    goodsId:2,
                    goodsName:'田园鸡腿堡',
                    price:15
                }, {
                    goodsId:3,
                    goodsName:'和风汉堡',
                    price:15
                }, {
                    goodsId:4,
                    goodsName:'快乐全家桶',
                    price:80
                }, {
                    goodsId:5,
                    goodsName:'脆皮炸鸡腿',
                    price:10
                }, {
                    goodsId:6,
                    goodsName:'魔法鸡块',
                    price:20
                }, {
                    goodsId:7,
                    goodsName:'可乐大杯',
                    price:10
                }, {
                    goodsId:8,
                    goodsName:'雪顶咖啡',
                    price:18
                }, {
                    goodsId:9,
                    goodsName:'大块鸡米花',
                    price:15
                }, {
                    goodsId:20,
                    goodsName:'香脆鸡柳',
                    price:17
                }],
      typeGoods:[{
                    goodsId:1,
                    goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",
                    goodsName:'香辣鸡腿堡',
                    price:18
                }, {
                    goodsId:2,
                    goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
                    goodsName:'田园鸡腿堡',
                    price:15
                }, {
                    goodsId:3,
                    goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos004.jpg",
                    goodsName:'和风汉堡',
                    price:15
                }, {
                    goodsId:4,
                     goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
                    goodsName:'快乐全家桶',
                    price:80
                }, {
                    goodsId:5,
                     goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
                    goodsName:'脆皮炸鸡腿',
                    price:10
                }, {
                    goodsId:6,
                     goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos004.jpg",
                    goodsName:'魔法鸡块',
                    price:20
                }, {
                    goodsId:7,
                     goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",
                    goodsName:'可乐大杯',
                    price:10
                }, {
                    goodsId:8,
                     goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
                    goodsName:'雪顶咖啡',
                    price:18
                }, {
                    goodsId:9,
                     goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
                    goodsName:'大块鸡米花',
                    price:15
                }, {
                    goodsId:20,
                     goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
                    goodsName:'香脆鸡柳',
                    price:17
                }],
    }
  },
  methods:{
    //添加商品到订单栏
    addOrderLsit(goods) {

      let isHave = false //默认不存在
        //  先判断订单列表中是否有改商品
        for(let i = 0; i < this.tableData.length; i++) {
          if(this.tableData[i].goodsId == goods.goodsId) {
            isHave = true; //存在
          }
        }
        if(isHave) {//根据isHave的值判断订单列表中是否已经有此商品
          //存在  数量添加
          let arr = this.tableData.filter(item => item.goodsId == goods.goodsId)
          arr[0].count++
        } else {//不存在 放入新数组中
           let newGoods = {goodsId:goods.goodsId,goodsName:goods.goodsName,price:goods.price,count:1}
           this.tableData.push(newGoods)
        }
        //计算数量和金额
         this.getAllMoney()
    },
    //删除单个商品
    delSingleGoods(goods) {
      this.tableData = this.tableData.filter(item => item.goodsId !== goods.goodsId)
      //计算数量和金额
      this.getAllMoney();
    },
    delAllGoods() {
      this.tableData = [];
      this.totalCount = 0;
      this.totalPrice = 0;
    },
    //获取 金额 和 数量 的变化
    getAllMoney() {
      this.totalCount = 0;
      this.totalPrice = 0;
      if(this.tableData) {
        this.tableData.forEach((item) => {
          this.totalCount += item.count;
          this.totalPrice = this.totalPrice + (item.price * item.count)
        })
      }
    },
    ckeckOut() {
      if(this.totalCount != 0) {
        this.$message({
          message:'结账成功',
          type:'success'
        })
        this.tableData = [];
        this.totalCount = 0;
        this.totalPrice = 0;
      } else {
        this.$message.error({
          message:'购物车为空'
        })
      }
    }
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
    .three-button {
      text-align: center;
      margin-top: 10px;
    }
  .goodsTitle {
    width: 100%;
     padding: 10px;
     border-bottom: 1px solid #C0CCDA;
     background-color: #fff;

  }
  .goods-list li{
      list-style: none;
          float:left;
          border:1px solid #E5E9F2;
          padding:10px;
          margin:5px;
          background-color:#fff;
  }
  .price {
    color:#42B983
  }
  .goods-type {
    clear: both;
    margin: 10px;
  }
  .goods-type-list li{
    list-style: none;
           width:23%;
           border:1px solid #E5E9F2;
           height: auot;
           overflow: hidden;
           background-color:#fff;
           padding: 2px;
           float:left;
           margin: 2px;
  }
  .goods-type-list li span {
    display: block;
    float: left;
  }
  .foodImg{
         width: 40%;
     }
     .foodName{
         font-size: 18px;
         padding-left: 10px;
         color:brown;

     }
     .foodPrice{
         font-size: 16px;
         padding-left: 10px;
         padding-top:10px;
     }
     .total {
       display: flex;
       background-color: #FFFFFF;
       border-bottom: 1px solid #2C3E50
     }
     .total-text {
       flex: 1;
       text-align: center;
     }
</style>
