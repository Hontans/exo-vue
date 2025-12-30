import Quiz from '@/Quiz.vue'
import Todolist from '@/Todolist.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', redirect: '/App.vue'},
    {path: '/todolist', component: Todolist},
    {path: '/quiz', component: Quiz}
  ],
})

export default router