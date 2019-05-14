<template>
  <div class="game-main-view">
    <template v-for="platform in platforms">
      <gdb-platform-wrapper :platform="platform" :key="platform">
        <gdb-card-list :list="games[platform]" />
      </gdb-platform-wrapper>
    </template>
  </div>
</template>

<script>
import Vue from 'vue'

import { IGDB_PLATFORMS } from '@/config/constants'

import GamesService from '@/modules/games/services/games.service'
import GdbPlatformWrapper from '@/modules/games/components/gdb-platform-wrapper.vue'
import GdbCardList from '@/modules/shared/components/gdb-card-list.vue'

export default {
  components: {
    'gdb-platform-wrapper': GdbPlatformWrapper,
    'gdb-card-list': GdbCardList
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
