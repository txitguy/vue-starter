import Vue from 'vue'
import app from './app'
import router from './router'
import ElementUI from 'element-ui'
import 'normalize.css/normalize.css'
import 'src/styles/themes/index.css'

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(app)
})
