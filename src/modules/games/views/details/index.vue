<template>
  <div class="gdb-games-details-view">
    <div v-if="game.data" class="gdb-games-details-view-content">
      <span>{{ game.data.name }}</span>
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
import { LoopingRhombusesSpinner } from 'epic-spinners'

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
  beforeRouteLeave(to, from, next) {
    this.disposeBag.cancel('Game detail request canceled')
    next()
  },
  components: {
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
  }

  .looping-rhombuses-spinner {
    margin: 0 auto;
  }
}
</style>


