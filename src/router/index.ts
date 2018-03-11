import Vue from 'vue'
import Router from 'vue-router'

// layouts
import base from 'views/layouts/base.vue'

// Pages
import pageNotFound from 'views/pages/404.vue'
import index from 'views/pages/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    component: base, // layout
    children: [{
      path: '/',
      component: index
    },{
      path: '*',
      component: pageNotFound
    }]
  }]
})