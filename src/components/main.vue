<template>
  <div class="main">
    <!-- 头部 -->
    <div class="top">
      <div class="top_left">对话列表</div>
      <div class="top_right" @click="clearText">清空对话</div>
    </div>
    <div class="center" id="area">
      <div v-for="(item, index) in myList" :key="index">
        <div class="my" v-if="item.id === 'my'">
          <div class="my_left">{{ item.value }}</div>
          <div class="pic_img">
            <div class="pic_s">
              <img class="img_pic" :src="item.img" alt="" />
            </div>
            <div class="my_name">{{ item.txt }}</div>
          </div>
        </div>
        <div class="gpt" v-if="item.id === 'gpt'">
          <div class="gpt_left">
            <div class="pic_s">
              <img class="img_pic" :src="item.img" alt="" />
            </div>
            <div class="my_name">{{ item.txt }}</div>
          </div>
          <div class="gpt_right" id="text" v-html="item.value"></div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <!-- 输入框 -->
      <input class="input_text" type="text" placeholder="请输入对话内容，尽量描述仔细一点" v-model="input_value" />
      <!-- 发送按钮 -->
      <div class="btn">
        <span class="title" @click="sendHandler">发送</span>
        <img src="../assets/arrar.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import imgs from '../assets/vue.svg'
import { reactive, ref, watch, onMounted } from 'vue'
const myList = ref([
  {
    value: '欢迎使用ChatGPT会话AI智能，在下方输入框输入内容进行对话......',
    img: imgs,
    txt: 'ChatGPT',
    id: 'gpt'
  }
])
const data_text = ref('hhhh')

onMounted(() => {
  const gptObj = {
    id: 'gpt',
    value: '我只是一个gpt对话测试,请不要依赖我，自己找寻答案......',
    img: imgs,
    txt: 'ChatGPT'
  }
  localStorage.setItem('gpt', JSON.stringify(gptObj))
})
const clearText = () => {
  const obj = {
    value: '欢迎使用ChatGPT会话AI智能，在下方输入框输入内容进行对话......',
    img: imgs,
    txt: 'ChatGPT',
    id: 'gpt'
  }
  myList.value = []
  myList.value.push(obj)
}
const input_value = ref('')
let newObj = reactive({})
const sendHandler = () => {
  console.log(input_value.value)
  const obj = {
    id: 'my',
    value: input_value.value,
    img: imgs,
    txt: '我'
  }
  myList.value.push(obj)
  newObj = JSON.parse(localStorage.getItem('gpt'))
  newObj.value = `您搜素的问题是: <i>${input_value.value}</i>。` + newObj.value
  input_value.value = ''
  console.log(newObj)
  myList.value.push(newObj)
  const area = document.querySelector('#area')
  console.log(area)
  area.scrollTop = area.scrollHeight
}
// 监听键盘事件
window.addEventListener('keydown', e => {
  if (input_value.value === '') {
    return
  }
  if (e.key == 'Enter') {
    sendHandler()
  }
})
</script>

<style scoped>
#text {
  overflow: hidden;
  font-family: monospace;
  white-space: nowrap;
  /* animation */
  animation: typewriter 2s steps(20) forwards;
}
@keyframes typewriter {
  from {
    width: 0;
  }
  to {
    width: 55%;
  }
}
.noText {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
}
.gpt {
  margin: 20px 0px;
  display: flex;
  align-items: start;
}
.gpt_right {
  margin-left: 10px;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #fff;
  font-size: 14px;
  font-family: 'Microsoft Yahei';
}

.gpt_left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60px;
}
.main {
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 20px 20px;
  height: calc(100vh - 80px);
  border-radius: 8px;
  background-color: #fff;
}
.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
}
.top_right {
  color: #0f08d8;
  font-size: 14px;
  cursor: pointer;
}
.center {
  flex: 1;
  padding: 10px;
  background-color: #f8f9f9;
  border-radius: 5px;
  overflow-y: scroll;
}
.my {
  display: flex;
  align-items: center;
  justify-content: end;
}
.my_left {
  padding: 10px 20px;
  height: 40px;
  color: #fff;
  border-radius: 10px;
  background-color: #000;
  font-family: 'Microsoft Yahei';
  font-size: 14px;
}
.my_name {
  font-size: 10px;
}
.pic_img {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
}

.pic_s {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: #000;
  border-radius: 50%;
}
.img_pic {
}
.bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}
.input_text {
  flex: 1;
  height: 40px;
  border-radius: 10px;
  border: 2px solid rgb(0, 68, 255);
  padding: 0px 10px;
  margin-right: 20px;
}
.btn {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100px;
  height: 40px;
  background-color: rgb(0, 68, 255);
  opacity: 0.8;
  color: #fff;
  border-radius: 10px;
}
.title {
  font-size: 20px;
  cursor: pointer;
}
img {
  width: 20px;
  height: 20px;
}
</style>
