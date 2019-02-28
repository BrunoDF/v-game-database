<template>
  <div class="gdb-games-main-view">
    <gdb-platform-wrapper :platform="PS4">
      <p v-if="mostPopularForPS4.error">{{ mostPopularForPS4.error }}</p>
      <gdb-card-list :list="mostPopularForPS4.data" />
    </gdb-platform-wrapper>

    <gdb-platform-wrapper :platform="XONE">
      <p v-if="mostPopularForXbox.error">{{ mostPopularForXbox.error }}</p>
      <gdb-card-list :list="mostPopularForXbox.data" />
    </gdb-platform-wrapper>

    <gdb-platform-wrapper :platform="SWITCH" >
      <p v-if="mostPopularForSwitch.error">{{ mostPopularForSwitch.error }}</p>
      <gdb-card-list :list="mostPopularForSwitch.data" />
    </gdb-platform-wrapper>
</div>
</template>

<script>
import { IGDB_PLATFORMS } from '@/config/constants'

import DisposeBag from '@/config/dispose-bag'

import GdbPlatformWrapper from '../../components/gdb-platform-wrapper'
import GdbCardList from '../../../shared/components/gdb-card-list'

export default {
  components: {
    'gdb-platform-wrapper' : GdbPlatformWrapper,
    'gdb-card-list': GdbCardList
  },
  created() {
    this.disposeBag = new DisposeBag()
  },
  mounted() {
    const cancelToken = this.disposeBag.token

    this.$store.dispatch('games/fetchMostPopular', { platform: IGDB_PLATFORMS.PS4, cancelToken })
    this.$store.dispatch('games/fetchMostPopular', { platform: IGDB_PLATFORMS.XBOX_ONE, cancelToken })
    this.$store.dispatch('games/fetchMostPopular', { platform: IGDB_PLATFORMS.SWITCH, cancelToken })
  },
  beforeDestroy() {
    this.disposeBag.cancel('Platforms requests canceled')
  },
  data() {
    return {
      PS4: IGDB_PLATFORMS.PS4,
      XONE: IGDB_PLATFORMS.XBOX_ONE,
      SWITCH: IGDB_PLATFORMS.SWITCH
    }
  },
  computed: {
    mostPopularForPS4() {
      return this.$store.state.games.mostPopular[IGDB_PLATFORMS.PS4]
    },
    mostPopularForXbox() {
      return this.$store.state.games.mostPopular[IGDB_PLATFORMS.XBOX_ONE]
    },
    mostPopularForSwitch() {
      return this.$store.state.games.mostPopular[IGDB_PLATFORMS.SWITCH]
    }
  }
}
</script>

<style lang="scss" scoped>
.gdb-games-main-view {
  display: flex;
  flex-direction: column;
  height: inherit;
}
</style>


