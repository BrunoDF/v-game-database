import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

import disposeBag from './dispose-bag'

import { LOGIN_ROUTE_NAME, AFTER_LOGIN_ROUTE_NAME, REDIRECT_ROUTE_NAME } from './constants'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{ path: '*', redirect: { name: REDIRECT_ROUTE_NAME } }]
})

// GUARD
router.beforeResolve((to, from, next) => {
  disposeBag.dispose('Route changed')

  next()
})

router.beforeEach((to, from, next) => {

  const authRequired = to.matched.some(route => route.meta.auth)
  const authenticated = store.getters['login/isLoggedIn']

  const authRequiredAndNotAuthenticated = authRequired && !authenticated
  const authenticatedInLoginRoute = authenticated && to.name === LOGIN_ROUTE_NAME

  let opts = true

  if (authRequiredAndNotAuthenticated) {
    opts = { name: LOGIN_ROUTE_NAME }
  } else if (authenticatedInLoginRoute) {
    opts = { name: AFTER_LOGIN_ROUTE_NAME }
  }

  next(opts)
})

router.afterEach(() => {
  disposeBag.create()
})

export default router
