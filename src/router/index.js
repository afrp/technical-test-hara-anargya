import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Overview from '../pages/Overview.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/overview',
    name: 'Overview',
    component: Overview
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
