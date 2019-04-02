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
$iconSpaceWidth: 250px;

.gdb-platform-wrapper {
  display: flex;
  padding-left: $iconSpaceWidth;
  justify-content: left;
  align-items: center;
  flex-grow: 1;
  position: relative;

  &.gdb-card-list-platform-ps4 {
    color: #0053da;
  }

  &.gdb-card-list-platform-xbox-one {
    color: #107c10;
  }

  &.gdb-card-list-platform-switch {
    color: #e60012;
  }

  .gdb-platform-wrapper-icon {
    font-size: 98px;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate3d(0,-50%,0);
    width: $iconSpaceWidth;
    text-align: center;
  }
}
</style>