<template>
  <div class="gdb-games-details-view">
    <div v-if="game.data" class="gdb-games-details-view-content">
      <div class="gdb-games-details-view-content-image">
        <gdb-image :src="game.data.cover_path"></gdb-image>
      </div>
      <div class="gdb-games-details-view-content-info">
        <span>{{ game.data.name }}</span>
      </div>
    </div>
    <looping-rhombuses-spinner
      v-else
      :animation-duration="2000"
      :size="60"
      :color="'#999999'"
    />
  </div>
</template>

<script>
// import Store from '@/config/store'

import { LoopingRhombusesSpinner } from 'epic-spinners'

import GdbImage from '@/modules/shared/components/gdb-image'

import DisposeBag from '@/config/dispose-bag'

export default {
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.disposeBag = new DisposeBag()

      const { id } = to.params
      const cancelToken = vm.disposeBag.token
      vm.$store.dispatch('games/fetchDetails', { id, cancelToken })
    })
  },
  // async beforeRouteEnter(to, from, next) {
  //   const disposeBag = new DisposeBag()

  //   const { id } = to.params
  //   const cancelToken = disposeBag.token
  //   await Store.dispatch('games/fetchDetails', { id, cancelToken })

  //   next(vm => vm.disposeBag = disposeBag)
  // },
  // beforeRouteUpdate(to, from, next) {
  //   this.disposeBag = new DisposeBag()

  //   const { id } = to.params
  //   const cancelToken = this.disposeBag.token
  //   this.$store.dispatch('games/fetchDetails', { id, cancelToken })

  //   next()
  // },
  beforeRouteLeave(to, from, next) {
    this.disposeBag.cancel('Game detail request canceled')
    next()
  },
  components: {
    'gdb-image': GdbImage,
    'looping-rhombuses-spinner': LoopingRhombusesSpinner
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
  padding: 20px;

  .gdb-games-details-view-content {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    flex-flow: column;

    .gdb-games-details-view-content-image {
      width: 300px;
    }

    .gdb-games-details-view-content-info {
      margin: 20px auto;
      font-size: 24px;
    }
  }

  .looping-rhombuses-spinner {
    margin: 0 auto;
  }
}
</style>


