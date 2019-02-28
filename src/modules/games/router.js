import router from '@/config/router'

router.addRoutes([
  {
    path: '/',
    name: 'games',
    meta: { auth: true },
    components: {
      page: () => import(/* webpackChunkName: 'games' */ './views/main')
    }
  },

  {
    path: '/game/:id',
    name: 'game-detail',
    meta: {
      auth: true,
      showModal: true
    },
    components: {
      page: () => import(/* webpackChunkName: 'games' */ './views/main'),
      modal: () => import(/* webpackChunkName: 'game-detail' */ './views/detail')
    }
  }
])