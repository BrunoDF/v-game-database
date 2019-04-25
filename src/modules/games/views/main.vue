<template>
  <v-layout row align-center>
    <v-flex xs12>
      <div>
        <v-btn color="pink" dark left fab @click="logout">
          <font-awesome-icon size="2x" :icon="['fa', 'sign-out-alt']" />
        </v-btn>
      </div>

      <gdb-card-wrapper :platform="PS4">
        <p v-if="mostPopularForPS4.error">{{ mostPopularForPS4.error }}</p>
        <gdb-card-list :list="mostPopularForPS4.data" />
      </gdb-card-wrapper>

      <gdb-card-wrapper :platform="XONE">
        <p v-if="mostPopularForXbox.error">{{ mostPopularForXbox.error }}</p>
        <gdb-card-list :list="mostPopularForXbox.data" />
      </gdb-card-wrapper>

      <gdb-card-wrapper :platform="SWITCH">
        <p v-if="mostPopularForSwitch.error">{{ mostPopularForSwitch.error }}</p>
        <gdb-card-list :list="mostPopularForSwitch.data" />
      </gdb-card-wrapper>

    </v-flex>
  </v-layout>
</template>

<script>
import { IGDB_PLATFORMS } from '@/config/constants'

import GdbCardWrapper from '@/modules/games/components/gdb-card-wrapper'
import GdbCardList from '@/modules/shared/components/gdb-card-list'

export default {
  components: {
    'gdb-card-wrapper' : GdbCardWrapper,
    'gdb-card-list': GdbCardList
  },
  created() {
    this.$store.dispatch('games/fetchMostPopular', { platform: IGDB_PLATFORMS.PS4 })
    this.$store.dispatch('games/fetchMostPopular', { platform: IGDB_PLATFORMS.XBOX_ONE })
    this.$store.dispatch('games/fetchMostPopular', { platform: IGDB_PLATFORMS.SWITCH })
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
  },
  methods: {
    logout() {
      this.$store.dispatch('login/removeToken')
    }
  }
}
</script>


