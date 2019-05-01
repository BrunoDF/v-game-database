import router from '@/config/router'

router.addRoutes([
  {
    path: '/game',
    name: 'games',
    meta: {
      title: 'Games',
      auth: true
    },
    component: () => import(/* webpackChunkName: 'games' */ './views/main'),
    children: [
      {
        path: ':id',
        name: 'game-details',
        meta: {
          title: 'Carregando...',
          modalOptions: {
            show: true,
            title: 'Detalhes'
          }
        },
        components: {
          modal: () => import(/* webpackChunkName: 'game-details' */ './views/details')
        }
      }
    ]
  }

])