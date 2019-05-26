<template>
  <div class="gdb-games-details-view">
    <div v-if="game" class="gdb-games-details-view-content">
      <div class="gdb-games-details-view-content-image">
        <gdb-image :src="game.cover_path" />
      </div>
      <div class="gdb-games-details-view-content-info">
        <span>{{ game.name }}</span>
      </div>
      <gdb-rating :rating="game.rating | AsInteger" />
    </div>

    <!-- <p v-else-if="game.error">{{ game.error.message }}</p> -->

    <half-circle-spinner
      v-else
      :animation-duration="2000"
      :size="60"
      :color="'#999999'"
    />
  </div>
</template>

<script>
// import Store from '@/config/store'
import meta from '@/config/meta'

import { HalfCircleSpinner } from 'epic-spinners'

import GdbImage from '@/modules/shared/components/gdb-image.vue'
import GdbRating from '@/modules/shared/components/gdb-rating.vue'

import GamesService from '@/modules/games/services/games.service'
import AsInteger from '@/modules/shared/filters/as-integer.filter'

export default {
  // Dispatch without waiting and enter route
  // async beforeRouteEnter(to, from, next) {
  //   const { id } = to.params
  //   const game = await GamesService.details(id)

  //   next(vm => vm.game = game)
  // },

  // DONT DO IT
  // beforeRouteEnter(to, from, next) {
  //   next(vm => {
  //     const { id } = to.params
  //     vm.$store.dispatch('games/fetchDetails', { id })
  //   })
  // },

  // Dispatch enter route after waiting
  // async beforeRouteEnter(to, from, next) {
  //   const { id } = to.params
  //   await Store.dispatch('games/fetchDetails', { id })

  //   next()
  // },

  // Dispatch when changing route ID
  // async beforeRouteUpdate(to, from, next) {
  //   const { id } = to.params
  //   const game = await GamesService.details(id)

  //   this.game = game

  //   next()
  // },
  // updated() {
  //   if (this.game)
  //     meta.setPageTitle(this.game.name)
  // },
  async created() {
    const { id } = this.$route.params
    this.game = await GamesService.details(id)
    if (this.game)
      meta.setPageTitle(this.game.name)
  },
  components: {
    'gdb-image': GdbImage,
    'gdb-rating': GdbRating,
    'half-circle-spinner': HalfCircleSpinner
  },
  filters: {
    AsInteger
  },
  data() {
    return {
      game: undefined
    }
  }
}
</script>

<style lang="scss" scoped>
.gdb-games-details-view {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  padding: 20px;

  .gdb-games-details-view-content {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    flex-flow: column;

    .gdb-games-details-view-content-image {
      width: 300px;
      height: 300px;
      border-radius: 100%;
      overflow: hidden;
    }

    .gdb-games-details-view-content-info {
      margin: 20px auto;
      font-size: 24px;
    }
  }

  .half-circle-spinner {
    margin: 0 auto;
  }
}
</style>

