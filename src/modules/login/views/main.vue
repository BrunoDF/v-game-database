<template>
  <v-layout row wrap align-center>
    <v-flex xs8 offset-xs2 md4 offset-md4>
      <v-form @submit.prevent="submit" novalidate>
        <login-form v-model="form.loginForm" :validation="$v.form.loginForm" />

        <v-btn block outline color="indigo" type="submit">Login</v-btn>
      </v-form>
    </v-flex>
  </v-layout>
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

      if (!this.$v.form.$pending && !this.$v.form.$error)
        alert("Form submitted");
    }
  }
}
</script>
