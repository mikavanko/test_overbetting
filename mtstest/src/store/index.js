import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import AxiosPlugin from 'vue-axios-cors';

Vue.use(Vuex)
Vue.use(AxiosPlugin)

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user : {}
  },
  mutations: {
  },
  actions: {
    LOGIN({commit}, user) {
      // return new Promise(() => {
        // commit('auth_request')
        console.log(user)
        axios({url: 'http://176.118.28.5:8000/api/token/', data: user, method: 'post', headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
        }})
        .then(resp => {
          // const token = resp.data.token
          // const user = resp.data.user
          // localStorage.setItem('token', token)
          // axios.defaults.headers.common['Authorization'] = token
          // commit('auth_success', token, user)
          console.log(resp, commit)
          // resolve(resp)
        })
        .catch(() => {
          // commit('auth_error')
          // localStorage.removeItem('token')
          // reject(err)
        })
      // })
    },
    GET_ENTRIES(ctx, val) {
      const isLoading = this.getters.getLoading;

      if (isLoading) return;


      // Lazily load input items
      if (val.length) {
        ctx.commit('SET_LOADING', '#e62e7a');

        fetch(`https://api.teleport.org/api/cities/?search=${val}`)
          .then(res => res.json())
          .then(res => {
            const cityEntries = res._embedded['city:search-results'];
            ctx.commit('SET_ENTRIES', cityEntries);

          })
          .catch(err => {
            console.log(err);
          })
          .finally(() => (ctx.commit('SET_LOADING', false)));
      }
    },
  },
  modules: {
  }
})
 