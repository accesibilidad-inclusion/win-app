import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import * as mutations from './mutations'
import * as getters from './getters'
import * as actions from './actions'

Vue.use(Vuex)

const state = {
  hash: '',
  event: null,
  survey_id: '',
  user: {
    id: null,
    disability: null,
    disability_types: [],
    consent: null,
    consent_at: '',
    personal_id: '',
    given_name: '',
    family_name: '',
    dayBirth: '',
    monthBirth: '',
    yearBirth: '',
    birthday: '',
    sex: null,
    works: null,
    works_at: '',
    studies: null,
    studies_at: ''
  },
  questionnaire: [],
  questions: [],
  options: [],
  aids: [],
  specifications: [],
  responseTime: [],
  results: []
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  plugins: [createPersistedState({
    key: 'win-app'
  })]
})

export default store
