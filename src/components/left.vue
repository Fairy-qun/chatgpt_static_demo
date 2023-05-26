<template>
  <div class="main">
    <!-- 名称 -->
    <div class="name">
      <h3>Chatgpt-demo</h3>
    </div>
    <div class="item_area">
      <!-- 元素 -->
      <div v-for="item in list" :key="item.id">
        <div :class="item.isCheck ? 'active' : 'item'" @click="goToHandler(item)">
          <div class="imgs"><img :src="item.isCheck ? item.img3 : item.img1" alt="" /></div>
          <div>{{ item.name }}</div>
          <div class="imgss"><img :src="item.isCheck ? item.img4 : item.img2" alt="" /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import img1 from '../assets/email_black.png'
import img2 from '../assets/arr_b.png'
import img3 from '../assets/email.png'
import img4 from '../assets/arrar.png'
import { useRouter } from 'vue-router'
import { ref, reactive } from 'vue'

const list = reactive([
  {
    id: 1,
    name: 'AI智能对话',
    img1: img1,
    img2: img2,
    img3: img3,
    img4: img4,
    isCheck: true
  },
  {
    id: 2,
    name: 'AI智能绘画',
    img1: img1,
    img2: img2,
    img3: img3,
    img4: img4,
    isCheck: false
  },
  {
    id: 3,
    name: '个人中心',
    img1: img1,
    img2: img2,
    img3: img3,
    img4: img4,
    isCheck: false
  }
])
const router = useRouter()
const goToHandler = item => {
  switch (item.id) {
    case 1:
      router.replace('/session')
      list.forEach(e => {
        if (e.id !== item.id) {
          e.isCheck = false
        }
      })
      item.isCheck = true
      console.log(item)
      break
    case 2:
      router.replace('/draw')
      list.forEach(e => {
        if (e.id !== item.id) {
          e.isCheck = false
        }
      })
      item.isCheck = true
      break
    case 3:
      router.replace('/person_center')
      list.forEach(e => {
        if (e.id !== item.id) {
          e.isCheck = false
        }
      })
      item.isCheck = true
      console.log(item)
      break
  }
}
</script>

<style scoped>
.name {
  margin-top: 20px;
  font-weight: 700;
  font-size: 30px;
  opacity: 0.8;
}
h3 {
  font-family: 'Microsoft Yahei';
}
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 300px;
  height: calc(100vh);
  background-color: #fff;
}
.imgs {
  width: 20px;
  height: 20px;
}
.imgss {
  width: 16px;
  height: 16px;
}
img {
  width: 100%;
  height: 100%;
}
.item {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 20px 0px;
  border-radius: 10px;
  width: 220px;
  height: 60px;
  cursor: pointer;
}
.active {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 20px 0px;
  border-radius: 10px;
  width: 220px;
  height: 60px;
  background-color: rgb(0, 68, 255);
  opacity: 0.8;
  color: #fff;
  font-weight: 700;
}
.item_area {
  height: calc(100vh - 40px);
}
</style>
