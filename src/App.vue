<template>
  <div id="app">
    <router-view name="page" />

    <gdb-modal v-if="showModal">
      <router-view name="modal" />
    </gdb-modal>
  </div>
</template>

<script>
import GdbModal from './modules/shared/components/gdb-modal'

export default {
  components: {
    'gdb-modal': GdbModal
  },
  computed: {
    showModal() {
      return this.$route.meta.showModal
    }
  }
}
</script>


<style lang="scss" scoped>
#app {
  height: inherit;
}
</style>
