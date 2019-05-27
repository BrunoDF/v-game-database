// STYLES
import 'normalize.css'
import 'vuetify/dist/vuetify.min.css'
import '@/styles/general.scss'

// LIBS
import Vue from 'vue'

// MAIN COMPONENT
import App from './App.vue'

// ROUTER
import router from './config/router'

// STORE
import store from './config/store'

// FontAwesome
import './config/font-awesome'

// Axios
import './config/axios'

// MODULES
import './config/modules'

// Vuetify
import './config/vuetify'

// Vuelidate
import './config/vuelidate'

// CONFIG
Vue.config.productionTip = false

// VUE INSTANCE
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')