import { createRouter, createWebHistory } from 'vue-router'
import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

const router = createRouter({
  history: createWebHistory(qiankunWindow.__POWERED_BY_QIANKUN__ ? '/app/app-vue3/' : '/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/table',
      name: 'table',
      component: () => import('@/views/TableView.vue'),
    },
    {
      path: '/table2',
      name: 'table2',
      component: () => import('@/views/TableView.vue'),
    },
    {
      path: '/table3',
      name: 'table3',
      component: () => import('@/views/TableView.vue'),
    },
  ],
})

export default router
