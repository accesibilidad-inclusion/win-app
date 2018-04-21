import Vue from 'vue'

export const saveUser = ({ commit, state }) => {
  Vue.http
    .post('https://admin.apoyos.win/api/v1/subjects', state.user, {headers: {'X-WIN-SURVEY-HASH': state.hash}})
    .then(
      response => {
        commit('userId', response.body.id)
      }
    )
}

export const newSurvey = ({ dispatch, commit, state }) => {
  const userId = state.user.id
  Vue.http
    .post('https://admin.apoyos.win/api/v1/surveys', { subject_id: userId })
    .then(
      response => {
        commit('saveSurvey', response.body)
      }
    )
}

export const saveQuestionAnswers = (context, questionId) => {
  if (context.getters.isQuestionComplete(questionId)) {
    const answers = context.getters.getQuestionAnswers(questionId)
    Vue.http
      .post('https://admin.apoyos.win/api/v1/answers', answers)
  }
}

export const setResponseTime = ({ commit }, payload) => {
  return new Promise((resolve, reject) => {
    commit('responseTime', payload)
    resolve()
  })
}
