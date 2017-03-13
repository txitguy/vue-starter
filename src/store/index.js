import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import cache from './modules/cache'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
/* eslint-disable no-new */
export default new Vuex.Store({
  actions,
  modules: {
    cache
  },
  strict: debug
})
