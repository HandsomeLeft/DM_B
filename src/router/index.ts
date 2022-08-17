import { createRouter, createWebHashHistory } from 'vue-router'
import { RouteRecordRaw } from 'vue-router'
import local_cache from '@/utils/cache'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('../views/main/main.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not_found',
    component: () => import('@/views/not_found/not_found.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

//导航守卫
router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = local_cache.get_cache('token')
    if (!token) {
      return '/login'
    }
  }
})

export default router
