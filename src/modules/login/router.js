import router from '@/config/router'

router.addRoutes([
  {
    path: '/',
    name: 'login',
    meta: { auth: false },
    components: {
      page: () => import(/* webpackChunkName: 'login' */ './views/main')
    }
  }
])