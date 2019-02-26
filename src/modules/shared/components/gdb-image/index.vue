<template>
  <img class="gdb-image" :src="src" />
</template>

<script>
export default {
  props: {
    src: { type: String, required: true }
  }
}
</script>

<style lang="scss" scoped>
.gdb-image {
  height: 100%;
  width: 100%;
}
</style>


