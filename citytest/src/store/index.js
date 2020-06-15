import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lengthLimit: 60,
    entries: [],
    isLoading: false,
    isLoadingInfo: false,
    model: null,
    search: null,
    cities: [],
    citiesInfo: []
  },
  mutations: {
    SET_LOADING(state, val) {
      state.isLoading = val;
    },
    SET_LOADING_INFO(state, val) {
      state.isLoadingInfo = val;
    },
    SET_ENTRIES(state, val) {
      state.entries = val;
    },
    SET_CITIES(state, val) {
      state.cities = val;
    },
    REMOVE_CITY(state, val) {
      if (val) {
        const idx = state.cities.indexOf(val)
        if (idx >= 0) state.cities.splice(idx, 1)
      } else {
        state.cities = []
      }
    },
    REMOVE_ENTRIES(state) {
      state.entries = [];
    },
    SET_CITIES_INFO(state, val) {
      state.citiesInfo = val;
    },
    REMOVE_CITIES_INFO(state) {
      state.citiesInfo = []
    }
  },
  actions: {
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
    REMOVE_ENTRIES(ctx) {
      ctx.commit('REMOVE_ENTRIES');
    },
    SET_LOADING(ctx, val) {
      ctx.commit('SET_LOADING', val);
    },
    SET_LOADING_INFO(ctx, val) {
      ctx.commit('SET_LOADING_INFO', val);
    },
    SET_CITIES(ctx, val) {
      ctx.commit('SET_CITIES', val);
    },
    REMOVE_CITY(ctx, val) {
      ctx.commit('REMOVE_CITY', val);
    },
    GET_CITIES_INFO(ctx) {
      const isLoading = this.getters.getLoadingInfo;

      if (isLoading) return;

      ctx.commit('SET_LOADING_INFO', '#e62e7a');

      const cities = this.getters.getCities;

      Promise.all(cities.map(city => fetch(city._links['city:item'].href)
        .then(res => res.json())))
        .then(res => { ctx.commit('SET_CITIES_INFO', res) })
        .finally(() => (ctx.commit('SET_LOADING_INFO', false)));
    },
    REMOVE_CITIES_INFO(ctx) {
      ctx.commit('REMOVE_CITIES_INFO');
    }
  },
  getters: {
    getLoading: state => {
      return state.isLoading
    },
    getLoadingInfo: state => {
      return state.isLoadingInfo
    },
    getEntries: state => {
      return state.entries
    },
    getCities: state => {
      return state.cities
    },
    getCitiesInfo: state => {
      return state.citiesInfo
    }
  }
})
