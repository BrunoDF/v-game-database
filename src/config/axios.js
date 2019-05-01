// Libs
import axios from 'axios'

// Constants
import { LOGIN_ROUTE_NAME, IGDB_BASE_URL, HTTP_ERRORS } from './constants'

// Config
import disposeBag from '@/config/dispose-bag'
import store from '@/config/store'
import router from '@/config/router'


// Success handler
function requestSuccessHandler(config) {
  const token = store.getters['login/token']

  if (token)
    config.headers.common['user-key'] = token

  return { cancelToken: disposeBag.token, ...config }
}

// Error handler
async function responseErrorHandler(error) {
  if (error.response && error.response.status === HTTP_ERRORS.UNAUTHORIZED) {
    disposeBag.dispose(error.message)
    await store.dispatch('login/removeToken')
    router.push({ name: LOGIN_ROUTE_NAME })
  }

  console.error(error)
  throw error
}

// Axios instance
const customAxios = axios.create({
  baseURL: IGDB_BASE_URL
})

// Interceptors
customAxios.interceptors.request.use(requestSuccessHandler, undefined)
customAxios.interceptors.response.use(undefined, responseErrorHandler)

export default customAxios