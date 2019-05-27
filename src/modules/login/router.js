import router from '@/config/router'

router.addRoutes([
  {
    path: '/',
    name: 'login',
    meta: {
      title: 'Login',
      auth: false
    },
    component: () => import(/* webpackChunkName: 'loginMainView' */ './views/main')
  }
])