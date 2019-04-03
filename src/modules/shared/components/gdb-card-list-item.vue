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
import GdbCard from './gdb-card'
import GdbCardPlaceholder from './gdb-card-placeholder'

export default {
  components: {
    'gdb-card': GdbCard,
    'gdb-card-placeholder': GdbCardPlaceholder
  },
  props: {
    item: { type: Object, required: true }
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
