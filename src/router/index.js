import Vue from 'vue'
import Router from 'vue-router'
import notFound from 'views/404'
import auth from 'views/auth'
import home from 'views/home'
import about from 'views/about'
import admin from 'views/admin'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/404',
    component: notFound,
    name: '404',
    hidden: true
  }, {
    path: '/auth',
    name: 'auth',
    component: auth
  }, {
    path: '/',
    component: home,
    children: [
      { path: '/about', name: 'about', component: about },
      { path: '/admin', name: 'admin', component: admin }
    ]
  }]
})

