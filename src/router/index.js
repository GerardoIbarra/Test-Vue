import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TodoList from '../views/Dashboard.vue'
import Timer from '../views/TimerView.vue'
import GitView from '../views/GithubView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/TodoList',
      name: 'TodoList',
      component: TodoList,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Timer',
      name: 'Timer',
      component: Timer,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/GitView',
      name: 'GitView',
      component: GitView,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

export default router
