import Vue from 'vue'

import store from '@/config/store'
import LoginService from './services/login.service'

const state = {
  authentication: {
    token   : localStorage.getItem('token') || null,
    loading : false,
    error   : null
  }
}

const getters = {
  isLoggedIn: state => !!state.authentication.token,
  token: state => state.authentication.token
}

const actions = {
  async fetchToken({ commit }, { username, password, cancelToken }) {
    try {
      commit('fetchToken')
      const token = await LoginService.login(username, password, { cancelToken })
      commit('setToken', token)
    } catch(error) {
      commit('errorToken', error)
    }
  },

  removeToken({ commit }) {
    try {
      LoginService.logout()
      commit('removeToken')
    } catch(error) {
      commit('errorToken', error)
    }
  }
}

const mutations = {
  fetchToken(state) {
    const data = { loading: true, token: null, error: null }
    Vue.set(state, 'authentication', data)
  },

  removeToken(state) {
    const data = { loading: false, token: null, error: null }
    Vue.set(state, 'authentication', data)
  },

  setToken(state, token) {
    const data = { loading: false, error: null, token }
    Vue.set(state, 'authentication', data)
  },

  errorToken(state, error) {
    const data = { loading: false, token: null, error }
    Vue.set(state, 'authentication', data)
  },
}

const module = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

store.registerModule('login', module)

export default module
