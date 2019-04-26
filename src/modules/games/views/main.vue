<template>
  <v-layout row align-center>
    <v-flex xs12>
      <div>
        <v-btn color="pink" dark left fab @click="logout">
          <font-awesome-icon size="2x" :icon="['fa', 'sign-out-alt']" />
        </v-btn>
      </div>

      <template v-for="platform in platforms">
        <gdb-card-wrapper :platform="platform" :key="platform">
          <p v-if="mostPopular[platform].error">{{ mostPopular[platform].error }}</p>
          <gdb-card-list :list="mostPopular[platform].data" />
        </gdb-card-wrapper>
      </template>

      <gdb-modal v-if="showModal">
        <router-view name="modal" />
      </gdb-modal>
    </v-flex>
  </v-layout>
</template>

<script>
import { IGDB_PLATFORMS } from '@/config/constants'

import GdbModal from '@/modules/shared/components/gdb-modal'
import GdbCardWrapper from '@/modules/games/components/gdb-card-wrapper'
import GdbCardList from '@/modules/shared/components/gdb-card-list'

export default {
  components: {
    'gdb-card-wrapper' : GdbCardWrapper,
    'gdb-card-list': GdbCardList,
    'gdb-modal': GdbModal
  },
  created() {
    this.platforms.map(platform => this.$store.dispatch('games/fetchMostPopular', { platform }))
  },
  data() {
    return {
      platforms: [ IGDB_PLATFORMS.PS4, IGDB_PLATFORMS.XBOX_ONE, IGDB_PLATFORMS.SWITCH ]
    }
  },
  computed: {
    showModal() {
      return this.$route.meta.modalOptions && this.$route.meta.modalOptions.show
    },
    mostPopular() {
      return this.$store.state.games.mostPopular
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('login/removeToken')
    }
  }
}
</script>


