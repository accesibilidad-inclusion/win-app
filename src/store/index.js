import Vue from 'vue'
import Vuex from 'vuex'
import * as mutations from './mutations'

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
  }
}

const store = new Vuex.Store({
  state,
  mutations
})

export default store