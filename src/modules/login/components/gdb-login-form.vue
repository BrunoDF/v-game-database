<template>
  <form @submit.prevent="submit" class="gdb-login-form">
    <div class="gdb-form-field-wrapper">
      <label for="username" class="gdb-login-form-label-username">
        Username
      </label>
      <input
        type="text"
        name="username"
        class="gdb-login-form-field-username"
        v-model.trim="$v.username.$model"
      />
      <div v-if="$v.username.$error">
        <span v-if="!$v.username.required">Campo obrigatório</span>
      </div>
    </div>

    <div class="gdb-form-field-wrapper">
      <label for="password" class="gdb-login-form-label-password">
        Password
      </label>
      <input
        type="text"
        name="password"
        class="gdb-login-form-field-password"
        :value="password"
        @input="setPassword($event.target.value)"
      />
      <div v-if="$v.password.$error">
        <span v-if="!$v.password.$required">Campo obrigatório</span>
      </div>
    </div>

    <button type="submit">Login</button>
  </form>
</template>

<script>
import { required } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  validations: {
    username: { required },
    password: { required }
  },
  methods: {
    setPassword(value) {
      this.password = value
      this.$v.password.$touch()
    },

    submit(e) {
      console.log(e)
      console.log(this.$v.$invalid)
    }
  }
}
</script>


<style lang="scss" scoped>
.gdb-login-form {
}
</style>


