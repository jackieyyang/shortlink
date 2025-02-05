import { createRouter, createWebHistory } from 'vue-router'
import HomeVIew from "@/views/home/HomeVIew.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeVIew,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/user/LoginView.vue'),
    },
    // {
    //   path: '/:pathMatch(.*)*',
    //   name: 'NotFound',
    //   component: () => import('@/views/exception/404/index.vue'),
    // }
  ],
})

export default router
