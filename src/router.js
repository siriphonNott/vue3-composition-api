import { createWebHistory, createRouter } from 'vue-router'
import Home from '@/views/Home.vue'
import OptionsApi from '@/views/OptionsApi.vue'
import CompositionApi from '@/views/CompositionApi.vue'
import LifecycleHooks from '@/views/LifecycleHooks.vue'
import About from '@/views/About.vue'
import PageNotFound from '@/views/PageNotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/options-api',
    name: 'OptionsApi',
    component: OptionsApi,
  },
  {
    path: '/composition-api',
    name: 'CompositionApi',
    component: CompositionApi,
  },
  {
    path: '/lifecycle-hooks',
    name: 'LifecycleHooks',
    component: LifecycleHooks,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: "/:catchAll(.*)",
    component: PageNotFound,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
