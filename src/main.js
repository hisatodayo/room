import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import axios from 'axios'
import env from '@/utils/env'

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
