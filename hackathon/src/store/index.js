export default {
  state: {
    recognizedList: [],
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
    getRecognizedList(state) {
      return state.recognizedList
    },
    getRecognizedItem: state => id => {
      console.log('id', id)
      return state.recognizedList.find(el => el.name === id).data
    }
  },
}
