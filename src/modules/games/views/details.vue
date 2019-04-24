<template>
  <div class="gdb-games-details-view">
    <div v-if="game.data" class="gdb-games-details-view-content">
      <div class="gdb-games-details-view-content-image">
        <gdb-image :src="game.data.cover_path"></gdb-image>
      </div>
      <div class="gdb-games-details-view-content-info">
        <span>{{ game.data.name }}</span>
      </div>
      <gdb-rating :rating="game.data.rating | AsInteger" />
    </div>
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

import { HalfCircleSpinner } from 'epic-spinners'

import GdbImage from '@/modules/shared/components/gdb-image'
import GdbRating from '@/modules/shared/components/gdb-rating'

import AsInteger from '@/modules/shared/filters/as-integer.filter'

export default {
  beforeRouteEnter(to, from, next) {
    next(vm => {
      const { id } = to.params
      vm.$store.dispatch('games/fetchDetails', { id })
    })
  },
  // async beforeRouteEnter(to, from, next) {
  //   const { id } = to.params
  //   await Store.dispatch('games/fetchDetails', { id })

  //   next()
  // },
  // beforeRouteUpdate(to, from, next) {
  //   const { id } = to.params
  //   this.$store.dispatch('games/fetchDetails', { id })

  //   next()
  // },
  components: {
    'gdb-image': GdbImage,
    'gdb-rating': GdbRating,
    'half-circle-spinner': HalfCircleSpinner
  },
  filters: {
    AsInteger
  },
  computed: {
    game() {
      return this.$store.state.games.details
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


