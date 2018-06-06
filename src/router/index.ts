import Vue from 'vue'
import Router from 'vue-router'

// layouts
import base from 'views/layouts/base.vue'

// Pages
import pageNotFound from 'Pages/404.vue'
import index from 'Pages/index.vue'

import accountsIndex from 'Pages/accounts/index.vue'
import accountsList from 'Pages/accounts/list.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  // When navigating, scroll to the top
  scrollBehavior() {
    return {x: 0, y: 0};
  },
  routes: [{
    path: '/',
    component: base, // layout
    meta: {
      title: 'Home Page'
    },
    children: [{
      path: '/',
      component: index,
      name: 'home'
    },{
      path: '/accounts/',
      component: accountsIndex,
      children: [{
        path: '/',
        component: accountsList,
        name: 'accounts'
      }]
    },{
      path: '*',
      component: pageNotFound,
      name: '404',
      meta: {
        title: 'Page Not Found'
      }
    }]
  }]
});
