import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
    {
      // history模式需要通配所有路由，详见vue-router文档
      path: '/app/app-vue3/:pathMatch(.*)*',
      name: 'app-vue3',
      meta: {},
      // 微应用组件的容器
      component: () => import('@/components/SubContainer.vue'),
    },
  ],
})

export default router
