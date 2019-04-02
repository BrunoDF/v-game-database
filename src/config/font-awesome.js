import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimesCircle, faArrowCircleUp, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { faPlaystation, faXbox, faNintendoSwitch } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTimesCircle, faArrowCircleUp, faSignOutAlt, faPlaystation, faXbox, faNintendoSwitch)

Vue.component('font-awesome-icon', FontAwesomeIcon)