import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import * as mutations from './mutations'
import * as getters from './getters'

Vue.use(Vuex)

const state = {
  user: {
    disability: null,
    disabilityTypes: [],
    consent: null,
    name: '',
    lastname: '',
    dayBirth: null,
    monthBirth: null,
    yearBirth: null,
    sex: null,
    job: null,
    jobPlace: '',
    school: null,
    schoolName: ''
  },
  script: [],
  questions: [],
  options: []
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  plugins: [createPersistedState({
    key: 'win-app'
  })]
})

export default store
