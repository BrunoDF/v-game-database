import store from './store'
import { LOGIN_ROUTE_NAME, AFTER_LOGIN_ROUTE_NAME } from './constants'

function validateRouteAccess(routeTo) {
  const authRequired  = routeTo.matched.some(route => route.meta.auth)
  const authenticated = store.getters['login/isLoggedIn']

  const authRequiredAndNotAuthenticated = authRequired && !authenticated
  const authenticatedInLoginRoute       = authenticated && routeTo.name === LOGIN_ROUTE_NAME

  let opts = true

  if (authRequiredAndNotAuthenticated) {
    opts = { name: LOGIN_ROUTE_NAME }
  } else if (authenticatedInLoginRoute) {
    opts = { name: AFTER_LOGIN_ROUTE_NAME }
  }

  return opts
}

export default {
  validateRouteAccess
}