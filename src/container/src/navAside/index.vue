<template>
  <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="collapse">
    <el-menu-item index="1">
      <el-icon>
        <el-icon-menu />
      </el-icon>
      <template #title> 首页 </template>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon>
        <el-icon-menu />
      </el-icon>
      <template #title> 图标选择器 </template>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon>
        <el-icon-menu />
      </el-icon>
      <template #title> 趋势标记 </template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
type isColl = {
  collapse: boolean
}
const props = defineProps<isColl>()

</script>

<style lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
