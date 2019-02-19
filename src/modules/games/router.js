import router from '@/config/router'

router.addRoutes([
  {
    path: '/',
    name: 'games',
    meta: { auth: true },
    component: () => import(/* webpackChunkName: 'games' */ './containers/main')
  }
])