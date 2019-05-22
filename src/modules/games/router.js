import router from '@/config/router'

router.addRoutes([

  {
    path: '/games',
    name: 'games',
    component: () => import('@/modules/games/views/main.vue'), /* webpackChunkName: 'gamesMainView' */
  }

])