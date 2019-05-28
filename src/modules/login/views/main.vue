<template>
  <v-layout row wrap align-center>
    <v-flex xs8 offset-xs2 md2 offset-md5>
      <v-snackbar
        color="error"
        v-model="snackbar.show"
        :timeout="snackbar.timeout"
      >
        {{ authenticationError }}
      </v-snackbar>

      <half-circle-spinner
        v-if="loading || isLoggedIn"
        :animation-duration="2000"
        :size="60"
        :color="'#999999'"
      />


      <v-form v-else @submit.prevent="submit" novalidate>
        <login-form v-model="form.loginForm" :validation="$v.form.loginForm" />

        <v-btn block outline color="indigo" type="submit" :disabled="!isFormValid">Login</v-btn>
      </v-form>

    </v-flex>
  </v-layout>
</template>

<script>
import { HalfCircleSpinner } from 'epic-spinners'

import { required } from 'vuelidate/lib/validators'
import LoginForm from '@/modules/login/components/gdb-login-form.vue'

import { AFTER_LOGIN_ROUTE_NAME } from '@/config/constants'

export default {
  components: {
    'login-form': LoginForm,
    'half-circle-spinner': HalfCircleSpinner
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
    isLoggedIn() {
      return this.$store.getters['login/isLoggedIn']
    },
    loading() {
      return this.$store.state.login.authentication.loading
    },
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
    isLoggedIn(newVal) {
      if (newVal)
        this.$router.push({ name: AFTER_LOGIN_ROUTE_NAME })
    },
    authenticationError(errorMessage) {
      this.snackbar.show = errorMessage ? true : false
    }
  }
}
</script>

<style lang="scss" scoped>
  .half-circle-spinner {
    margin: 0 auto;
  }
</style>
