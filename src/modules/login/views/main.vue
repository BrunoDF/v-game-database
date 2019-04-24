<template>
  <v-layout row wrap align-center>
    <v-flex xs8 offset-xs2 md2 offset-md5>
      <v-snackbar
        v-model="snackbar.show"
        :timeout="snackbar.timeout"
      >
        {{ authenticationError }}
      </v-snackbar>

      <v-form @submit.prevent="submit" novalidate>
        <login-form v-model="form.loginForm" :validation="$v.form.loginForm" />

        <v-btn block outline color="indigo" type="submit" :disabled="!isFormValid">Login</v-btn>
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import LoginForm from '../components/gdb-login-form'

import { AFTER_LOGIN_ROUTE_NAME } from '@/config/constants'

export default {
  components: {
    'login-form': LoginForm
  },
  data() {
    return {
      snackbar: {
        show: false,
        timeout: 5000
      },
      form: {
        loginForm: {
          username: '',
          password: ''
        }
      }
    }
  },
  computed: {
    authenticationError() {
      return this.$store.state.login.authentication.error && this.$store.state.login.authentication.error.message
    },
    isFormValid() {
      return !this.$v.form.$pending && !this.$v.form.$error && !this.$v.form.$invalid
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
    async login(username, password) {
      await this.$store.dispatch('login/fetchToken', { username, password })

      const hasNoError = !this.$store.state.login.authentication.error

      if (hasNoError)
        this.$router.push({ name: AFTER_LOGIN_ROUTE_NAME })
    },
    submit() {
      this.$v.form.$touch()

      if (this.isFormValid) {
        const { username, password } = this.form.loginForm
        this.login(username, password)
      }
    }
  },
  watch: {
    authenticationError(errorMessage) {
      this.snackbar.show = errorMessage ? true : false
    }
  }
}
</script>
