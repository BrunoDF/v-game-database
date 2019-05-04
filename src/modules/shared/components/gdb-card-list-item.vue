<template>
  <div class="gdb-card-list-item">
    <transition name="flip" mode="out-in">
      <keep-alive>
        <component :is="itemComponent" :game="item" />
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
    item: { type: Game, required: true }
  },
  data() {
    return {
      flipped: this.shouldBeFlipped(this.$route.params.id, this.item.id)
    }
  },
  computed: {
    itemComponent() {
      return this.flipped ? 'gdb-card-placeholder' : 'gdb-card'
    }
  },
  methods: {
    shouldBeFlipped(currentId, gameId) {
      return parseInt(currentId) === parseInt(gameId)
    }
  },
  watch: {
    $route(to) {
      this.flipped = this.shouldBeFlipped(to.params.id, this.item.id)
    }
  }
}
</script>

<style lang="scss" scoped>
.gdb-card-list-item {
  perspective: $cardHeight * 10;
}
</style>
