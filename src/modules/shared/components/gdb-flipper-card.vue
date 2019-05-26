<template>
  <div class="gdb-card-list-item">
    <transition name="flip" mode="out-in">
      <keep-alive>
        <component :is="currentComponent" :game="game" />
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import Game from '@/modules/games/models/game.model'
import GdbCard from '@/modules/shared/components/gdb-card.vue'
import GdbCardPlaceholder from '@/modules/shared/components//gdb-card-placeholder.vue'

export default {
  components: {
    'gdb-card': GdbCard,
    'gdb-card-placeholder': GdbCardPlaceholder
  },
  props: {
    game: { type: Game, required: true }
  },
  computed: {
    flipped() {
      return parseInt(this.$route.params.id) === this.game.id
    },
    currentComponent() {
      return this.flipped ? 'gdb-card-placeholder' : 'gdb-card'
    }
  }
}
</script>

<style lang="scss" scoped>
.gdb-card-list-item {
  perspective: $cardHeight * 10;
}
</style>