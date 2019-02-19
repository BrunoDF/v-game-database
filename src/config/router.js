import Vue from 'vue'
import Router from 'vue-router'
// import store from './store'
import { REDIRECT_ROUTE_NAME } from './constants'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{ path: '*', redirect: { name: REDIRECT_ROUTE_NAME } }]
})

// GUARD
// router.beforeEach((to, from, next) => {
//   const authRequired = to.matched.some(route => route.meta.auth)
//   const authenticated = store.getters['login/isLoggedIn']

//   const authRequiredAndNotAuthenticated = authRequired && !authenticated
//   const authenticatedInLoginRoute = authenticated && to.name === LOGIN_ROUTE

//   let opts = true

//   if (authRequiredAndNotAuthenticated) {
//     opts = { name: LOGIN_ROUTE }
//   } else if (authenticatedInLoginRoute) {
//     opts = { name: AFTER_LOGIN_ROUTE }
//   }

//   next(opts)
// })

export default router
