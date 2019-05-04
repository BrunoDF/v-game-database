<template>
  <div class="game-main-view">
    <template v-for="game in games">
      <gdb-card :game="game" :key="game.id" />
    </template>
  </div>
</template>

<script>
import { IGDB_PLATFORMS } from '@/config/constants'

import GamesService from '@/modules/games/services/games.service'
import GdbCard from '@/modules/shared/components/gdb-card.vue'

export default {
  components: {
    'gdb-card': GdbCard
  },
  async created() {
    this.games = await GamesService.mostPopularByPlatform(IGDB_PLATFORMS.SWITCH)
  },
  data() {
    return {
      games: []
    }
  }
}
</script>
