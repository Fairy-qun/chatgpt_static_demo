import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/session'
  },
  {
    path: '/session',
    component: () => import('../components/main.vue')
  },
  {
    path: '/person_center',
    component: () => import('../components/personCenter.vue')
  },
  {
    path: '/draw',
    component: () => import('../components/draw.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
