import axios from 'axios'
import axiosDefaults from 'axios/lib/defaults'

import { IGDB_BASE_URL } from './constants';

import store from '@/config/store'

// Request interceptor
export const requestAuthInterceptor = axios.interceptors.request.use(
  config => {
    const token = store.getters['login/token']

    if (token)
      config.headers.common['user-key'] = token

    return config
  },
  error => Promise.reject(error)
);

// BaseURL
axiosDefaults.baseURL = IGDB_BASE_URL