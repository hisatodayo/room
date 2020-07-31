import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import axios from 'axios'
import Echo from 'laravel-echo'
import Pusher from 'pusher-js'

import env from '@/utils/env'

window.Pusher = Pusher

Vue.prototype.$Echo = new Echo({
  broadcaster: 'pusher',
  key: env.PUSHER_APP_KEY,
  cluster: env.PUSHER_APP_CLUSTER,
  encrypted: true
})

Vue.config.productionTip = false

Vue.prototype.$axios = store.$axios = axios.create({
  baseURL: env.API_URL,
  withCredentials: true,
  timeout: 30000,
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
