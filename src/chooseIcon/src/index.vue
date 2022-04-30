<template>
  <el-button @click="handleClick" type="primary">
    <slot></slot>
  </el-button>

  <div class="h-choose-icon-dialog-body-height">
      <el-dialog :title="title" v-model="visible" :before-close="handleClose">
    <!--   :before-close="handleClose" -->
    <div class="container">
      <div 
      class="item"
      @click="clickItem(item)"
      v-for="(item, index) of Object.keys(ElIcons)" 
      :key="index">
        <div class="text">
          <!-- component vue是实现的动态组件 -->
          <component :is="`el-icon-${toLine(item)}`"></component>
        </div>
        <div>{{ item }}</div>
      </div>
    </div>
  </el-dialog>
  </div>
</template>

<script setup lang="ts">
import * as ElIcons from "@element-plus/icons-vue"
import { toLine } from "../../utils/index"
import { watch } from 'vue'
import { useCopy } from "../../hooks/useCopy";


// 父组件传值
const props = defineProps<{
  // 标题
  title: string,
  // 控制弹窗
  visible: boolean
}>()

// 修改父组件 visible 的值
const emits = defineEmits(['update:visible'])

// 显示弹出框
const handleClick = () => {
  emits('update:visible', !props.visible)
}

// 使用 watch 方法 改变 visible 的值都可以,  
// watch(() => props.visible, val => {
//   emits('update:visible', val)
// })

// 使用 elementUI 提供的 handleClose 在关闭前执行回调函数，将!props.visible 的值取反
const handleClose = () => {
  emits('update:visible', !props.visible)
}


// 点击item 复制函数
const clickItem = (item:string) => {
  // 处理字符串
  const text = `<el-icon-${toLine(item)} />`
  
  // 执行 hooks 中的 useCopy 的方法
  useCopy(text)  // 复制icon名

  // 将弹窗关闭 
  emits('update:visible', !props.visible)

}





</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  .item {
    width: 25%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 20px;
    cursor: pointer;
  }

  .text {
    font-size: 14px;
  }
}

svg {
  width: 2rem;
  height: 2rem;
}
</style>
