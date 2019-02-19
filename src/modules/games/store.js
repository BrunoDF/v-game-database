import Vue from 'vue'

import store from '@/config/store'
import GameService from './services/games.service'

import { IGDB_PLATFORMS } from '../../config/constants'

import './types/game.d';
import './types/game_release_date.d';
import './types/platform.d';

const state = {
  allGames: {
    /** @type {Game[]} */
    data: [],
    loading: false,
    error: null
  },
  comingSoon: {
    [IGDB_PLATFORMS.PS4]: {
      /** @type {GameReleaseDate[]} */
      data: [],
      loading: false,
      error: null
    },
    [IGDB_PLATFORMS.XBOX_ONE]: {
      /** @type {GameReleaseDate[]} */
      data: [],
      loading: false,
      error: null
    },
    [IGDB_PLATFORMS.SWITCH]: {
      /** @type {GameReleaseDate[]} */
      data: [],
      loading: false,
      error: null
    }
  }
}

const getters = {}

const actions = {
  async fetchAllGame({ commit, state }) {
    try {
      commit('fetchAllGame')
      const games = await GameService.allGames()
      commit('setAllGames', games)
      return state.allGames
    } catch(error) {
      commit('errorAllGames', error)
    }
  },

  async fetchComingSoon({ commit, state }, { platform, cancelToken }) {
    try {
      commit('fetchComingSoon', { platform })
      const gamesReleaseDate = await GameService.comingSoon(platform, { cancelToken })
      commit('setComingSoon', { gamesReleaseDate, platform })
      return state.comingSoon[platform]
    } catch(error) {
      commit('errorComingSoon', { error, platform })
    }
  }
}

const mutations = {
  fetchAllGame(state) {
    const allGames = { loading: true, data: [], error: null }
    Vue.set(state, 'allGames', allGames)
  },

  /** @param {Game[]} games */
  setAllGames(state, games) {
    const allGames = { loading: false, data: games, error: null }
    Vue.set(state, 'allGames', allGames)
  },

  errorAllGames(state, error) {
    const allGames = { loading: false, data: [], error }
    Vue.set(state, 'allGames', allGames)
  },

  fetchComingSoon(state, { platform }) {
    const comingSoon = { loading: true, data: [], error: null }
    Vue.set(state.comingSoon, platform, comingSoon)
  },

  /** @param {GameReleaseDate[]} gamesReleaseDate */
  /** @param {Platform} platform */
  setComingSoon(state, { gamesReleaseDate, platform }) {
    const comingSoon = { loading: false, data: gamesReleaseDate, error: null }
    Vue.set(state.comingSoon, platform, comingSoon)
  },

  /** @param {Platform} platform */
  errorComingSoon(state, { error, platform }) {
    const comingSoon = { loading: false, data: [], error }
    Vue.set(state.comingSoon, platform, comingSoon)
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
