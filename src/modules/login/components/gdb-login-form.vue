<template>
  <div class="gdb-login-form">
    <div class="gdb-form-field-wrapper">
      <text-input name="username" class-name="gdb-login-form-field-username" v-model.trim="value.username" :validation="validation.username" />
    </div>

    <div class="gdb-form-field-wrapper">
      <password-input name="password" class-name="gdb-login-form-field-password" v-model.trim="value.password" :validation="validation.password" />
    </div>
  </div>
</template>

<script>
import TextInput from '@/modules/shared/components/gdb-form-components/gdb-text-input.vue'
import PasswordInput from '@/modules/shared/components/gdb-form-components/gdb-password-input.vue'

export default {
  components: {
    'text-input': TextInput,
    'password-input': PasswordInput
  },
  props: {
    value      : { type: Object, required: true },
    validation : { type: Object, required: true }
  }
}
</script>


<style lang="scss" scoped>
.gdb-login-form {
  .gdb-form-field-wrapper {
    & /deep/ .v-input__slot {
      border-color: orange;
    }
  }
}
</style>


