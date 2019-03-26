<template>
  <div>
    {{ validation.$anyError }}
    <v-text-field
      type="password"
      v-model="password"
      :label="label"
      :class="className"
      :error="validation.$anyError"
      :error-messages="getErrors"
      outline
    ></v-text-field>
  </div>
</template>

<script>
import FormMixin from '@/modules/shared/mixins/form.mixin'

export default {
  mixins: [ FormMixin ],
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

