<template>
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
  color: $darkGray;
  margin: 10px;
  padding-bottom: 10px;
  transition: all 100ms ease-in-out;
  position: relative;
  overflow: hidden;
  height: 200px;
  z-index: 0;

  .gdb-card-image {
    position: absolute;
    border-radius: 5px;
    overflow: hidden;
    height: $imageSize;
    width: $imageSize;
    bottom: 5px;
    left: 0;
    z-index: 1;
  }

  .gdb-card-info {
    $spacing: 10px;

    background: linear-gradient(135deg, #FFFFFF 0%,#FFFFFF 50%,$secondaryColor 100%);
    padding: $spacing $spacing ($imageSize + $spacing + ($spacing / 2));
    border-radius: 10px;
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    font-size: 18px;
    width: calc(100% - #{$imageSize / 4});
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}
</style>


