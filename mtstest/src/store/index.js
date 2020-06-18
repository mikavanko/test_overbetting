import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import AxiosPlugin from 'vue-axios-cors';

Vue.use(Vuex)
Vue.use(AxiosPlugin)

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

export default new Vuex.Store({
  state: {
    token: '',
    historiesLoading: false,
    authLoading: false,
    url: 'http://176.118.28.5:8000/',
    proxy: 'https://thingproxy.freeboard.io/fetch/',
    next: 'http://176.118.28.5:8000/histories/?limit=3',
    histories: [],
    name: ''
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
    },
    SET_NEXT(state, url) {
      state.next = url
    },
    SET_DATA(state, data) {
      state.histories = state.histories.concat(data)
    },
    SET_NAME(state, name){
      state.name = name
    },
  },
  actions: {
    LOGIN(ctx, user) {
      ctx.state.authLoading = true
      ctx.state.historiesLoading = true

      axios({ url: `${this.state.proxy}${this.state.url}api/token/`, data: user, method: 'post' })
        .then(resp => {
          const data = resp.data
          ctx.state.authLoading = false
          
          ctx.dispatch('SET_NAME', data.user)
          ctx.commit('SET_TOKEN', data.access)
          ctx.dispatch('GET_HISTORIES')
        })
    },
    GET_HISTORIES(ctx) {
      ctx.state.historiesLoading = true
      const AuthStr = `Bearer ${this.state.token}`;
      axios.get(`${this.state.proxy}${this.state.next}`, { headers: { Authorization: AuthStr } })
        .then(response => {
          ctx.state.historiesLoading = false

          const data = response.data
          console.log(data)
          ctx.dispatch('SET_NEXT', data.next)
          ctx.dispatch('SET_DATA', data.results)
        })
        .catch((error) => {
          console.log('error ' + error);
        });
    },
    SET_NAME({commit}, name){
      commit('SET_NAME', name)
    },
    SET_NEXT({ commit }, url) {
      commit('SET_NEXT', url)
    },
    SET_DATA({ commit }, data) {
      commit('SET_DATA', data)
    }
  },
  getters: {
    GET_AUTH_LOADING(state){
      return state.authLoading
    },
    GET_HISTORIES_LOADING(state){
      return state.historiesLoading
    },
    GET_HISTORIES(state){
      return state.histories
    },
    GET_NAME(state){
      return state.name
    },
    GET_NEXT(state){
      return state.next
    },
  },
  modules: {
  }
})
