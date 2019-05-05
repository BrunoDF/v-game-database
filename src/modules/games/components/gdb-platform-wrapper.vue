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
    platform: {
      type: Number,
      required: true,
      validator: (number) => Object.values(IGDB_PLATFORMS).includes(number)
    }
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
      return `gdb-platform-wrapper-${this.iconName}`
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

  &.gdb-platform-wrapper-playstation {
    color: #0053da;
  }

  &.gdb-platform-wrapper-xbox {
    color: #107c10;
  }

  &.gdb-platform-wrapper-nintendo-switch {
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