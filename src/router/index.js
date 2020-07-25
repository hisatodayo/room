import Vue from 'vue'
import VueRouter from 'vue-router'
import Top from '@/views/Top'

import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Top',
    component: Top
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "register" */ '@/views/Register.vue')
  },
  {
    path: '/post',
    name: 'Post',
    component: () => import(/* webpackChunkName: "post" */ '@/views/Post.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach(async (to, from, next) => {
  const logout = () => {
    next({ name: 'Login' })
  }

  if (/\/logout\/?/.test(to.path)) {
    await store.dispatch('login/logout')
    logout()
    return
  }

  const user = await store.dispatch('user/checkLogin')

  if (/\/login\/?/.test(to.path) || /\/register\/?/.test(to.path)) {
    next()
    return
  }

  if (!user || !user.id) {
    // ログイン失敗、ユーザー情報取得に失敗した場合はログアウト
    logout()
    return
  }
  next()
})

export default router
