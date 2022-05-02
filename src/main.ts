import { toLine } from './utils/index';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入图标组件 
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import mUI from './components'



const app = createApp(App)

// 全局注册icon 
for (let i in ElementPlusIconsVue) {
  app.component(`el-icon-${toLine(i)}`, (ElementPlusIconsVue as any)[i])
}


app.use(router).use(ElementPlus).use(mUI)
app.mount('#app')
