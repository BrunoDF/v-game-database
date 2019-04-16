import Vue from 'vue'

import store from '@/config/store'
import GameService from './services/games.service'

import { IGDB_PLATFORMS } from '@/config/constants'

const state = {
  details: {
    data: null,
    loading: false,
    error: null
  },
  mostPopular: {
    [IGDB_PLATFORMS.PS4]: {
      data: [],
      loading: false,
      error: null
    },
    [IGDB_PLATFORMS.XBOX_ONE]: {
      data: [],
      loading: false,
      error: null
    },
    [IGDB_PLATFORMS.SWITCH]: {
      data: [],
      loading: false,
      error: null
    }
  }
}

const getters = {}

const actions = {
  async fetchDetails({ commit }, { id, cancelToken }) {
    try {
      commit('fetchDetails')
      const game = await GameService.details(id, { cancelToken })
      commit('setDetails', game)
    } catch(error) {
      commit('errorDetails', error)
    }
  },

  async fetchMostPopular({ commit }, { platform, cancelToken }) {
    try {
      commit('fetchMostPopular', { platform })
      const games = await GameService.mostPopularByPlatform(platform, { cancelToken })
      commit('setMostPopular', { games, platform })
    } catch(error) {
      commit('errorMostPopular', { error, platform })
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
  },

  fetchMostPopular(state, { platform }) {
    const mostPopular = { loading: true, data: [], error: null }
    Vue.set(state.mostPopular, platform, mostPopular)
  },

  setMostPopular(state, { games, platform }) {
    const mostPopular = { loading: false, data: games, error: null }
    Vue.set(state.mostPopular, platform, mostPopular)
  },

  errorMostPopular(state, { error, platform }) {
    const mostPopular = { loading: false, data: [], error }
    Vue.set(state.mostPopular, platform, mostPopular)
  }
}

const module = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

store.registerModule('games', module)

export default module
