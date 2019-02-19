import axios from 'axios'
import axiosDefaults from 'axios/lib/defaults'

import { IGDB_BASE_URL } from './constants';

// Request interceptor
export const requestAuthInterceptor = axios.interceptors.request.use(
  config => {
    const token = 'ca94fd027732ee92609eb738f1f17232' // store.token;
    if (token)
      config.headers.common['user-key'] = token

    return config
  },
  error => Promise.reject(error)
);

// BaseURL
axiosDefaults.baseURL = IGDB_BASE_URL