import router from '@/config/router'

router.addRoutes([
  {
    path: '/about',
    name: 'about',
    meta: { auth: true },
    component: () => import(/* webpackChunkName: 'about' */ './containers/main')
  }
])