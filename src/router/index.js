import Vue from 'vue'
import Router from 'vue-router'
import home from 'views/home'
import auth from 'views/auth'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    }, {
      path: '/auth',
      name: 'auth',
      component: auth
    }
  ]
})

