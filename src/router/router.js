import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/pages/LoginPage.vue'
import RegisterPage from '@/pages/RegisterPage.vue'
import MainPage from '@/pages/MainPage.vue'
import UserPage from '@/pages/UserPage.vue'
import ExpensesPage from '@/pages/ExpensesPage.vue'


const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterPage
  },
  {
    path: '/main',
    name: 'main',
    component: MainPage
  }, 
  {
    path: '/expenses',
    name: 'expenses',
    component: ExpensesPage
  },
  {
    path: '/user',
    name: 'user',
    component: UserPage
  }, 
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
