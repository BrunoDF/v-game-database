<template>
  <input
    type="text"
    :name="name"
    :class="className"
    v-model="text"
  />
</template>

<script>
export default {
  props: {
    name       : { type: String, default: 'text' },
    className  : { type: String, default: 'gdb-text-input' },
    value      : { type: String, required: true },
    validation : { type: Object, required: true }
  },
  computed: {
    text: {
      get() {
        return this.value
      },
      set(text) {
        this.validation.$touch()
        this.$emit('input', text)
      }
    }
  }
}
</script>

