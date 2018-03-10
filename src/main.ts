import Vue from 'vue'
import app from './app.vue'
import router from './router'
import 'normalize.css/normalize.css'
import 'src/styles/themes/index.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(app)
})
