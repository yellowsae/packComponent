import {createWebHistory, createRouter, RouteRecordRaw }  from 'vue-router'
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
        component: Home
      },
      {
        path: '/chooseIcon',
        component: () => import('../view/choose.vue')
        // component: Home
      },
      {
        path: '/chooseArea',
        // component: () => import('../view/choose.vue')
        component: () => import("../view/choseArea.vue")
      },
    ]
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})


export default router
