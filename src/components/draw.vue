<template>
  <div class="main">
    <div class="left">
      <div class="left_top">
        <img class="ma_pic" src="../assets/ma.jpg" alt="" />
      </div>
      <div class="left_bottom">
        <!-- 输入框 -->
        <input class="input_text" type="text" placeholder="请进行需要生成的图片描述" v-model="input_value" />
        <!-- 发送按钮 -->
        <div class="btn">
          <span class="title" @click="sendHandler">生成</span>
          <img src="../assets/arrar.png" alt="" />
        </div>
      </div>
    </div>
    <div class="right">
      <div class="right_top">
        <h4>生成参数</h4>
      </div>
      <div class="right_bttom">
        <div class="item">
          <div class="item_top">
            <div class="tip">基础模型</div>
            <div>
              <el-select v-model="value" class="m-2" placeholder="请选择模型" size="default" style="width: 150px">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
              </el-select>
            </div>
          </div>
          <div class="item_top">
            <div class="tip">图片风格</div>
            <div>
              <el-select :disabled="true" v-model="value" class="m-2" placeholder="待开放" size="default" style="width: 150px">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
              </el-select>
            </div>
          </div>
          <div class="item_top">
            <div class="tip">风格强度</div>
            <el-slider v-model="value1" style="width: 140px" />
          </div>
        </div>
        <div class="item">
          <div class="item_top">
            <div class="tip">图片尺寸</div>
            <div>
              <el-select v-model="pic_value" class="m-2" placeholder="请选择大小" size="default" style="width: 150px">
                <el-option v-for="item in pic_options" :key="item.id" :label="item.value" :value="item.value" />
              </el-select>
            </div>
          </div>
          <div class="item_top">
            <div class="tip">图片张数</div>
            <div>
              <el-input-number v-model="num" class="mx-4" :min="1" :max="5" controls-position="right" @change="handleChange" />
            </div>
          </div>
        </div>
        <button class="btns" @click="moreSetting">更多设置</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ElMessage } from 'element-plus'
import { reactive, ref } from 'vue'
const value = ref('')
const pic_value = ref('')
const value1 = ref('')
const options = reactive([
  {
    id: 1,
    value: '通用模型'
  },
  {
    id: 2,
    value: '二次元动漫'
  },
  {
    id: 3,
    value: '虚拟建模'
  },
  {
    id: 4,
    value: '人物写真'
  }
])
const pic_options = reactive([
  {
    id: 1,
    value: '(512x512)[1:1]'
  },
  {
    id: 2,
    value: '(512x680)[3:4]'
  },
  {
    id: 3,
    value: '(512x768)[2:3]'
  },
  {
    id: 4,
    value: '(680x512)[4:3]'
  },
  {
    id: 5,
    value: '(780x512)[3:2]'
  },
  {
    id: 6,
    value: '(912x512)[16:9]'
  }
])
const num = ref(1)
const handleChange = value => {
  console.log(value)
}

const sendHandler = () => {
  ElMessage({
    message: '当前只为演示demo,并未接入生成api，如需图片，请自行百度......',
    type: 'warning'
  })
}
const moreSetting = () => {
  ElMessage({
    message: '尚未实现...',
    type: 'warning'
  })
}
</script>

<style scoped>
.main {
  display: flex;
  justify-content: space-between;
  margin: 10px;
  height: calc(100vh - 80px);
  border-radius: 8px;
}
.left {
  display: flex;
  justify-content: center;
  flex: 1;
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
}
.right {
  padding: 10px;
  margin-left: 10px;
  border-radius: 5px;
  width: 300px;
  height: 100%;
  background-color: #fff;
}
.left_bottom {
  position: fixed;
  bottom: 20px;
  left: 0px;
  right: 00px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
}
.input_text {
  width: 40%;
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

.left_top {
  margin: 20px;
  width: 500px;
  height: 500px;
  border: 2px solid #eee;
  border-radius: 5px;
}
.ma_pic {
  width: 100%;
  height: 100%;
}
.right_top {
  padding: 10px 0px;
  border-bottom: 1px solid #ccc;
}
.right_bttom {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.item {
  padding: 10px 20px;
  margin: 10px;
  border-radius: 5px;
  width: 100%;
  height: 150px;
  border: 1px solid #ccc;
}
.item_top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0px;
}
.btns {
  width: 100%;
  height: 40px;
  border: none;
  background-color: rgb(0, 68, 255);
  opacity: 0.8;
  color: #fff;
  border-radius: 10px;
  cursor: pointer;
}
.tip {
  font-size: 14px;
  font-weight: 700;
}
</style>
