<template>
  <v-text-field
    type="text"
    v-model="text"
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