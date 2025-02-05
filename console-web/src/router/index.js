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
      path: '/user',
      name: 'user',
      component: () => import('@/views/user/LoginView.vue'),
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('@/views/user/components/LoginForm.vue'),
        },
        {
          path: 'register',
          name: 'register',
          component: () => import('@/views/user/components/RegisterForm.vue'),
        }
      ]
    },

    // {
    //   path: '/:pathMatch(.*)*',
    //   name: 'NotFound',
    //   component: () => import('@/views/exception/404/index.vue'),
    // }
  ],
})

export default router
