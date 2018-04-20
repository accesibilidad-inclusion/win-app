import Vue from 'vue'

export const saveUser = ({ commit, state }) => {
  Vue.http
    .post('https://admin.apoyos.win/api/v1/subjects', state.user)
    .then(
      response => {
        commit('userId', response.body.id)
      },
      response => {
        console.log(response)
      }
    )
}

export const newSurvey = ({ dispatch, commit, state }) => {
  const userId = state.user.id
  Vue.http
    .post('https://admin.apoyos.win/api/v1/surveys', { subject_id: userId })
    .then(
      response => {
        commit('hash', response.body.id)
        commit('saveSurvey', response.body)
      },
      response => {
        console.log(response)
      }
    )
}
