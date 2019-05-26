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
    <div class="gdb-image" v-if="!loading" :style="style" />
  </div>
</template>

<script>
import { HollowDotsSpinner } from 'epic-spinners'

import ImageUtil from '@/modules/shared/utils/image.util'

export default {
  props: {
    src: { type: String, required: true },
  },
  components: {
    'hollow-dots-spinner': HollowDotsSpinner
  },
  created() {
    this.loadImage(this.src)
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
    async loadImage(url) {
      this.loading = true
      this.image   = undefined
      this.image   = await ImageUtil.preloadImage(url, this.loadHandler, this.errorHandler)
    },
    loadHandler() {
      this.style.backgroundImage = `url(${ this.image.result })`
      this.loading = false
    },
    errorHandler(err) {
      console.error(err)
    }
  },
  watch: {
    src(newValue, oldValue) {
      if (newValue && newValue !== oldValue)
        this.loadImage(newValue)
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


