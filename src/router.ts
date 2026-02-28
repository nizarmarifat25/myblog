import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import TugasDetail from '@/components/TugasDetail.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/tugas/:id', component: TugasDetail }
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0, behavior: 'smooth' }
  }
})