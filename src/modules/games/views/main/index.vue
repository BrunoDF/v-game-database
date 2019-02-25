<template>
  <div>
    <span>Games Page</span>
    <p>PS4</p>
    <p v-if="comingSoonForPS4.error">{{ comingSoonForPS4.error }}</p>
    <gdb-card-list :list="comingSoonForPS4.data" />

    <p>Xbox</p>
    <p v-if="comingSoonForXbox.error">{{ comingSoonForXbox.error }}</p>
    <gdb-card-list :list="comingSoonForXbox.data" />

    <p>Switch</p>
    <p v-if="comingSoonForSwitch.error">{{ comingSoonForSwitch.error }}</p>
    <gdb-card-list :list="comingSoonForSwitch.data" />
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

