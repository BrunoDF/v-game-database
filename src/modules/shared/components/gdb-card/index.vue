<template>
  <div>
    <router-link :to="{ name: 'game-details', params: { id: game.id } }">
      <div class="gdb-card" >
        <div class="gdb-card-image">
          <gdb-image :src="game.cover_path" />
        </div>
        <div class="gdb-card-info">
          {{ game.name }}
          {{ game.rating }}
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import GdbImage from '../gdb-image'

export default {
  components: {
    'gdb-image': GdbImage
  },
  props: {
    game: { type: Object, required: true }
  }
}
</script>

<style lang="scss" scoped>
$imageSize: 160px;

.gdb-card {
  color: white;
  background: linear-gradient(135deg, #{$darkMidGray} 0%, #{$darkDeepGray} 100%);
  height: $cardHeight;
  width: $cardWidth;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(0, 0, 0, .5);
  position: relative;

  &:hover {
    .gdb-card-image {
      opacity: .8;
    }
  }

  .gdb-card-image {
    opacity: .5;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    transition: opacity 0.1s ease-in;
  }

  .gdb-card-info {
    $spacing: 10px;

    padding: $spacing $spacing ($imageSize + $spacing + ($spacing / 2));
    border-radius: 10px;
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    font-size: 18px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}
</style>


