import Vue from 'vue'
import Router from 'vue-router'

// Components
import Splash from '@/components/Splash'
import Welcome from '@/components/Welcome'
import Disability from '@/components/Disability'
import DisabilityDetails from '@/components/DisabilityDetails'
import Consent from '@/components/Consent'
import RegistryNames from '@/components/RegistryNames'
import RegistryBirthday from '@/components/RegistryBirthday'
import RegistrySex from '@/components/RegistrySex'
import RegistryJob from '@/components/RegistryJob'
import RegistryJobDetails from '@/components/RegistryJobDetails'
import RegistrySchool from '@/components/RegistrySchool'
import RegistrySchoolDetails from '@/components/RegistrySchoolDetails'
import RegistrySuccess from '@/components/RegistrySuccess'

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
    },
    {
      path: '/consent',
      name: 'Consentimiento',
      component: Consent
    },
    {
      path: '/registry-names',
      name: 'Registro - Nombres',
      component: RegistryNames
    },
    {
      path: '/registry-birthday',
      name: 'Registro - Fecha de nacimiento',
      component: RegistryBirthday
    },
    {
      path: '/registry-sex',
      name: 'Registro - Sexo',
      component: RegistrySex
    },
    {
      path: '/registry-job',
      name: 'Registro - Trabajo',
      component: RegistryJob
    },
    {
      path: '/registry-job-details',
      name: 'Registro - Lugar de trabajo',
      component: RegistryJobDetails
    },
    {
      path: '/registry-school',
      name: 'Registro - Centro',
      component: RegistrySchool
    },
    {
      path: '/registry-school-details',
      name: 'Registro - Nombre del centro',
      component: RegistrySchoolDetails
    },
    {
      path: '/registry-success',
      name: 'Registro completado',
      component: RegistrySuccess
    }
  ]
})
