// STYLES
import 'normalize.css'
import '@/styles/general.scss'

// LIBS
import Vue from 'vue'

// MAIN COMPONENT
import App from './App.vue'

// ROUTER
import router from './config/router'

// STORE
import store from './config/store'

// i18n
import i18n from './config/i18n'

// FontAwesome
import './config/font-awesome'

// Axios
import './config/axios'

// MODULES
import './config/modules'

// CONFIG
Vue.config.productionTip = false

// VUE INSTANCE
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
