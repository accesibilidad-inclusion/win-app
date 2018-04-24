// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { sync } from 'vuex-router-sync'
import store from './store'
import router from './router'
import VueResource from 'vue-resource'
import * as svgicon from 'vue-svgicon'

Vue.config.productionTip = false

// Enable HTTP Client
Vue.use(VueResource)

// Enable Icons
Vue.use(svgicon, {
  tagName: 'svgicon'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

sync(store, router)
