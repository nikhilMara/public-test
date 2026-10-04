import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { pages } from './pages'
import Home from '@/pages/Home.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: Home, meta: { title: 'Overview' } },
  ...pages.map((p) => ({
    path: `/${p.path}`,
    name: p.path,
    component: p.component,
    meta: { title: p.title, category: p.category }
  })),
  { path: '/:pathMatch(.*)*', name: 'not-found', component: () => import('@/pages/NotFound.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 })
})

router.afterEach((to) => {
  document.title = to.meta.title ? `${to.meta.title} · Highrise Playground` : 'Highrise Playground'
})

export default router
