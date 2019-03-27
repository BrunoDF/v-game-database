<template>
  <v-text-field
    type="password"
    v-model="password"
    :label="name"
    :class="className"
    :error-messages="formErrors"
    outline
  ></v-text-field>
</template>

<script>
import FormErrorsMixin from '@/modules/shared/mixins/form-errors.mixin'

export default {
  mixins: [ FormErrorsMixin ],
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

