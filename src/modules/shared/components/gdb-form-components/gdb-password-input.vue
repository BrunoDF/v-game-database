<template>
  <input
    type="password"
    :name="name"
    :class="className"
    v-model="password"
  />
</template>

<script>
export default {
  props: {
    name       : { type: String, default: 'password' },
    className  : { type: String, default: 'gdb-password-input' },
    value      : { type: String, required: true },
    validation : { type: Object, required: true }
  },
  computed: {
    password: {
      get() {
        return this.value
      },
      set(password) {
        this.validation.$touch()
        this.$emit('input', password)
      }
    }
  }
}
</script>

