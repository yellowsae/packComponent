import {createMemoryHistory, createRouter, RouteRecordRaw }  from 'vue-router'
import Home from '../view/Home.vue'
import Container from '../container/src/index.vue'

// RouteRecordRaw   表示vue数组的类型
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Container,
    children: [
      {
        path: '/',
        component: () => import('../view/choose.vue')
      },
      {
        path: '/home',
        // component: () => import('../view/choose.vue')
        component: Home
      }
    ]
  }
]

const router = createRouter({
  routes,
  history: createMemoryHistory()
})


export default router
