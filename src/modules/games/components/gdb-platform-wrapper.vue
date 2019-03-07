<template>
  <div class="gdb-platform-wrapper" :class="platformClass">
    <div class="gdb-platform-wrapper-icon">
      <font-awesome-icon :icon="['fab', platformName]" />
    </div>
    <slot></slot>
  </div>
</template>

<script>
import { IGDB_PLATFORMS } from '@/config/constants'

export default {
  props: {
    platform: { type: Number, required: true }
  },
  computed: {
    platformName() {
      let platformName;

      switch(this.platform) {
        case IGDB_PLATFORMS.PS4:
          platformName = 'playstation'
          break
        case IGDB_PLATFORMS.XBOX_ONE:
          platformName = 'xbox'
          break
        case IGDB_PLATFORMS.SWITCH:
          platformName = 'nintendo-switch'
          break
      }

      return platformName
    },
    platformClass() {
      let platformClass;

      switch(this.platform) {
        case IGDB_PLATFORMS.PS4:
          platformClass = 'gdb-card-list-platform-ps4'
          break
        case IGDB_PLATFORMS.XBOX_ONE:
          platformClass = 'gdb-card-list-platform-xbox-one'
          break
        case IGDB_PLATFORMS.SWITCH:
          platformClass = 'gdb-card-list-platform-switch'
          break
      }

      return platformClass
    }
  }
}
</script>

<style lang="scss" scoped>
.gdb-platform-wrapper {
  display: flex;
  padding: 50px 20px 50px 250px;
  justify-content: left;
  align-items: center;
  flex-grow: 1;
  position: relative;

  &.gdb-card-list-platform-ps4 {
    background-color: #003791;
  }

  &.gdb-card-list-platform-xbox-one {
    background-color: #107c10;
  }

  &.gdb-card-list-platform-switch {
    background-color: #e60012;
  }

  .gdb-platform-wrapper-icon {
    font-size: 98px;
    color: white;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate3d(0,-50%,0);
    width: 260px;
    text-align: center;
  }
}
</style>


