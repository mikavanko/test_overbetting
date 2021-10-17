import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import axios from 'axios'
import routes from '@/router'
import storeRaw from '@/store'

Vue.prototype.$axios = axios

Vue.use(Vuex)
Vue.use(VueRouter)

const store = new Vuex.Store(storeRaw)

const router = new VueRouter({
  routes,
  // mode: "history",
})

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
