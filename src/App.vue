<template>
  <v-app dark>
    <v-container fluid fill-height>
      <games-main-view />
    </v-container>
  </v-app>
</template>

<script>
import GamesMainView from '@/modules/games/views/main.vue'

export default {
  components: {
    'games-main-view': GamesMainView
  }
}
</script>
