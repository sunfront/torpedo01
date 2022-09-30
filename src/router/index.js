// src/router/index.js
//import Vue from 'vue'
import {createApp} from 'vue'
import App from '../App'
// import Router from 'vue-router'
// import * as Router from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '@/components/Login' // 로그인 컴포넌트를 import 한다
import HelloWorld from '@/components/HelloWorld'

// 로그인 성공시, actions에서 store에 isAuth값을 true로 바꿔줬다. 그걸 이용한다.
import store from '@/vuex/store' 

const requireAuth = () => (from, to, next) => {
    if (store.getters.getIsAuth) return next() // isAuth === true면 페이지 이동
    next('/') // isAuth === false면 다시 로그인 화면으로 이동
  }

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/join',
      component: HelloWorld
    }    
  ]
})

// export default new Router({
//   routes: [
//     {
//       path: '/', // 첫 화면을 로그인 화면으로 설정한다
//       name: 'Login',
//       component: Login
//     },
//     {
//         path: '/', // 추가하는 path
//         name: 'HelloWorld',
//         component: HelloWorld, // 추가하는 컴포넌트
//         beforeEnter: requireAuth() // HelloWorld에 진입하기 전에 requireAuth 함수를 실행한다        
//       }    
//   ]
// })