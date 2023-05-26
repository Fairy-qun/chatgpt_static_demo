<template>
  <div class="main">
    <!-- 左边 -->
    <div class="left">
      <img src="../assets/line.png" alt="" style="margin-left: 20px" />
      <span>Vip用户</span>
    </div>
    <div class="right">
      <div class="pic">
        <img class="imgs" src="../assets/vue.svg" alt="" />
      </div>
      <div class="name">我是ChatGPT</div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background-color: #fff;
  /* border-bottom: 2px solid #ccc;
  border-left: 1px solid #ccc; */
  box-shadow: 0 2px 1px 1px #eee;
}
.left {
  display: flex;
  align-items: center;
}
img {
  width: 30px;
  height: 30px;
}
span {
  margin-left: 10px;
}
.pic {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #eee;
}
.right {
  display: flex;
  align-items: center;
}
.name {
  margin: 0 20px 0px 5px;
}
</style>
