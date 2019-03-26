<template>
  <form @submit.prevent="submit" novalidate>
    <login-form v-model="form.loginForm" :validation="$v.form.loginForm" />

    <button type="submit">Login</button>
  </form>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import LoginForm from '../components/gdb-login-form'

export default {
  components: {
    'login-form': LoginForm
  },
  data() {
    return {
      form: {
        loginForm: {
          username: '',
          password: ''
        }
      }
    }
  },
  validations: {
    form: {
      loginForm: {
        username: { required },
        password: { required }
      }
    }
  },
  methods: {
    submit() {
      this.$v.form.$touch()

      if (this.$v.form.$pending || this.$v.form.$error) return

      alert("Form submitted");
    }
  }
}
</script>
