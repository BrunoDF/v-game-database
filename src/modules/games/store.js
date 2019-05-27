import Vue from 'vue'
import store from '@/config/store'

import GamesService from './services/games.service'

const state = {
  details: {
    data: null,
    loading: false,
    error: null
  }
}

const actions = {
  async fetchDetails({ commit }, { id }) { // context, payload
    try {
      commit('fetchDetails')
      const game = await GamesService.details(id)
      commit('setDetails', game)
    } catch(error) {
      commit('errorDetails', error)
    }
  }
}

const mutations = {
  fetchDetails(state) {
    const details = { loading: true, data: null, error: null }
    Vue.set(state, 'details', details)
  },

  setDetails(state, game) {
    const details = { loading: false, data: game, error: null }
    Vue.set(state, 'details', details)
  },

  errorDetails(state, error) {
    const details = { loading: false, data: null, error }
    Vue.set(state, 'details', details)
  }
}

const module = {
  namespaced: true,
  state,
  actions,
  mutations
}

store.registerModule('games', module)

export default module