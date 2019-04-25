import Vue from 'vue'

import { LOGIN_ROUTE_NAME, AFTER_LOGIN_ROUTE_NAME } from '@/config/constants'

import Router from '@/config/router'
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
  async fetchToken({ commit }, { username, password }) {
    try {
      commit('fetchToken')
      const token = await LoginService.login(username, password)
      commit('setToken', token)

      Router.push({ name: AFTER_LOGIN_ROUTE_NAME })
    } catch(error) {
      commit('errorToken', error)
    }
  },

  removeToken({ commit }) {
    try {
      LoginService.logout()
      commit('removeToken')

      Router.push({ name: LOGIN_ROUTE_NAME })
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
