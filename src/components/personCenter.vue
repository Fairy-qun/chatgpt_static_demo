<template>
  <div class="main">
    <div class="top">
      <div class="top_title">
        <img class="pic_img" src="../assets/huiyuan.png" alt="" />
        <span class="title">开通会员</span>
      </div>
      <div class="top_text">会员权益（开通会员可享受多项功能...感受AIGC飞一般的生成数据...,您值得拥有）</div>
    </div>
    <!-- 底部 -->
    <div class="bottom">
      <!-- 标题 -->
      <div class="buy">会员购买</div>
      <el-divider style="margin: 10px 0" />
      <div class="card_items">
        <div :class="[card_item, item.isCheck ? 'active' : 'card_item']" v-for="item in card_list" :key="item.id" @click="cardHandler(item)">
          <!-- 标题 -->
          <div class="item_titles">{{ item.title }}</div>
          <div class="item_txt">{{ item.txt1 }}</div>
          <div class="item_txt">{{ item.txt2 }}</div>
          <div class="item_txt">{{ item.txt3 }}</div>
          <div class="item_new_price"><i class="link">￥</i>{{ item.new_price }}</div>
          <div style="text-decoration: line-through">
            <div class="item_old_price">￥{{ item.old_price }}</div>
          </div>
          <div class="youhui" v-if="item.id === 1">特惠</div>
          <div class="hot" v-if="item.id === 3">热门</div>
        </div>
      </div>
      <!-- 购买须知 -->
      <div class="buy_explain">
        <div class="explains">购买须知</div>
        <div v-html="buy_explain"></div>
      </div>
      <!-- 支付方式 -->
      <div class="buy_style">
        <button class="zhifubao" @click="orderHandler">支付宝支付</button>
        <button class="wechat" @click="orderWechatHandler">微信支付</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ElMessage } from 'element-plus'
import { reactive, ref } from 'vue'

const buy_explain = ref('ChatGPT-demo旨在帮助用户快速解决各种问题<br/>如果您支持我们，请选择相应的套餐项目，以便能够获得更多的服务!<br/>非常感谢您的支持！<br/>')
const card_list = reactive([
  {
    id: 1,
    title: '月卡会员',
    txt1: '问答50次/日',
    txt2: 'AI绘画30张/日',
    txt3: '文档字数上限10000字',
    old_price: '20',
    new_price: '15',
    isCheck: true
  },
  {
    id: 2,
    title: '年费会员',
    txt1: '问答100次/日',
    txt2: 'AI绘画50张/日',
    txt3: '文档字数上限20000字',
    old_price: '50',
    new_price: '60',
    isCheck: false
  },
  {
    id: 3,
    title: '永久会员',
    txt1: '问答200次/日',
    txt2: 'AI绘画80张/日',
    txt3: '文档字数上限50000字',
    old_price: '188',
    new_price: '128',
    isCheck: false
  },
  {
    id: 4,
    title: '超级永久会员',
    txt1: '问答888次/日',
    txt2: 'AI绘画200张/日',
    txt3: '文档字数上限100000字',
    old_price: '299',
    new_price: '188',
    isCheck: false
  }
])
const cardHandler = item => {
  console.log(item)
  card_list.forEach(e => {
    if (e.id !== item.id) {
      e.isCheck = false
    } else {
      e.isCheck = true
    }
  })
}
const orderWechatHandler = () => {
  ElMessage({
    message: '当前为测试项目，如果想要花钱，请直接给我......',
    type: 'warning'
  })
}
const orderHandler = () => {
  ElMessage({
    message: '当前为测试项目，如果想要花钱，请直接给我......',
    type: 'warning'
  })
}
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
}
.top {
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px;
  /* width: 100%; */
  height: 100px;
  border-radius: 5px;
  background-color: #fff;
}
.top_title {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.pic_img {
  width: 30px;
  height: 30px;
}
.title {
  font-weight: 700;
  font-size: 20px;
  color: #1e1c1c;
}
.top_text {
  margin-top: 20px;
  color: #100f0f;
  font-size: 18px;
}
.bottom {
  padding: 10px 20px;
  /* display: flex; */
  /* flex-direction: column;
  justify-content: center; */
  margin: 10px;
  height: calc(100vh - 200px);
  border-radius: 5px;
  background-color: #fff;
}
.buy {
  font-weight: 700;
}

.card_items {
  display: flex;
  justify-content: space-evenly;
}
.card_item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 220px;
  height: 300px;
  border: 2px solid #eee;
  border-radius: 10px;
  cursor: pointer;
}

.item_titles {
  margin-top: 20px;
  font-weight: 700;
  font-size: 20px;
}
.item_txt {
  margin: 5px 0px;
  opacity: 0.8;
  font-size: 14px;
}
.item_new_price {
  margin: 30px 0px;
  font-weight: 700;
  font-size: 32px;
}
.item_old_price {
  font-size: 20px;
  color: #5a5959;
}
.link {
  font-size: 14px;
}
.active {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 220px;
  height: 300px;
  border-radius: 10px;
  border: 2px solid rgb(0, 68, 255);
  cursor: pointer;
}
.youhui {
  position: absolute;
  top: -5px;
  right: -10px;
  background-color: rgb(0, 68, 255);
  color: #fff;
  padding: 2px 5px;
  font-size: 10px;
  border-radius: 8px;
  opacity: 0.9;
}
.hot {
  position: absolute;
  top: -5px;
  right: -10px;
  background-color: rgb(0, 68, 255);
  color: #fff;
  padding: 2px 5px;
  font-size: 10px;
  border-radius: 8px;
  opacity: 0.9;
}
.buy_explain {
  padding: 10px;
  margin: 10px 50px;
  width: 90%;
  height: 90px;
  border-radius: 5px;
  background-color: #eee;
  font-size: 14px;
  opacity: 0.8;
}
.explains {
  font-weight: 700;
}
.zhifubao {
  margin-right: 20px;
  width: 200px;
  height: 40px;
  background-color: rgb(0, 68, 255);
  border: none;
  opacity: 0.8;
  color: #fff;
  font-size: 20px;
  border-radius: 5px;
  cursor: pointer;
}
.wechat {
  width: 200px;
  height: 40px;
  background-color: rgb(130, 223, 110);
  border: none;
  opacity: 0.8;
  color: #fff;
  font-size: 20px;
  border-radius: 5px;
  cursor: pointer;
}
.buy_style {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
