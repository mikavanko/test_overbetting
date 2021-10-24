import axios from 'axios'

export default {
  state: {
    recognizedList: [],
    controller: new AbortController(),

  },
  mutations: {
    setRecognizedList(state, recognizedData){
      state.recognizedList.push(recognizedData)
    }
  },
  actions: {
    setRecognizedList({ commit }, recognizedData){
      commit('setRecognizedList', recognizedData)
    }
  },
  getters: {
    getRecognizedList: state => state.recognizedList,
    getRecognizedItem: state => id => {
      return state.recognizedList.find(el => el.name === id)
    },
    getController: state => state.controller
  },
}
