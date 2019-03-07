<template>
  <div class="gdb-image-container">
    <div class="gdb-image-loader">
      <hollow-dots-spinner
        v-if="loading"
        :animation-duration="1500"
        :size="60"
        :color="'#FFFFFF'"
      />
    </div>
    <transition name="fade">
      <div class="gdb-image" v-if="!loading" :style="style" />
    </transition>
  </div>
</template>

<script>
import { HollowDotsSpinner } from 'epic-spinners'

import ImageUtil from '@/modules/shared/utils/image.util'

export default {
  props: {
    src    : { type: String, required: true },
  },
  components: {
    'hollow-dots-spinner': HollowDotsSpinner
  },
  mounted() {
    setTimeout(() => this.loadImage(this.src), 1500)
  },
  data() {
    return {
      image: undefined,
      loading: true,
      style: {
        backgroundImage: undefined
      }
    }
  },
  methods: {
    loadImage: function(url) {
      this.image = ImageUtil.createImage(url, this.loadHandler, this.errorHandler)
    },
    loadHandler: function() {
      console.log('loaded')
      this.style.backgroundImage = `url(${ this.src })`
      this.loading = false
    },
    errorHandler: function(err) {
      console.error(err)
    }
  }
}
</script>

<style lang="scss" scoped>
.gdb-image-container,
.gdb-image {
  height: 100%;
  width: 100%;
}

.gdb-image-container {
  display: flex;
  align-items: center;
  justify-items: center;
}

.gdb-image-loader {
  margin: 0 auto;
}

.gdb-image {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>


