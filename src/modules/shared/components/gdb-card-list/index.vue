<template>
  <div class="gdb-card-list" v-wheel-horizontal-scroll>
    <looping-rhombuses-spinner
      v-if="!list.length"
      :animation-duration="2000"
      :size="60"
      :color="'#FFFFFF'"
    />
    <div class="gdb-card-list-item" v-for="item in list" :key="item.id">
      <gdb-card :game="item" />
    </div>
  </div>
</template>

<script>
import { LoopingRhombusesSpinner } from 'epic-spinners'
import WheelHorizontalScroll from '../../directives/wheel-horizontal-scroll.directive'

import GdbCard from '../gdb-card'

export default {
  directives: {
    ...WheelHorizontalScroll
  },
  components: {
    'gdb-card': GdbCard,
    'looping-rhombuses-spinner': LoopingRhombusesSpinner
  },
  props: {
    list: { type: Array, required: true }
  }
}
</script>

<style lang="scss" scoped>
$cardsPerView: 4;

.gdb-card-list {
  display: flex;
  min-height: 220px;
  justify-content: left;
  align-items: center;
  flex-grow: 1;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  .gdb-card-list-item {
    flex: 0 0 (100% / #{ $cardsPerView });
  }

  .looping-rhombuses-spinner {
    margin: 0 auto;
  }
}
</style>


