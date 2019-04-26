import router from '@/config/router'

router.addRoutes([
  {
    path: '/game',
    name: 'games',
    meta: { auth: true },
    component: () => import(/* webpackChunkName: 'games' */ './views/main'),
    children: [
      {
        path: ':id',
        name: 'game-details',
        meta: {
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