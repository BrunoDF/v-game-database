<template>
  <v-app dark>
    <v-container fluid fill-height>
      <router-view name="page" />

      <gdb-modal v-if="showModal">
        <router-view name="modal" />
      </gdb-modal>
    </v-container>
  </v-app>
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