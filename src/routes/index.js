import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home.vue'
import Workspace from './Workspace.vue'

export default createRouter({
  // hash / history
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/workspaces',
      component: Workspace
    }
  ]
})
