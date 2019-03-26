<template>
  <div class="gdb-login-form">
    <div class="gdb-form-field-wrapper">
      <label for="username" class="gdb-login-form-label-username">
        Username
      </label>

      <text-input name="username" class-name="gdb-login-form-field-username" v-model.trim="value.username" :validation="validation.username" />

      <div v-if="validation.username.$error">
        <span v-if="!validation.username.required">Campo obrigatório</span>
      </div>
    </div>

    <div class="gdb-form-field-wrapper">
      <label for="password" class="gdb-login-form-label-password">
        Password
      </label>

      <password-input name="password" class-name="gdb-login-form-field-password" v-model.trim="value.password" :validation="validation.password" />

      <div v-if="validation.password.$error">
        <span v-if="!validation.password.$required">Campo obrigatório</span>
      </div>
    </div>
  </div>
</template>

<script>
import TextInput from '@/modules/shared/components/gdb-form-components/gdb-text-input'
import PasswordInput from '@/modules/shared/components/gdb-form-components/gdb-password-input'

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
}
</style>


