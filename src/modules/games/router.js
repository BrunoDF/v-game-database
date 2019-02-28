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
    name: 'game-details',
    meta: {
      auth: true,
      showModal: true,
      modalOptions: {
        title: 'Detalhes'
      }
    },
    components: {
      page: () => import(/* webpackChunkName: 'games' */ './views/main'),
      modal: () => import(/* webpackChunkName: 'game-details' */ './views/details')
    }
  }
])