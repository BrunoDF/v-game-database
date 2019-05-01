<template>
  <div>
    {{ message }}
    <gdb-card />
  </div>
</template>

<script>
import GdbCard from '@/modules/shared/components/gdb-card.vue'

export default {
  components: {
    'gdb-card': GdbCard
  },
  data() {
    return {
      message: 'Primeiro componente no Vue-CLI'
    }
  }
}
</script>
