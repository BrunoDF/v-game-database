<template>
  <div>
    <span>Games Page</span>
    <p>PS4</p>
    <p v-if="mostPopularForPS4.error">{{ mostPopularForPS4.error }}</p>
    <gdb-card-list :list="mostPopularForPS4.data" />

    <p>Xbox</p>
    <p v-if="mostPopularForXbox.error">{{ mostPopularForXbox.error }}</p>
    <gdb-card-list :list="mostPopularForXbox.data" />

    <p>Switch</p>
    <p v-if="mostPopularForSwitch.error">{{ mostPopularForSwitch.error }}</p>
    <gdb-card-list :list="mostPopularForSwitch.data" />
</div>
</template>

<script>
import GameStore from '../../store'

import { IGDB_PLATFORMS } from '@/config/constants'

import DisposeBag from '@/config/dispose-bag'

import GdbCardList from '../../../shared/components/gdb-card-list'

export default {
  components: {
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
  computed: {
    mostPopularForPS4() {
      return GameStore.state.mostPopular[IGDB_PLATFORMS.PS4]
    },
    mostPopularForXbox() {
      return GameStore.state.mostPopular[IGDB_PLATFORMS.XBOX_ONE]
    },
    mostPopularForSwitch() {
      return GameStore.state.mostPopular[IGDB_PLATFORMS.SWITCH]
    }
  }
}
</script>

