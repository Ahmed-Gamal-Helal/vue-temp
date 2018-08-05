import Vue from 'vue'
import AppLayout from './pages/Layout.vue'

const app = new Vue({
  ...AppLayout
  // render: h => h(AppLayout)
  // template: '<app></app>'
})
export { app }
