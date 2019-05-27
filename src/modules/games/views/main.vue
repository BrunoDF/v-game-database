<template>
  <v-layout row align-center>
    <v-flex xs12>
      <div>
        <v-btn color="pink" dark left fab @click="logout">
          <font-awesome-icon size="2x" :icon="['fa', 'sign-out-alt']" />
        </v-btn>
      </div>

      <template v-for="platform in platforms">
        <gdb-platform-wrapper :platform="platform" :key="platform">
          <gdb-card-list :game-list="games[platform]" />
        </gdb-platform-wrapper>
      </template>

      <gdb-modal v-if="showModal">
        <router-view name="modal" />
      </gdb-modal>
    </v-flex>
  </v-layout>
</template>

<script>
import Vue from 'vue'

import { LOGIN_ROUTE_NAME, IGDB_PLATFORMS } from '@/config/constants'

import GamesService from '@/modules/games/services/games.service'
import LoginService from '@/modules/login/services/login.service'

import GdbModal from '@/modules/shared/components/gdb-modal'
import GdbPlatformWrapper from '@/modules/games/components/gdb-platform-wrapper.vue'
import GdbCardList from '@/modules/shared/components/gdb-card-list.vue'

export default {
  components: {
    'gdb-platform-wrapper': GdbPlatformWrapper,
    'gdb-card-list': GdbCardList,
    'gdb-modal': GdbModal
  },
  async created() {
    this.platforms.map(async (platform) => {
      const result = await GamesService.mostPopularByPlatform(platform)
      Vue.set(this.games, platform, result)
    })
  },
  computed: {
    showModal() {
      return this.$route.meta.modalOptions && this.$route.meta.modalOptions.show
    }
  },
  data() {
    return {
      platforms: Object.values(IGDB_PLATFORMS),
      games: {}
    }
  },
  methods: {
    async logout() {
      await LoginService.logout()
      this.$router.push({ name: LOGIN_ROUTE_NAME })
      // this.$store.dispatch('login/removeToken')
    }
  }
}
</script>
