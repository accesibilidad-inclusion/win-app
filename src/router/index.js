import Vue from 'vue'
import Router from 'vue-router'

// Components
import Splash from '@/components/Splash'
import Welcome from '@/components/Welcome'
import Disability from '@/components/Disability'
import DisabilityDetails from '@/components/DisabilityDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Splash',
      component: Splash
    },
    {
      path: '/welcome',
      name: 'Bienvenida',
      component: Welcome
    },
    {
      path: '/disability',
      name: 'Discapacidad',
      component: Disability
    },
    {
      path: '/disability-details',
      name: 'Tipos de discapacidad',
      component: DisabilityDetails
    }
  ]
})
