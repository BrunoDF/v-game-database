<template>
  <div class="gdb-card-list">
    <div v-for="item in list" :key="item.id">
      <gdb-card :name="item.game.name" :imgPath="item.game.cover_path" />
    </div>
  </div>
</template>

<script>
import GdbCard from '../gdb-card'

export default {
  components: {
    'gdb-card': GdbCard
  },
  props: {
    list: { type: Array, required: true }
  }
}
</script>

<style lang="scss" scoped>
.gdb-card-list {
  width: 80%;
  margin: 0 auto;
  padding: 50px 0;
  display: flex;
  flex-flow: flex-wrap;
  flex-direction: row;
  flex-flow: wrap;
}
</style>


