import router from '@/config/router'

router.addRoutes([
  {
    path: '/',
    name: 'login',
    meta: { auth: false },
    component: () => import(/* webpackChunkName: 'login' */ './views/main')
  }
])