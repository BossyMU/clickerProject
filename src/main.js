import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// ---------------------
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
// import './css/style.css'

Vue.use(VueMaterial)

import Axios from 'axios'
Vue.$http = Axios
// ---------------------
// add
Axios.defaults.baseURL = 'https://iccs340-vue-api-auth.herokuapp.com/'
Axios.defaults.headers.common.Accept = 'application/json'
Axios.defaults.withCredentials = true

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    counter: 0
  },
  router,
  store,
  template: '<App/>',
  components: { App }
})

// new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: { App },
//   data: {
//     active: false,
//     numClicks: 0,
//     secs: 10,
//     colors: ['#9bcd77', '#d777b0', '#fed401', '#ff2c3c', '#66c652']
//   },
//   ready: function () {
//     var self = this
//     setInterval(function () {
//       if (self.active) {
//         self.secs--
//         if (self.secs === 0) {
//           self.active = false('button').addClass('over')('#status').html('<h2>Game Over</h2>')
//         }
//       }
//     }, 1000)
//   },

//   methods: {
//     updateCount: function () {
//       this.numClicks += 1
//       if (this.active === false) {
//         this.secs = 10
//         this.numClicks = 0
//         this.active = true
//       }

//       if (this.numClicks % 10 === 0) {
//         ('button').animate({ width: '-=15px', height: '-=15px' }, 500, 'easeOutElastic', function () { })
//       }

//       var color = this.colors[Math.round(Math.random() * (this.colors.length - 1))]('button').css({backgroundColor: color})
//     }
//   }
// })
