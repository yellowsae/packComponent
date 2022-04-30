<template>
  <el-container>
    <el-aside width="auto">
      <nav-aside :collapse="isCollapse"></nav-aside>
    </el-aside>
    <el-container>
      <el-header>
        <nav-header v-model:collapse="isCollapse"></nav-header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script lang="ts" setup>

import NavAside from './navAside/index.vue'
import NavHeader from './navHeader/index.vue'
import { ref } from "vue";
const isCollapse = ref(false);

</script>

<style lang="scss">
.el-container .el-header {
  padding: 0;
}
</style>
