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
  template: '<App/>',
  beforeCreate: function () {
    this.$http
      // Consulta
      .get('https://gist.githubusercontent.com/felipelavinz/216f3f6451ce41fd0702fb10c7eeaa22/raw/f0ccb48fb660d8922edd5a8907b7c03166dad259/survey.json')
      // Respuesta
      .then(
        response => {
          // Se poblan los datos de la app
          // * Establecer un método de store para guardar y acceder a los datos
          // Una vez que se configura todo, se puede avanzar a la siguiente pantalla
          this.$store.commit('questionnaire', response.body.questionnaire)
          router.push('welcome')
        },
        response => {
          console.log('error en la consulta')
        }
      )
  }
})

sync(store, router)
