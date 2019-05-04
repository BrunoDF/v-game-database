<template>
  <div class="game-main-view">
    <template v-for="game in games">
      <gdb-card :game="game" :key="game.id" />
    </template>
  </div>
</template>

<script>
import Game from '@/modules/games/models/game.model'
import GdbCard from '@/modules/shared/components/gdb-card.vue'

export default {
  components: {
    'gdb-card': GdbCard
  },
  data() {
    return {
      games: [
        new Game({ id: '1', name: 'Game 1', cover: { image_id: 'co1izz' }, rating: 90 }),
        new Game({ id: '2', name: 'Game 2', cover: { image_id: 'co1izz' }, rating: 80 }),
        new Game({ id: '3', name: 'Game 3', cover: { image_id: 'co1izz' }, rating: 70 })
      ]
    }
  }
}
</script>
