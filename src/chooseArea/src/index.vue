<template>
  <div>
    <el-select clearable placeholder="请选择省份" v-model="province">
      <el-option :value="item.name" v-for="item in areas" :key="item.code" :label="item.name">
      </el-option>
    </el-select>
    <el-select clearable :disabled="!province" style="margin: 0 10px" placeholder="请选择市区" v-model="city">
      <el-option :value="item.name" v-for="item in selectCity" :key="item.code" :label="item.name"></el-option>
    </el-select>
    <el-select clearable :disabled="!province || !city" placeholder="请选择区域" v-model="area">
      <el-option :value="item.name" v-for="item in selectArea" :key="item.code" :label="item.name"></el-option>
      <!-- <el-option :value="item.name" v-for="item in selectArea" :key="item.code" :label="item.name" ></el-option> -->
    </el-select>
  </div>
</template>

<script setup lang="ts">
import allArea from '../lib/pac-code.json'
import { ref, computed } from 'vue'
// 拷贝数据
const areas = ref(allArea)


const province = ref<string>('')
const area = ref<string>('')
const city = ref<string>('')



// 城市下拉框的所有值
// 使用计算属性
let selectCity = computed(() => {
  if (!province) return []
  else {
    const cities = areas.value.find(item => item.name === province.value)?.children
    return cities
  }
})



// 区域下拉框的所有值
const selectArea = computed(() => {
  if (!province) return []
  else {
    const area = selectCity.value?.find(item => item.name === city.value)?.children
    return area
  }
})
</script>

<style scoped>
</style>
