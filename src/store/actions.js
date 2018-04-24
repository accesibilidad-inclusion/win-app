import Vue from 'vue'

export const saveUser = ({ commit, state }) => {
  Vue.http
    .post('https://admin.apoyos.win/api/v1/subjects', state.user, {headers: {'X-WIN-SURVEY-HASH': state.hash}})
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
    .post('https://admin.apoyos.win/api/v1/surveys', {subject_id: userId})
    .then(
      response => {
        commit('saveSurvey', response.body)
      },
      response => {
        console.log(response)
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

export const getResults = ({commit, state}) => {
  Vue.http
    .get('https://admin.apoyos.win/api/v1/surveys/' + state.survey_id + '/' + 'results', {params: {hash: state.hash}, headers: {'X-WIN-SURVEY-HASH': state.hash}})
    .then(response => commit('results', response.body))
}
