import router from '@/config/router'

router.addRoutes([

  {
    path: '/games',
    name: 'games',
    meta: {
      title: 'Games',
      auth: true
    },
    component: () => import(/* webpackChunkName: 'gamesMainView' */ '@/modules/games/views/main.vue'),
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
          modal: () => import(/* webpackChunkName: 'gamesDetailsView' */ '@/modules/games/views/details.vue')
        }
      }
    ]
  },


])