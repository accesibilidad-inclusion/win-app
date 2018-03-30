// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
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
  components: { App },
  template: '<App/>',
  data: {
    disability: '',
    disabilityTypes: [],
    consent: '',
    name: '',
    lastname: '',
    day_birth: '',
    month_birth: '',
    year_birth: '',
    sex: '',
    job: '',
    job_place: '',
    school: '',
    school_name: ''
  },
  watch: {
    disabilityTypes: function (newDisabilityTypes, oldDisabilityTypes) {
      console.log(newDisabilityTypes)
    }
  },
  beforeCreate: function () {
    this.$http
      // Consulta
      .get('https://sipub.coordinador.cl/api/v1/vistas/combustibles/con_costos_stock_combustibles/')
      // Respuesta
      .then(
        response => {
          // Se poblan los datos de la app
          // * Establecer un método de store para guardar y acceder a los datos
          // * Programar los casos de uso levantados
          // this.combustibles = response.aggs
          // Una vez que se configura todo, se puede avanzar a la siguiente pantalla
          router.push('welcome')
        },
        response => {
          console.log('error en la consulta')
        }
      )
  }
})
