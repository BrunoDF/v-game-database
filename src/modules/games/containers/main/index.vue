<template>
  <div>
    <span>Games Page</span>
    <p>PS4</p>
    <p v-if="comingSoonForPS4.error">{{ comingSoonForPS4.error }}</p>
    <ul>
      <li v-for="gameRelease in comingSoonForPS4.data" :key="gameRelease.id">
        <img :src="gameRelease.game.cover_path" />
      </li>
    </ul>

    <p>Xbox</p>
    <p v-if="comingSoonForXbox.error">{{ comingSoonForXbox.error }}</p>
    <ul>
      <li v-for="gameRelease in comingSoonForXbox.data" :key="gameRelease.id">
        <img :src="gameRelease.game.cover_path" />
      </li>
    </ul>

    <p>Switch</p>
    <p v-if="comingSoonForSwitch.error">{{ comingSoonForSwitch.error }}</p>
    <ul>
      <li v-for="gameRelease in comingSoonForSwitch.data" :key="gameRelease.id">
        <img :src="gameRelease.game.cover_path" />
      </li>
    </ul>
</div>
</template>

<script>
import GameStore from '../../store'

import { IGDB_PLATFORMS } from '@/config/constants'

import DisposeBag from '@/config/dispose-bag'

export default {
  created() {
    this.disposeBag = new DisposeBag()
  },
  mounted() {
    const cancelToken = this.disposeBag.token

    this.$store.dispatch('games/fetchComingSoon', { platform: IGDB_PLATFORMS.PS4, cancelToken })
    this.$store.dispatch('games/fetchComingSoon', { platform: IGDB_PLATFORMS.XBOX_ONE, cancelToken })
    this.$store.dispatch('games/fetchComingSoon', { platform: IGDB_PLATFORMS.SWITCH, cancelToken })
  },
  beforeDestroy() {
    this.disposeBag.cancel('Platforms requests canceled')
  },
  computed: {
    comingSoonForPS4() {
      return GameStore.state.comingSoon[IGDB_PLATFORMS.PS4]
    },
    comingSoonForXbox() {
      return GameStore.state.comingSoon[IGDB_PLATFORMS.XBOX_ONE]
    },
    comingSoonForSwitch() {
      return GameStore.state.comingSoon[IGDB_PLATFORMS.SWITCH]
    }
  }
}
</script>

