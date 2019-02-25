import Vue from 'vue'

import store from '@/config/store'
import GameService from './services/games.service'

import { IGDB_PLATFORMS } from '../../config/constants'

import './types/game.d';
import './types/platform.d';

const state = {
  mostPopular: {
    [IGDB_PLATFORMS.PS4]: {
      /** @type {Game[]} */
      data: [],
      loading: false,
      error: null
    },
    [IGDB_PLATFORMS.XBOX_ONE]: {
      /** @type {Game[]} */
      data: [],
      loading: false,
      error: null
    },
    [IGDB_PLATFORMS.SWITCH]: {
      /** @type {Game[]} */
      data: [],
      loading: false,
      error: null
    }
  }
}

const getters = {}

const actions = {
  async fetchMostPopular({ commit, state }, { platform, cancelToken }) {
    try {
      commit('fetchMostPopular', { platform })
      const games = await GameService.mostPopularByPlatform(platform, { cancelToken })
      commit('setMostPopular', { games, platform })
      return state.mostPopular[platform]
    } catch(error) {
      commit('errorMostPopular', { error, platform })
    }
  }
}

const mutations = {
  fetchMostPopular(state, { platform }) {
    const mostPopular = { loading: true, data: [], error: null }
    Vue.set(state.mostPopular, platform, mostPopular)
  },

  /** @param {Game[]} games */
  /** @param {Platform} platform */
  setMostPopular(state, { games, platform }) {
    const mostPopular = { loading: false, data: games, error: null }
    Vue.set(state.mostPopular, platform, mostPopular)
  },

  /** @param {Platform} platform */
  errorMostPopular(state, { error, platform }) {
    const mostPopular = { loading: false, data: [], error }
    Vue.set(state.mostPopular, platform, mostPopular)
  },
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
