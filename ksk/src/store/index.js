import Vue from 'vue';
import Vuex from 'vuex';
import { map } from 'lodash';
import CardAdapter from '../adapters/Card';
import Sort from '../enums/Sort';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cards: null,
    filteredCards: null,
    numberFilter: '',
    typeFilter: '',
    sort: null,
  },
  getters: {
    getCards: (state) => state.cards,
    getFilteredCards: (state) => state.filteredCards,
    getNumberFilter: (state) => state.numberFilter,
  },
  mutations: {
    initCards(state, cards) {
      Vue.set(state, 'cards', cards);
      Vue.set(state, 'filteredCards', cards);
    },
    updateCards(state, cards) {
      Vue.set(state, 'cards', cards);
    },
    filterCards(state, number = state.numberFilter, type = state.typeFilter) {
      let filteredCards = state.cards
        .filter((c) => c.number.toLowerCase()
          .includes(number.toLowerCase()));

      if (type) {
        filteredCards = filteredCards.filter((c) => c.type === type);
      }

      if (state.sort) {
        filteredCards = filteredCards.sort((a, b) => {
          if (a.number > b.number) {
            return state.sort === Sort.asc ? 1 : -1;
          }
          if (a.number < b.number) {
            return state.sort === Sort.asc ? -1 : 1;
          }

          return 0;
        });
      }

      Vue.set(state, 'filteredCards', filteredCards);
    },
    setNumberFilter(state, filterStr) {
      Vue.set(state, 'numberFilter', filterStr);
    },
    setTypeFilter(state, filterStr) {
      Vue.set(state, 'typeFilter', filterStr);
    },
    setSort(state, sort) {
      Vue.set(state, 'sort', sort);
    },
  },
  actions: {
    loadCards({ commit }, rawCards) {
      const cards = map(rawCards, CardAdapter);
      commit('initCards', cards);
    },
    removeCardById({ commit, state }, id) {
      const cards = [...state.cards];
      const idx = cards.findIndex((c) => c.id === id);
      cards.splice(idx, 1);

      commit('updateCards', cards);
      commit('filterCards', state.numberFilter);
    },
    filterByNumber({ commit }, filterStr) {
      commit('setNumberFilter', filterStr);
      commit('filterCards');
    },
    filterByType({ commit }, filterStr) {
      commit('setTypeFilter', filterStr);
      commit('filterCards');
    },
    sortCards({ commit }, sort) {
      commit('setSort', sort);
      commit('filterCards');
    },
  },
  modules: {
  },
});
