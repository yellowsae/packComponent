/**
 * 用来全局组件注册
 */

 import { App } from 'vue'
 import chooseIcon from './src/index.vue'
 
 // 让这个组件可以通过 use 的形式可以使用
 
 export default {
   install(app: App) {
     app.component('m-choose-icon', chooseIcon)
   }
 }
 