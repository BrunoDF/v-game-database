import Vue from 'vue'
import Router from 'vue-router'

import disposeBag from './dispose-bag'
import auth from './auth'
import meta from './meta'

import { REDIRECT_ROUTE_NAME } from './constants'

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
  const routeAccess = auth.validateRouteAccess(to)

  next(routeAccess)
})

router.afterEach(() => {
  meta.setPageTitle()
  disposeBag.create()
})

export default router
