import { createWebHistory, createRouter } from 'vue-router';

// 동적 import
const routes = [
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/components/Login') // 로그인
    },
    {
      path: '/joinPost',
      name: 'Join',
      component: () => import('@/components/JoinPost') // 회원가입
    },
    {
      path: '/hello',
      name: 'Hello',
      component: () => import('@/components/HelloWorld')
    }
  ];

export const router = createRouter({
    history: createWebHistory(),
    routes,
  });