<template>
  <div class="gdb-platform-wrapper" :class="className">
    <div class="gdb-platform-wrapper-icon">
      <font-awesome-icon :icon="['fab', iconName]" />
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
  data() {
    return {
      platforms: {
        [IGDB_PLATFORMS.PS4]: 'playstation',
        [IGDB_PLATFORMS.XBOX_ONE]: 'xbox',
        [IGDB_PLATFORMS.SWITCH]: 'nintendo-switch'
      }
    }
  },
  computed: {
    iconName() {
      return this.platforms[this.platform]
    },
    className() {
      return `gdb-card-list-platform-${this.iconName}`
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

  &.gdb-card-list-platform-playstation {
    color: #0053da;
  }

  &.gdb-card-list-platform-xbox {
    color: #107c10;
  }

  &.gdb-card-list-platform-nintendo-switch {
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