import Vue from 'vue'
import Vuex from 'vuex'
import dataRaw from "@/assets/data.json"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: null,
    popup: false,
    editedIdx: -1,
    editedRow: {
      artnumber: 0,
      name: '',
      brand: '',
      weight: 0,
      quantity: 0,
      price: 0,
      stock: 0
    },
    defaultRow: {
      artnumber: 0,
      name: '',
      brand: '',
      weight: 0,
      quantity: 0,
      price: 0,
      stock: 0
    }
  },
  mutations: {
    initData(state, payload) {
      state.data = payload
    },
    togglePopup(state) {
      state.popup = !state.popup
    },
    setEditedIdx(state, idx) {
      state.editedIdx = idx
    },
    setEditedRow(state, item) {
      console.log(item)
      state.editedRow = Object.assign({}, item)
    },
    setData(state) {
      if (state.editedIdx > -1) {
        Object.assign(state.data[state.editedIdx], state.editedRow)
      } else {
        state.editedRow.artnumber = Math.random().toString().substr(2, 7);
        state.data.unshift(state.editedRow)
      }
    },
    deleteDataRow(state, idx){
      state.data.splice(idx, 1)
    },
    resetToDefaultRow(state) {
      state.editedRow = Object.assign({}, state.defaultRow)
      state.editedIdx = -1
    }
  },
  actions: {
    initData(ctx) {
      let data = dataRaw;
      ctx.commit('initData', data)
    },
    togglePopup(ctx) {
      ctx.commit('togglePopup')
    },
    setEditedIdx(ctx, idx) {
      ctx.commit('setEditedIdx', idx)
    },
    setEditedRow(ctx, item) {
      ctx.commit('setEditedRow', item)
    },
    setData(ctx) {
      ctx.commit('setData')
    },
    deleteDataRow(ctx, idx) {
      ctx.commit('deleteDataRow', idx)
    },
    resetToDefaultRow(ctx) {
      ctx.commit('resetToDefaultRow')
    }
  },
  getters: {
    getData: state => {
      return state.data
    },
    getPopup: state => {
      return state.popup
    },
    getEditedRow: state => {
      return state.editedRow
    },
    getEditedIdx: state => {
      return state.editedIdx
    }
  }
})
