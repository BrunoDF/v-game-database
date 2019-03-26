<template>
  <v-form @submit.prevent="submit" novalidate>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 md4 offset-md4>
          <login-form v-model="form.loginForm" :validation="$v.form.loginForm" />
        </v-flex>
      </v-layout>

      <v-layout row wrap>
        <v-flex xs12 md2 offset-md5>
          <v-btn block outline color="indigo" type="submit">Login</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
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
