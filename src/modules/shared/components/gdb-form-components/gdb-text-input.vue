<template>
  <v-text-field
    type="text"
    v-model="text"
    :label="label"
    :class="className"
    :error="validation.$anyError"
    :error-messages="getErrors"
    outline
  ></v-text-field>
</template>

<script>
import FormMixin from '@/modules/shared/mixins/form.mixin'

export default {
  mixins: [ FormMixin ],
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

