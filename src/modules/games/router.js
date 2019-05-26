import router from '@/config/router'

router.addRoutes([

  {
    path: '/games',
    name: 'games',
    meta: {
      title: 'Games'
    },
    component: () => import('@/modules/games/views/main.vue'), /* webpackChunkName: 'gamesMainView' */
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
          modal: () => import('@/modules/games/views/details.vue') /* webpackChunkName: 'gamesDetailsView' */
        }
      }
    ]
  },


])