<template>
  <div class="gdb-card-list" v-wheel-horizontal-scroll>
    <half-circle-spinner
      v-if="!list.length"
      :animation-duration="2000"
      :size="60"
      :color="'#CCCCCC'"
    />
    <ul class="gdb-card-list-item-wrapper">
      <li class="gdb-card-list-item" v-for="game in list" :key="game.id">
        <gdb-flipper-card :game="game" />
      </li>
    </ul>
  </div>
</template>

<script>
import { HalfCircleSpinner } from 'epic-spinners'
import WheelHorizontalScroll from '@/modules/shared/directives/wheel-horizontal-scroll.directive'

import Game from '@/modules/games/models/game.model'
import GdbFlipperCard from '@/modules/shared/components/gdb-flipper-card.vue'


export default {
  directives: {
    ...WheelHorizontalScroll
  },
  components: {
    'gdb-flipper-card': GdbFlipperCard,
    'half-circle-spinner': HalfCircleSpinner
  },
  props: {
    list: {
      type: Array,
      required: true,
      default: () => [],
      validator: (list) => list.every(item => item instanceof Game)
    }
  }
}
</script>

<style lang="scss" scoped>
.gdb-card-list {
  display: flex;
  min-height: $cardHeight + ($cardSpacing * 2);
  justify-content: left;
  align-items: center;
  flex-grow: 1;
  overflow-x: auto;
  padding: $cardSpacing 0;

  &::-webkit-scrollbar {
    display: none;
  }

  .gdb-card-list-item-wrapper {
    display: flex;

    .gdb-card-list-item {
      list-style: none;
      flex: 0 0 $cardWidth + $cardSpacing;
    }
  }

  .half-circle-spinner {
    margin: 0 auto;
  }
}
</style>

