<template>
  <div>
    <div class="main">
      <div><left></left></div>
      <div class="right">
        <div>
          <Header></Header>
        </div>
        <div>
          <!-- <Main></Main> -->
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from './components/header.vue'
import left from './components/left.vue'
import Main from './components/main.vue'
</script>

<style scoped>
.right {
  flex: 1;
}
.main {
  display: flex;
  justify-content: space-between;
}
</style>
