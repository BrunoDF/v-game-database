export default {
  render: function(h) { return h('p', this.test) },
  data() {
    return {
      test: 'Teste'
    }
  }
}