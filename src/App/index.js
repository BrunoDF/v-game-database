import Vue from 'vue'

import GdbCard from '@/modules/shared/components/gdb-card'

new Vue({
  render: function(h) {
    const gdbCard = h(GdbCard)
    return h('div', [ gdbCard ])
  },
  data() {
    return {
      test: 'Teste'
    }
  }
}).$mount('#app')