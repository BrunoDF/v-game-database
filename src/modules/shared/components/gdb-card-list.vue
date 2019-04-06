<template>
  <div class="gdb-card-list" v-wheel-horizontal-scroll>
    <half-circle-spinner
      v-if="!list.length"
      :animation-duration="2000"
      :size="60"
      :color="'#FFFFFF'"
    />
    <div class="gdb-card-list-item" v-for="item in list" :key="item.id">
      <gdb-card-list-item :item="item" />
    </div>
  </div>
</template>

<script>
import { HalfCircleSpinner } from 'epic-spinners'
import WheelHorizontalScroll from '@/modules/shared/directives/wheel-horizontal-scroll.directive'

import GdbCardListItem from './gdb-card-list-item'


export default {
  directives: {
    ...WheelHorizontalScroll
  },
  components: {
    'gdb-card-list-item': GdbCardListItem,
    'half-circle-spinner': HalfCircleSpinner
  },
  props: {
    list: { type: Array, required: true }
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

  .gdb-card-list-item {
    flex: 0 0 $cardWidth + $cardSpacing;
  }

  .half-circle-spinner {
    margin: 0 auto;
  }
}
</style>


