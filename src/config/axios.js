import axios from 'axios'
import axiosDefaults from 'axios/lib/defaults'

import { LOGIN_ROUTE_NAME, IGDB_BASE_URL } from './constants';

import store from '@/config/store'
import router from '@/config/router'

// Request interceptor
export const requestAuthInterceptor = axios.interceptors.request.use(config => {
    const token = store.getters['login/token']

    if (token)
      config.headers.common['user-key'] = token

    return config
  },
  error => Promise.reject(error)
);

// Response interceptor
export const responseAuthInterceptor = axios.interceptors.response.use(undefined, async (error) => {
  if (error.response && error.response.status === 401) {
    await store.dispatch('login/removeToken')
    router.push({ name: LOGIN_ROUTE_NAME })
  }

  throw error
});

// BaseURL
axiosDefaults.baseURL = IGDB_BASE_URL