import { createRouter, createWebHashHistory } from 'vue-router'
import { allRouter } from './allRouter'

const router = createRouter({
  history: createWebHashHistory(),
  routes: allRouter
})

export default router