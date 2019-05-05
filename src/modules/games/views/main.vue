<template>
  <div class="game-main-view">
    <template v-for="platform in platforms">
      <gdb-platform-wrapper :platform="platform" :key="platform">
        <gdb-card v-for="game in games[platform]" :game="game" :key="game.id" />
      </gdb-platform-wrapper>
    </template>
  </div>
</template>

<script>
import Vue from 'vue'

import { IGDB_PLATFORMS } from '@/config/constants'

import GamesService from '@/modules/games/services/games.service'
import GdbPlatformWrapper from '@/modules/games/components/gdb-platform-wrapper.vue'
import GdbCard from '@/modules/shared/components/gdb-card.vue'

export default {
  components: {
    'gdb-platform-wrapper': GdbPlatformWrapper,
    'gdb-card': GdbCard
  },
  async created() {
    this.platforms.map(async (platform) => {
      const result = await GamesService.mostPopularByPlatform(platform)
      Vue.set(this.games, platform, result)
    })
  },
  data() {
    return {
      platforms: Object.values(IGDB_PLATFORMS),
      games: {}
    }
  }
}
</script>
