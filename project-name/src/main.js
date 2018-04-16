// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import store from './vuex/store'
import VueRouter from 'vue-router'
import App from './App'
import ElementUI from 'element-ui'
import routes from './router/routers'
import 'element-ui/lib/theme-chalk/index.css'
import '../config/parameter_config'
import axios from 'axios'
import Footer from './components/footer/Footer.vue'

Vue.config.productionTip = false
// axios.defaults.baseURL = ''
Vue.prototype.$axios = axios

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Vuex)

require('./mock/mock.js')

const router = new VueRouter({
  routes
})

Vue.component('mfoot', Footer)

router.beforeEach((to, from, next) => {
  if (to.path !== '/login') {
    var userobj = sessionStorage.getItem('sqlmanageruser')
    if (userobj) {
      next()
    } else {
      next({ path: '/login' })
    }
  } else {
    sessionStorage.removeItem('sqlmanageruser')
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
