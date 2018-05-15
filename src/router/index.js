import Vue from 'vue'
import Router from 'vue-router'

// Components
import Splash from '@/components/Splash'
import Welcome from '@/components/Welcome'
import Disability from '@/components/Disability'
import DisabilityDetails from '@/components/DisabilityDetails'
import Consent from '@/components/Consent'
import RejectedConsent from '@/components/RejectedConsent'
// Registration
import Registration from '@/components/Registration'
import RegistrationNames from '@/components/RegistrationNames'
import RegistrationBirthday from '@/components/RegistrationBirthday'
import RegistrationSex from '@/components/RegistrationSex'
import RegistrationJob from '@/components/RegistrationJob'
import RegistrationJobDetails from '@/components/RegistrationJobDetails'
import RegistrationSchool from '@/components/RegistrationSchool'
import RegistrationSchoolDetails from '@/components/RegistrationSchoolDetails'
import RegistrationSuccess from '@/components/RegistrationSuccess'
// Questionnaire
import Questionnaire from '@/components/Questionnaire'
// Question
import Question from '@/components/Question'
import QuestionStart from '@/components/QuestionStart'
import QuestionType from '@/components/QuestionType'
import QuestionAids from '@/components/QuestionAids'
import QuestionSpecification from '@/components/QuestionSpecification'
// Ending
import CompletedQuestionnaire from '@/components/CompletedQuestionnaire'
import Results from '@/components/Results'
import FinalResult from '@/components/FinalResult'
import SendByEmail from '@/components/SendByEmail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'splash',
      component: Splash
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: Welcome
    },
    {
      path: '/disability',
      name: 'disability',
      component: Disability
    },
    {
      path: '/disability-details',
      name: 'disability-details',
      component: DisabilityDetails
    },
    {
      path: '/consent',
      name: 'consent',
      component: Consent
    },
    {
      path: '/rejected-consent',
      name: 'rejected-consent',
      component: RejectedConsent
    },
    {
      path: '/registration',
      name: 'registration',
      component: Registration
    },
    {
      path: '/registration-names',
      name: 'registration-names',
      component: RegistrationNames
    },
    {
      path: '/registration-birthday',
      name: 'registration-birthday',
      component: RegistrationBirthday
    },
    {
      path: '/registration-sex',
      name: 'registration-sex',
      component: RegistrationSex
    },
    {
      path: '/registration-job',
      name: 'registration-job',
      component: RegistrationJob
    },
    {
      path: '/registration-job-details',
      name: 'registration-job-details',
      component: RegistrationJobDetails
    },
    {
      path: '/registration-school',
      name: 'registration-school',
      component: RegistrationSchool
    },
    {
      path: '/registration-school-details',
      name: 'registration-school-details',
      component: RegistrationSchoolDetails
    },
    {
      path: '/registration-success',
      name: 'registration-success',
      component: RegistrationSuccess
    },
    {
      path: '/questionnaire/:questionnaire_id',
      component: { template: '<router-view/>' },
      children: [
        {
          path: '',
          name: 'stage',
          component: Questionnaire
        },
        {
          path: 'question/:question_id',
          component: Question,
          children: [
            {
              path: '',
              name: 'question',
              component: QuestionStart
            },
            {
              path: 'type/:question_type',
              name: 'question-type',
              component: QuestionType
            },
            {
              path: 'aids',
              name: 'question-aids',
              component: QuestionAids
            },
            {
              path: 'specification',
              name: 'question-specification',
              component: QuestionSpecification
            }
          ]
        }
      ]
    },
    {
      path: '/completed-questionnaire',
      name: 'completed-questionnaire',
      component: CompletedQuestionnaire
    },
    {
      path: '/result/:dimension_id',
      name: 'result',
      component: Results
    },
    {
      path: '/final-result',
      name: 'final-result',
      component: FinalResult
    },
    {
      path: '/send-by-email',
      name: 'send-by-email',
      component: SendByEmail
    }
  ]
})
