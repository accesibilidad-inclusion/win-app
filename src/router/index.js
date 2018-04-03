import Vue from 'vue'
import Router from 'vue-router'

// Components
import Splash from '@/components/Splash'
import Welcome from '@/components/Welcome'
import Disability from '@/components/Disability'
import DisabilityDetails from '@/components/DisabilityDetails'
import Consent from '@/components/Consent'
// Registration
import RegistrationNames from '@/components/RegistrationNames'
import RegistrationBirthday from '@/components/RegistrationBirthday'
import RegistrationSex from '@/components/RegistrationSex'
import RegistrationJob from '@/components/RegistrationJob'
import RegistrationJobDetails from '@/components/RegistrationJobDetails'
import RegistrationSchool from '@/components/RegistrationSchool'
import RegistrationSchoolDetails from '@/components/RegistrationSchoolDetails'
import RegistrationSuccess from '@/components/RegistrationSuccess'
// Question
import Question from '@/components/Question'
// import QuestionYes from '@/components/QuestionYes'
// import QuestionNo from '@/components/QuestionNo'
// import QuestionAssistances from '@/components/QuestionAssistances'

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
      path: '/registration-names',
      name: 'Registro - Nombres',
      component: RegistrationNames
    },
    {
      path: '/registration-birthday',
      name: 'Registro - Fecha de nacimiento',
      component: RegistrationBirthday
    },
    {
      path: '/registration-sex',
      name: 'Registro - Sexo',
      component: RegistrationSex
    },
    {
      path: '/registration-job',
      name: 'Registro - Trabajo',
      component: RegistrationJob
    },
    {
      path: '/registration-job-details',
      name: 'Registro - Lugar de trabajo',
      component: RegistrationJobDetails
    },
    {
      path: '/registration-school',
      name: 'Registro - Centro',
      component: RegistrationSchool
    },
    {
      path: '/registration-school-details',
      name: 'Registro - Nombre del centro',
      component: RegistrationSchoolDetails
    },
    {
      path: '/registration-success',
      name: 'Registro completado',
      component: RegistrationSuccess
    },
    {
      path: '/question/:id',
      component: Question
      // children: [
      //   {
      //     path: 'type-yes',
      //     component: QuestionYes
      //   },
      //   {
      //     path: 'type-no',
      //     component: QuestionNo
      //   },
      //   {
      //     path: 'assistances',
      //     component: QuestionAssistances
      //   }
      // ]
    }
  ]
})
