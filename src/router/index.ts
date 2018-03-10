import Vue from 'vue'
import Router from 'vue-router'
import home from 'views/home.vue'
import index from 'views/pages/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    component: home,
    children: [{
      path: '/home',
      component: index
    }]
  }]
})